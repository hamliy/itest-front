<!--
  -- --------------------------------------------------------
  -- @file index.vue
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-25 16:38:10
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-11-30 17:19:25
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div>
    <c-view-header title="浏览项目">
      <div class="action">
        <el-button
          type="primary"
          round
          @click="handleCreate">创建新项目</el-button>
      </div>
    </c-view-header>
    <c-project-search
      @query="query"/>
    <c-project-table
      :list-loading="listLoading"
      :projects="projects"
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
    <c-project-dialog-operate
      :visible.sync="dialogVisible"
      :title="textMap[dialogStatus]"
      :form-data="formData"
      @confirm="operaProject"/></div>
</template>

<script>

import * as project from 'store/constants/project';
import mProject from 'mixins/m-project';
import mUtil from 'mixins/m-util';
import CProjectTable from './components/CProjectTable';
import CProjectSearch from './components/CProjectSearch';
import CProjectDialogOperate from './components/CProjectDialogOperate';

export default {
  name: 'VProject',
  components: {
    CProjectTable,
    CProjectSearch,
    CProjectDialogOperate
  },
  mixins: [mProject, mUtil],
  data() {
    return {
      projects: [],
      listLoading: false,
      listQuery: {
        query: '',
        page: 1,
        pageSize: 10
      },
      total: 0,
      dialogVisible: false,
      dialogStatus: '',
      formData: {
        projectId: undefined,
        name: '',
        projectType: 'web',
        version: '',
        description: ''
      },
      textMap: {
        view: '查看项目',
        edit: '编辑项目',
        create: '新建项目'
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      this[project.SEARCH_PROJECT](this.listQuery)
      .then(response => {
        this.projects = response.data.data;
        this.total = response.data.total;
        this.listLoading = false;
      })
      .catch(err => {
        this.listLoading = false;
        this.$_mUtil_messageError(err);
      });
    },
    query(nameQuery) {
      this.listQuery.query = nameQuery;
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
    resetFrom() {
      this.formData = {
        id: undefined,
        name: '',
        projectType: 'web',
        version: '',
        description: ''
      };
    },
    initFrom(row) {
      this.formData = {
        id: row._id,
        name: row.name,
        projectType: row.type,
        version: row.version,
        description: row.description
      };
    },
    handleCreate() {
      this.resetFrom();
      this.dialogStatus = 'create';
      this.dialogVisible = true;
    },
    handleEdit(data) {
      this.initFrom(data);
      this.dialogStatus = 'edit';
      this.dialogVisible = true;
    },
    deleteProject(projectId) {
      this[project.DELETE_PROJECT]({ id: projectId })
      .then(() => {
        this.$message({
          showClose: true,
          message: '项目删除成功。',
          type: 'success'
        });
        this.fetchData();
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    handleDelete(data) {
      const message = '确定要删除该项目，是否继续？';
      const title = '删除操作';
      const projectId = data.id;
      this.$confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger'
      }).then(() => {
        this.deleteProject(projectId);
      })
      .catch(() => '');
    },
    handleView(data) {
      this.initFrom(data);
      this.dialogStatus = 'view';
      this.dialogVisible = true;
    },
    operaProject(formData) {
      if (this.dialogStatus === 'view') {
        this.dialogVisible = false;
      } else {
        this[this.dialogStatus === 'create'
          ? project.CREATE_PROJECT : project.UPDATE_PROJECT](formData)
        .then(() => {
          this.dialogVisible = false;
          this.$message({
            showClose: true,
            message: `${this.textMap[this.dialogStatus]}成功。`,
            type: 'success'
          });
          this.fetchData();
        })
        .catch(err => {
          this.$_mUtil_messageError(err);
        });
      }
    },
    handleSelect(selectProject) {
      console.log(selectProject);
      this.$store.commit('SET_SELECT_PROJECT', selectProject);
      this.$router.push({
          // 获取当前连接，重新跳转
        path: '/project'
      });
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
    min-height: calc(100vh - 50px - 61px - 62px - 47px);

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
