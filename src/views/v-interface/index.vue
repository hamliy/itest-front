<!--
  -- --------------------------------------------------------
  -- @file index.vue
  -- @description : 接口视图
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-30 17:39:48
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-22 17:41:44
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="content-page">
    <c-interface-tree-card
      :tree-data="treeDatas"
      @createTheme="handleCreateTheme"
      @nodeClick="handleNodeClick"
      @createInterface="handleCreateInterface"
      @createThemeSub="handleCreateThemeSub"
      @remove="handleRemove"
      @edit="handleEdit"/>
    <c-info-panel>
      <c-theme-info
        :info="themeInfo"/>
    </c-info-panel>
    <c-interface-dialog-new
      :visible.sync="dialogInterfaceVisible"
      :title="'新增接口'"
      :form-data="formInterfaceData"
      @confirm="addInterface"/>
    <c-theme-dialog-new
      :visible.sync="dialogThemeVisible"
      :title="textThemeMap[themeType]"
      :form-data="formThemeData"
      @confirm="addTheme"/>
  </div>
</template>

<script>

import * as cInterface from 'store/constants/interface';
import mInterface from 'mixins/m-interface';
import mUtil from 'mixins/m-util';
import CInterfaceDialogNew from './components/CInterfaceDialogNew';
import CThemeDialogNew from './components/CThemeDialogNew';
import CInterfaceTreeCard from './components/CInterfaceTreeCard';
import CThemeInfo from './components/CThemeInfo';
import CInfoPanel from './components/CInfoPanel';

export default {
  name: 'VInterface',
  components: {
    CInterfaceDialogNew,
    CThemeDialogNew,
    CInterfaceTreeCard,
    CThemeInfo,
    CInfoPanel
  },
  mixins: [mInterface, mUtil],
  data() {
    return {
      filterText: '',
      dialogInterfaceVisible: false,
      dialogThemeVisible: false,
      id: 1000,
      formThemeData: {
        name: '',
        desc: ''
      },
      formInterfaceData: {
        name: '',
        desc: ''
      },
      textThemeMap: {
        theme: '新增接口主题',
        subtheme: '新增子主题'
      },
      type: 'new',
      themeType: 'new',
      treeDatas: [],
      themeInfo: {
        name: '',
        desc: ''
      }
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },
  created() {
    this.getTheme();
  },
  methods: {
    getTheme() {
      this[cInterface.GET_THEME]({})
      .then(res => {
        const nodes = res.data.data;
        nodes.forEach(node => {
          node.list = node.sub_themes.concat(node.list);
        });
        this.treeDatas = nodes;
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },

    addInterface(formData) {
      this[cInterface.CREATE_THEME_INTERFACE](formData)
      .then(() => {
        this.dialogInterfaceVisible = false;
        this.$message({
          showClose: true,
          message: '新增接口成功。',
          type: 'success'
        });
        this.getTheme();
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    addTheme(formData) {
      this[this.themeType === 'theme' ?
        cInterface.CREATE_THEME : cInterface.CREATE_THEME_SUB](formData)
      .then(() => {
        this.dialogThemeVisible = false;
        this.$message({
          showClose: true,
          message: `${this.textThemeMap[this.themeType]}成功。`,
          type: 'success'
        });
        this.getTheme();
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    removeTheme(node, data) {
      const params = {
        theme_id: node.data._id
      };
      this[cInterface.REMOVE_THEME](params)
      .then(() => {
        this.$message({
          showClose: true,
          message: '删除成功。',
          type: 'success'
        });
        this.removeNode(node, data);
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    removeThemeSub(node, data) {
      const params = {
        theme_id: node.parent.data._id,
        sub_theme_name: node.data.name
      };
      this[cInterface.REMOVE_THEME_SUB](params)
      .then(() => {
        this.$message({
          showClose: true,
          message: '删除成功。',
          type: 'success'
        });
        this.removeNode(node, data);
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    removeThemeInterface(node, data) {
      console.log(node);
      console.log(node.data.interface_id);
      const params = {
        theme_id: node.level === 2 ?
          node.parent.data._id : node.parent.parent.data._id,
        sub_theme_name: node.level === 2 ? '' : node.data.name,
        interface_id: node.data.interface_id
      };
      this[cInterface.REMOVE_THEME_INTERFACE](params)
      .then(() => {
        this.$message({
          showClose: true,
          message: '删除成功。',
          type: 'success'
        });
        this.removeNode(node, data);
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    removeNode(node, data) {
      const parent = node.parent || {};
      const list = parent.data.list || parent.data;
      const index = list.findIndex(d => d._id === data._id);
      list.splice(index, 1);
    },
    handleCreateTheme() {
      this.dialogThemeVisible = true;
      this.themeType = 'theme';
      this.formThemeData = {
        name: '',
        desc: ''
      };
    },

    handleCreateInterface(node) {
      console.log(node);
      this.dialogInterfaceVisible = true;
      this.formInterfaceData = {
        name: '',
        desc: '',
        theme_id: node.level === 1 ? node.data._id : node.parent.data._id,
        sub_theme_name: node.level === 1 ? '' : node.data.name
      };
    },
    handleCreateThemeSub(node) {
      this.dialogThemeVisible = true;
      this.themeType = 'subtheme';
      this.formThemeData = {
        name: '',
        desc: '',
        theme_id: node.data._id
      };
    },

    handleNodeClick(data) {
      this.themeInfo = {
        name: data.name,
        desc: data.desc
      };
    },

    handleEdit(node, data) {
      this.dialogInterfaceVisible = true;
      this.type = 'edit';
      this.formData = {
        name: data.label,
        type: 'interface'
      };
      data.label = 'test';
      // const newChild = { id: this.id + 1, label: 'testtest', children: [] };
      // if (!data.children) {
      //   this.$set(data, 'children', []);
      // }
      // data.children.push(newChild);
    },

    handleRemove(node, data) {
      const message = '确定要删除吗，是否继续？';
      const title = '删除操作';
      this.$confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger'
      }).then(() => {
        if (node.level === 1) {
          this.removeTheme(node, data);
        } else if (node.data.list) {
          this.removeThemeSub(node, data);
        } else {
          this.removeThemeInterface(node, data);
        }
      }).catch(() => '');
    }

  }
};
</script>

<style lang="scss">
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .content-page {
    display: flex;
  }

  .box-card {
    width: 380px;
    min-height: calc(100vh - 72px);
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .live-scrollbar {
      height: 100%;
    }

    .interface-tree {
      padding: 10px 0;
    }

    .view-header {
      padding: 0 10px 20px;
    }
  }

  .icons-list {
    position: absolute;
    right: 20px;
    visibility: hidden;

    svg:hover {
      opacity: 0.5;
    }
  }

  .el-tree-node__content:hover {
    .custom-tree-node > .icons-list {
      visibility: visible;
    }
  }

  .is-current > .el-tree-node__content > .custom-tree-node > .icons-list {
    visibility: visible;
  }
</style>
