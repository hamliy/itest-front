<!--
  -- --------------------------------------------------------
  -- @file CApiUseCaseTree.vue
  -- @description : 用例树
  -- @author  hanli
  -- @date 2018-10-09 17:21:45
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-21 17:39:06
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="box-card">
    <c-view-header title="用例信息">
      <div style="float:right;">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="small"
          circle
          @click="handleCreateGroup"/>
      </div>
    </c-view-header>
    <c-group-tree
      :ref-name="'useCaseGroupTree'"
      :group-data="groupData"
      :theme="'用例'"
      :prop="prop"
      @nodeClick="handleNodeClick"
      @create="handleCreateApiUseCase"
      @remove="handleRemove"
      @editGroup="handleGroupEdit"/>
    <c-api-use-case-group-dialog
      :visible.sync="dialogGroupVisible"
      :form-data="formGroupData"
      :title="textMap[dialogGroupStatus]"
      @confirm="createGroup"/>
    <c-api-use-case-dialog
      :visible.sync="dialogUseCaseVisible"
      :form-data="formUseCaseData"
      :title="'新增用例'"
      :groups="groupData"
      @confirm="createInterfaceUseCase"/>
  </div>
</template>

<script>
  import mInterfaceUseCase from 'mixins/m-interface-use-case';
  import mInterfaceUseCaseGroup from 'mixins/m-interface-use-case-group';
  import mUtil from 'mixins/m-util';
  import * as cInterfaceUseCase from 'store/constants/interface-use-case';
  import * as cInterfaceUseCaseGroup
    from 'store/constants/interface-use-case-group';
  import CApiUseCaseGroupDialog from './CApiUseCaseGroupDialog';
  import CApiUseCaseDialog from './CApiUseCaseDialog';


  export default {
    name: 'CApiUseCaseTree',
    components: {
      CApiUseCaseGroupDialog,
      CApiUseCaseDialog
    },
    mixins: [mInterfaceUseCase, mInterfaceUseCaseGroup, mUtil],
    props: {
      groupData: {
        type: Array,
        default: null
      },
      prop: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        isSelectUseCase: false,
        dialogGroupVisible: false,
        dialogGroupStatus: 'new',
        dialogUseCaseVisible: false,
        formGroupData: this.initFormGroupData(),
        formUseCaseData: this.initFormUseCaseData(),
        textMap: {
          view: '查看分组',
          edit: '编辑分组',
          new: '新增分组'
        }
      };
    },
    methods: {
      fetchTreeData() {
        this.$emit('fetchTreeData');
      },
      initFormGroupData() {
        return {
          name: '',
          desc: ''
        };
      },
      initFormUseCaseData(id) {
        return {
          name: '',
          desc: '',
          level: 0,
          groupId: id,
          interfaceId: null,
          options: {}
        };
      },
      // 判断树节点类型
      judgeNode(node) {
        if (node.data.id === -1) {
          return 'root';
        } else if (node.level === 1) {
          return 'group';
        }
        return 'useCase';
      },
      handleCreateGroup() {
        this.dialogGroupVisible = true;
        this.dialogGroupStatus = 'new';
        this.formGroupData = this.initFormGroupData();
      },

      handleCreateApiUseCase(node) {
        this.dialogUseCaseVisible = true;
        this.formUseCaseData = this.initFormUseCaseData(node.data.id);
      },
      // 点击节点
      handleNodeClick(node, data) {
        this.$emit('nodeCheck', node, data);
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
            this.removeGroup(data.id);
          } else {
            this.removeUseCase(data.id);
          }
        }).catch(() => '');
      },

      createGroup(formData) {
        this[cInterfaceUseCaseGroup.CREATE_INTERFACE_USE_CASE_GROUP](formData)
        .then(() => {
          this.dialogGroupVisible = false;
          this.$message({
            showClose: true,
            message: '新增用例组成功。',
            type: 'success'
          });
          this.fetchTreeData();
        })
        .catch(err => {
          this.$_mUtil_messageError(err);
        });
      },
      createInterfaceUseCase(formData) {
        this[cInterfaceUseCase.CREATE_INTERFACE_USE_CASE](formData)
        .then(() => {
          this.dialogInterfaceVisible = false;
          this.$message({
            showClose: true,
            message: '新增用例成功。',
            type: 'success'
          });
          this.fetchTreeData();
        })
        .catch(err => {
          this.$_mUtil_messageError(err);
        });
      },
      removeGroup(id) {
        this[cInterfaceUseCaseGroup.DELETE_INTERFACE_USE_CASE_GROUP]({ id })
        .then(() => {
          this.dialogGroupVisible = false;
          this.$message({
            showClose: true,
            message: '删除成功。',
            type: 'success'
          });
          this.fetchTreeData();
        })
        .catch(err => {
          this.$_mUtil_messageError(err);
        });
      }
    }
  };
</script>

<style lang="scss">
  .box-card {
    width: 300px;
    min-height: calc(100vh - 72px);
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .view-header {
      padding: 0 10px 20px;
    }
  }
</style>
