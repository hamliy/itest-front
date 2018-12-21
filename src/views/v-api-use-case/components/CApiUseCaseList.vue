<!--
  -- --------------------------------------------------------
  -- @file CApiUseCaseList.vue
  -- @description : 用例集列表
  -- @author hanli <lihan_li@test.com>
  -- @date 2018-12-21 14:05:51
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-21 17:22:20
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div>
    <c-view-header title="用例列表">
      <div class="action">
        <el-button
          type="primary"
          round
          @click="handleCreate">创建新用例</el-button>
      </div>
    </c-view-header>
    <el-form
      :inline="true"
      class="demo-form-inline">
      <el-form-item>
        <el-input
          v-model="nameQuery"
          placeholder="项目名"
          @keyup.enter.native="handleQuery"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">查询</el-button>
      </el-form-item>
    </el-form>
    <c-api-use-case-list-table
      :list-loading="listLoading"
      :list="useCaseList"
      class="table-container"
      @edit="handleEdit"
      @view="handleView"
      @delete="handleDelete"
      @select="handleSelect"/>
    <div class="pagination-container">
      <el-pagination
        :current-page="listQuery.page"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="listQuery.pageSize"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"/>
    </div>
  </div>
</template>

<script>
import mInterfaceUseCase from 'mixins/m-interface-use-case';
import mUtil from 'mixins/m-util';
import * as cInterfaceUseCase from 'store/constants/interface-use-case';
import CApiUseCaseListTable from './CApiUseCaseListTable';

export default {
  name: 'CApiUseCaseList',
  components: {
    CApiUseCaseListTable
  },
  mixins: [mInterfaceUseCase, mUtil],
  props: {
    listLoading: {
      type: Boolean,
      default: false
    },
    useCaseList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      nameQuery: '',
      listQuery: {
        query: '',
        page: 1,
        pageSize: 10
      },
      total: 0
    };
  },
  methods: {
    fetchData() {
      this.$emit('search', this.listQuery);
    },
    handleQuery() {
      this.listQuery.query = this.nameQuery;
      this.fetchData();
    },
    handlePageChange(val) {
      this.listQuery.page = val;
      this.fetchData();
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    deleteApiUseCase(id) {
      this[cInterfaceUseCase.DELETE_INTERFACE_USE_CASE]({ id })
      .then(() => {
        this.$message({
          showClose: true,
          message: '用例删除成功。',
          type: 'success'
        });
        this.fetchData();
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    handleDelete(data) {
      const message = '确定要删除该用例，是否继续？';
      const title = '删除操作';
      const projectId = data.id;
      this.$confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger'
      }).then(() => {
        this.deleteApiUseCase(projectId);
      })
      .catch(() => '');
    },
    handleSelect(selectProject) {
      this.$emit('selectUseCase', selectProject.id);
    },
    handleEdit(selectProject) {
      this.$emit('selectUseCase', selectProject.id);
    },
    handleView(selectProject) {
      this.$emit('selectUseCase', selectProject.id);
    },
    handleCreate(selectProject) {
      this.$emit('selectUseCase', selectProject.id);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .action {
    float: right;
  }

  .table-container {
    /* 50 = nav 61 = header 62= filter  47 = pagination */
    // min-height: calc(100vh - 50px - 61px - 62px - 47px);
    height: 100%;

    .link-type {
      color: #337ab7;
      cursor: pointer;

      :focus,
      :hover {
        color: #20a0ff;
      }
    }
  }

  .pagination-container {
    margin-top: 15px;
    float: right;
  }
</style>
