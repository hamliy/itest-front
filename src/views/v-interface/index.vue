<!--
  -- --------------------------------------------------------
  -- @file index.vue
  -- @description : 接口视图
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-30 17:39:48
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-11-26 17:12:36
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="content-page">
    <c-interface-tree-card
      ref="treeCard"
      :tree-data="treeDatas"
      @nodeClick="handleNodeClick"
      @createInterface="handleCreateInterface"
      @createGroup="handleCreateGroup"
      @remove="handleRemove"
      @edit="handleEdit"/>
    <!-- <c-info-panel>
      <c-interface-info
        v-if="isSelectInterface"
        :info="interfaceInfo"
        @updateInfo="updateInterfaceInfo"/>
      <c-theme-info
        v-else
        :info="themeInfo"/>
    </c-info-panel> -->
    <c-interface-dialog-new
      :visible.sync="dialogInterfaceVisible"
      :title="'新增接口'"
      :form-data="formInterfaceData"
      @confirm="addInterface"/>
    <c-group-dialog-new
      :visible.sync="dialogGroupVisible"
      :form-data="formGroupData"
      @confirm="addGroup"/>
  </div>
</template>

<script>

import * as cInterface from 'store/constants/interface';
import * as cInterfaceGroup from 'store/constants/interface-group';
import mInterface from 'mixins/m-interface';
import mInterfaceGroup from 'mixins/m-interface-group';
import mUtil from 'mixins/m-util';
import CInterfaceDialogNew from './components/CInterfaceDialogNew';
import CGroupDialogNew from './components/CGroupDialogNew';
import CInterfaceTreeCard from './components/CInterfaceTreeCard';
import CGroupInfo from './components/CGroupInfo';
import CInterfaceInfo from './components/CInterfaceInfo';
import CInfoPanel from './components/CInfoPanel';

