<!--
  -- --------------------------------------------------------
  -- @file index.vue
  -- @description : 接口视图
  -- @author  hanli
  -- @date 2018-09-30 17:39:48
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-21 17:39:28
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="content-page">
    <c-api-use-case-tree
      :group-data="groupInfo"
      :prop="prop"
      @fetchTreeData="fetchTreeData"
      @nodeCheck="handleNodeClick"/>
    <div class="info-panel">
      <c-api-use-case-edit
        v-if="activeUseCase"/>
      <c-api-use-case-list
        v-else
        :list-loading="listLoading"
        :use-case-list="useCaseList"
        @search="searchUseCase"/>
    </div>
  </div>
</template>

<script>
import mInterfaceUseCase from 'mixins/m-interface-use-case';
import * as cInterfaceUseCase from 'store/constants/interface-use-case';
import * as cInterfaceUseCaseGroup
  from 'store/constants/interface-use-case-group';
import mInterfaceUseCaseGroup from 'mixins/m-interface-use-case-group';
import mUtil from 'mixins/m-util';
import CApiUseCaseTree from './components/CApiUseCaseTree';
import CApiUseCaseList from './components/CApiUseCaseList';
import CApiUseCaseEdit from './components/c-api-use-case-edit/Index';


export default {
  name: 'VApiUseCase',
  components: {
    CApiUseCaseTree,
    CApiUseCaseEdit,
    CApiUseCaseList
  },
  mixins: [mInterfaceUseCaseGroup, mInterfaceUseCase, mUtil],
  data() {
    return {
      listLoading: false,
      prop: {
        children: 'member',
        label: 'name'
      },
      activeUseCase: false,
      useCaseList: []
    };
  },
  computed: {
    groupInfo() {
      return this.$store.getters.apiUseCaseGroup;
    }
  },
  created() {
    this.fetchTreeData();
    this.refreshAllGroupApi();
  },
  methods: {
    fetchTreeData() {
      this[cInterfaceUseCaseGroup.GET_INTERFACE_USE_CASE_GROUP]()
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    // 获取所有接口信息 按组分
    refreshAllGroupApi() {
      this.$store.dispatch('GET_INTERFACE_GROUP');
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
    // 点击节点
    handleNodeClick(node, data) {
      const nodeType = this.judgeNode(node);
      if (nodeType === 'root') {
        this.isSelectUseCase = false;
        this.getAllApiUseCase();
      } else if (nodeType === 'useCase') {
        this.isSelectUseCase = true;
        this.getApiUseCaseById(data.id);
      } else if (nodeType === 'group') {
        this.isSelectUseCase = false;
        this.getApiUseCaseByGroup(data.id);
      }
    },
    // 获取用例信息
    getApiUseCaseById(useCaseId) {
      // this.initInterfaceInfo();
      this.activeUseCase = true;
      this[cInterfaceUseCase.GET_INTERFACE_USE_CASE_BY_ID]({
        useCaseId
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    // 获取所有用例信息
    getAllApiUseCase() {
      // this.initInterfaceInfo();
      this.activeUseCase = false;
      this.listLoading = true;
      this[cInterfaceUseCase.GET_INTERFACE_USE_CASE_ALL]()
      .then(res => {
        this.useCaseList = res.data;
        this.listLoading = false;
      }).catch(err => {
        this.$_mUtil_messageError(err);
        this.listLoading = false;
      });
    },
    // 获取组用例信息
    getApiUseCaseByGroup(useCaseGroupId) {
      this.activeUseCase = false;
      this[cInterfaceUseCase.GET_INTERFACE_USE_CASE_BY_GROUP_ID]({
        useCaseGroupId
      })
      .then(res => {
        this.useCaseList = res.data;
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    // 搜索用例
    searchUseCase(listQuery) {
      this.listLoading = true;
      this[cInterfaceUseCase.SEARCH_INTERFACE_USE_CASE](listQuery)
      .then(response => {
        this.useCaseList = response.data.data;
        this.total = response.data.total;
        this.listLoading = false;
      })
      .catch(err => {
        this.listLoading = false;
        this.$_mUtil_messageError(err);
      });
    }
  }
};
</script>

<style lang="scss">
  .content-page {
    display: flex;
  }

  .info-panel {
    flex: 1;
    height: 100%;
    min-height: calc(100vh - 72px);
    margin-left: 15px;
    overflow: hidden;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    transition: 0.3s;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  }
</style>
