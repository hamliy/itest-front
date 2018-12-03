<!--
  -- --------------------------------------------------------
  -- @file index.vue
  -- @description : 接口视图
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-30 17:39:48
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-12-03 17:29:41
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="content-page">
    <c-interface-tree-card
      ref="treeCard"
      :group-data="groupData"
      @nodeClick="handleNodeClick"
      @createInterface="handleCreateInterface"
      @createGroup="handleCreateGroup"
      @remove="handleRemove"
      @edit="handleGroupEdit"/>
    <c-info-panel>
      <c-interface-info
        v-if="isSelectInterface"
        :info="interfaceInfo"
        @updateInfo="updateInterfaceInfo"/>
      <c-group-info
        v-else
        :info="groupInfo"/>
    </c-info-panel>
    <c-interface-dialog-new
      :visible.sync="dialogInterfaceVisible"
      :title="'新增接口'"
      :form-data="formInterfaceData"
      :groups="groupData"
      @confirm="addInterface"/>
    <c-group-dialog-new
      :visible.sync="dialogGroupVisible"
      :form-data="formGroupData"
      :title="textMap[dialogGroupStatus]"
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
      groupData: [],
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
        method: 'GET',
        groupId: '',
        option: {}
      },
      interfaceInfo: {
        name: '',
        desc: '',
        path: '',
        method: 'GET',
        option: {
          headers: [],
          params: {
            body: [],
            path: [],
            query: [],
            type: 0
          },
          example: {
            body: {},
            path: {},
            query: {}
          },
          response: [{
            example: {},
            params: [],
            status: 200,
            statusText: ''
          }],
          responseIndex: 0
        }
      },
      groupInfo: {
        name: '',
        desc: ''
      },
      dialogInterfaceStatus: 'new',
      dialogGroupStatus: 'new',
      textMap: {
        view: '查看分组',
        edit: '编辑分组',
        new: '新增分组'
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
        option: {
          headers: [],
          params: {
            body: [],
            path: [],
            query: [],
            type: 0
          },
          example: {
            body: {},
            path: {},
            query: {}
          },
          response: [{
            example: {},
            params: [],
            status: 200,
            statusText: ''
          }],
          responseIndex: 0
        }
      };
    },
    // 判断树节点类型
    judgeNode(node) {
      if (node.level === 1) {
        return 'group';
      }
      return 'interface';
    },
    // 获取分组接口信息
    getGroupInterface() {
      this[cInterface.GET_GROUP_INTERFACE]({
      })
      .then(res => {
        this.groupData = res.data;
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    // 获取接口信息
    getInterface(node, data) {
      // this.initInterfaceInfo();
      this[cInterface.GET_INTERFACE]({
        interfaceId: data.id
      })
      .then(res => {
        this.interfaceInfo = Object.assign({}, res.data);
        console.log(this.interfaceInfo);
      })
      .catch(err => {
        this.initInterfaceInfo();
        this.$_mUtil_messageError(err);
      });
    },
    // 获取接口组包含接口信息
    getGroup(node, data) {
      this[cInterface.GET_INTERFACE_BY_GROUP]({
        groupId: data.id
      })
      .then(res => {
        this.groupInfo = Object.assign({}, res.data);
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },

    addInterface(formData) {
      this[cInterface.CREATE_INTERFACE](formData)
      .then(() => {
        this.dialogInterfaceVisible = false;
        this.$message({
          showClose: true,
          message: '新增接口成功。',
          type: 'success'
        });
        this.getGroupInterface();
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    addGroup(formData) {
      this[cInterfaceGroup.CREATE_INTERFACE_GROUP](formData)
      .then(() => {
        this.dialogGroupVisible = false;
        this.$message({
          showClose: true,
          message: '新增接口分组成功。',
          type: 'success'
        });
        this.getGroupInterface();
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    removeGroup(node) {
      const params = {
        id: node.data.id
      };
      this[cInterfaceGroup.DELETE_INTERFACE_GROUP](params)
      .then(() => {
        this.$message({
          showClose: true,
          message: '删除成功。',
          type: 'success'
        });
        this.getGroupInterface();
        this.$refs.treeCard.$refs
        .interfaceTree.setCurrentNode(node.parent.data);
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
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
    removeInterface(node) {
      this[cInterface.DELETE_INTERFACE]({
        id: node.data.id
      })
      .then(() => {
        this.$message({
          showClose: true,
          message: '删除成功。',
          type: 'success'
        });
        this.getGroupInterface();
        this.$refs.treeCard.$refs
        .interfaceTree.setCurrentNode(node.parent.data);
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
      this.dialogGroupStatus = 'new';
      this.formGroupData = {
        name: '',
        desc: ''
      };
    },

    handleCreateInterface(node) {
      this.dialogInterfaceVisible = true;
      this.dialogInterfaceStatus = 'new';
      this.formInterfaceData = {
        name: '',
        desc: '',
        path: '',
        method: 'GET',
        groupId: node.data.id,
        option: {}
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
        this.getGroup(node, data);
      }
    },
    // 点击节点编辑
    handleGroupEdit(node, data) {
      this.dialogGroupVisible = true;
      this.dialogGroupStatus = 'edit';
      this.formGroupData = {
        id: data.id,
        name: data.name,
        desc: data.desc
      };
    },
    // 点击移除节点
    handleRemove(node, data) {
      const message = `确定要删除${data.name}吗，是否继续?`;
      const title = '删除操作';
      this.$confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger'
      }).then(() => {
        const nodeType = this.judgeNode(node);
        if (nodeType === 'group') {
          this.removeGroup(node, data);
        } else {
          this.removeInterface(node, data);
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