export default {
  name: 'VInterface',
  components: {
    CInterfaceDialogNew,
    CGroupDialogNew,
    CInterfaceTreeCard,
    CGroupInfo,
    CInterfaceInfo,
    CInfoPanel
  },
  mixins: [mInterface, mInterfaceGroup, mUtil],
  data() {
    return {
      filterText: '',
      dialogInterfaceVisible: false,
      dialogGroupVisible: false,
      id: 1000,
      isSelectInterface: false,
      formGroupData: {
        name: '',
        desc: ''
      },
      formInterfaceData: {
        name: '',
        desc: '',
        path: '',
        mothed: 'GET'
      },
      type: 'new',
      GroupType: 'new',
      treeDatas: [],
      groupInfo: {
        name: '',
        desc: ''
      },
      interfaceInfo: {
        name: '',
        desc: '',
        path: '',
        method: 'GET',
        content_type: '',
        req_body_type: 'json',
        req_body_params: [],
        req_example: '',
        res_body_type: 'json',
        res_body_params: [],
        res_example: '',
        headers: []
      }
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },
  created() {
    this.getGroupInterface();
  },
  methods: {
    initInterfaceInfo() {
      this.interfaceInfo = {
        name: '',
        desc: '',
        path: '',
        method: 'GET',
        content_type: '',
        req_body_type: 'json',
        req_body_params: [],
        req_example: '',
        res_body_type: 'json',
        res_body_params: [],
        res_example: '',
        headers: [],
        theme_id: '',
        sub_theme_name: ''
      };
    },
    // 判断树节点类型
    judgeNode(node) {
      console.log(node);
      if (node.level === 1) {
        return 'theme';
      } else if (node.data.list) {
        return 'subTheme';
      }
      return 'interface';
    },
    // 获取分组接口信息
    getGroupInterface() {
      this[cInterface.GET_GROUP_INTERFACE]({})
      .then(res => {
        this.treeDatas = res.data.data;
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    // 获取接口信息
    getInterface(node, data) {
      this.initInterfaceInfo();
      this[cInterface.GET_INTERFACE]({
        interface_id: data.interface_id
      })
      .then(res => {
        console.log(node);
        this.interfaceInfo = Object.assign({}, res.data);
        this.interfaceInfo.theme_id = node.level === 2 ?
          node.parent.data._id : node.parent.parent.data._id;
        this.interfaceInfo.sub_theme_name = node.level === 2 ?
          '' : node.parent.data.name;
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },

    // addInterface(formData) {
    //   this[cInterface.CREATE_THEME_INTERFACE](formData)
    //   .then(() => {
    //     this.dialogInterfaceVisible = false;
    //     this.$message({
    //       showClose: true,
    //       message: '新增接口成功。',
    //       type: 'success'
    //     });
    //     this.getTheme();
    //   })
    //   .catch(err => {
    //     this.$_mUtil_messageError(err);
    //   });
    // },
    addGroup(formData) {
      this[cInterfaceGroup.CREATE_INTERFACE_GROUP](formData)
      .then(() => {
        this.dialogThemeVisible = false;
        this.$message({
          showClose: true,
          message: '新增接口分组成功。',
          type: 'success'
        });
        this.getTheme();
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    // removeTheme(node) {
      // const params = {
      //   theme_id: node.data._id
      // };
      // this[cInterface.REMOVE_THEME](params)
      // .then(() => {
      //   this.$message({
      //     showClose: true,
      //     message: '删除成功。',
      //     type: 'success'
      //   });
      //   this.getTheme();
      //   this.$refs.treeCard.$refs
      //   .interfaceTree.setCurrentNode(node.parent.data);
      // })
      // .catch(err => {
      //   this.$_mUtil_messageError(err);
      // });
    // },
    // removeThemeSub(node) {
      // const params = {
      //   theme_id: node.parent.data._id,
      //   sub_theme_name: node.data.name
      // };
      // this[cInterface.REMOVE_THEME_SUB](params)
      // .then(() => {
      //   this.$message({
      //     showClose: true,
      //     message: '删除成功。',
      //     type: 'success'
      //   });
      //   this.getTheme();
      //   this.$refs.treeCard.$refs
      //   .interfaceTree.setCurrentNode(node.parent.data);
      // })
      // .catch(err => {
      //   this.$_mUtil_messageError(err);
      // });
    // },
    // removeThemeInterface(node) {
    //   const params = {
    //     theme_id: node.level === 2 ?
    //       node.parent.data._id : node.parent.parent.data._id,
    //     sub_theme_name: node.level === 2 ? '' : node.parent.data.name,
    //     interface_id: node.data.interface_id
    //   };
      // this[cInterface.REMOVE_THEME_INTERFACE](params)
      // .then(() => {
      //   this.$message({
      //     showClose: true,
      //     message: '删除成功。',
      //     type: 'success'
      //   });
      //   this.getTheme();
      //   this.$refs.treeCard.$refs
      //   .interfaceTree.setCurrentNode(node.parent.data);
      // })
      // .catch(err => {
      //   this.$_mUtil_messageError(err);
      // });
    // },
    removeNode(node, data) {
      const parent = node.parent || {};
      const list = parent.data.list || parent.data;
      const index = list.findIndex(d => d._id === data._id);
      list.splice(index, 1);
    },
    // 接口基本信息保存
    basicSave(info) {
      this[cInterface.UPDATE_INTERFACE](info)
      .then(() => {
        this.$message({
          showClose: true,
          message: '更新数据成功。',
          type: 'success'
        });
        this.interfaceInfo = Object.assign({}, info);
        this.getGroup();
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    // 接口其他信息信息保存
    updateBodyInfo(type, info) {
      info.update_type = type;
      this[cInterface.UPDATE_INTERFACE](info)
      .then(() => {
        this.$message({
          showClose: true,
          message: '更新数据成功。',
          type: 'success'
        });
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    updateInterfaceInfo(type, info) {
      if (type === 'basicInfo') {
        this.basicSave(info);
      } else {
        this.updateBodyInfo(type, info);
      }
    },
    handleCreateGroup() {
      this.dialogGroupVisible = true;
      this.formGroupData = {
        name: '',
        desc: ''
      };
    },

    handleCreateInterface(node) {
      this.dialogInterfaceVisible = true;
      this.formInterfaceData = {
        name: '',
        desc: '',
        path: '',
        method: 'GET',
        theme_id: node.level === 1 ? node.data._id : node.parent.data._id,
        sub_theme_name: node.level === 1 ? '' : node.data.name
      };
    },
    // 点击节点
    handleNodeClick(node, data) {
      const nodeType = this.judgeNode(node);
      if (nodeType === 'interface') {
        this.isSelectInterface = true;
        this.getInterface(node, data);
      } else {
        this.isSelectInterface = false;
        this.themeInfo = {
          name: data.name,
          desc: data.desc
        };
      }
    },
    // 点击节点编辑
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
    // 点击移除节点
    handleRemove(node, data) {
      const message = '确定要删除吗，是否继续？';
      const title = '删除操作';
      this.$confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger'
      }).then(() => {
        const nodeType = this.judgeNode(node);
        if (nodeType === 'theme') {
          this.removeTheme(node, data);
        } else if (nodeType === 'subTheme') {
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
