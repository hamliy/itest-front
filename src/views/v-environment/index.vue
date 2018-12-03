<!--
  -- --------------------------------------------------------
  -- @file index.vue
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-25 16:38:10
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-12-03 10:48:20
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <c-view-header title="环境">
          <div style="float:right;">
            <el-button
              type="primary"
              round
              @click="handleCreate('env')">创建新环境</el-button>
          </div>
        </c-view-header>
        <c-env-table
          :list-loading="listLoading"
          :data-set="envSet"
          @delete="handleDelete"/>
      </el-col>
    </el-row>
    <c-env-dialog-operate
      :visible.sync="dialogVisible"
      :form-data="formData"
      @confirm="operaEnv"/>
  </div>
</template>

<script>
import * as environment from 'store/constants/environment';
import mEnvironment from 'mixins/m-environment';
import mUtil from 'mixins/m-util';
import CEnvTable from './components/CEnvTable';
import CEnvDialogOperate from './components/CEnvDialogOperate';

export default {
  name: 'VEnvironment',
  components: {
    CEnvTable,
    CEnvDialogOperate
  },
  mixins: [mEnvironment, mUtil],
  data() {
    return {
      envSet: [],
      variableSet: [],
      listLoading: false,
      listQuery: {
        query: '',
        page: 1,
        pageSize: 10
      },
      total: 0,
      dialogVisible: false,
      type: '',
      formData: {
        name: '',
        port: 80,
        protocol: 'http',
        ip: '',
        desc: ''
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      this[environment.SEARCH_ENVIRONMENT](this.listQuery)
      .then(response => {
        const items = response.data.data;
        if (items) {
          this.envSet = items.map(v => {
            this.$set(v, 'edit', false);
            v.original = {
              name: v.name,
              protocol: v.protocol,
              ip: v.ip,
              port: v.port,
              desc: v.desc
            };
            return v;
          });
        } else {
          this.envSet = [];
        }
        this.listLoading = false;
      })
      .catch(err => {
        this.listLoading = false;
        this.$_mUtil_messageError(err);
      });
      this.listLoading = false;
    },
    initFrom() {
      this.formData = {
        name: '',
        port: 80,
        protocol: 'http',
        ip: '',
        desc: ''
      };
    },
    handleCreate() {
      this.initFrom();
      this.dialogVisible = true;
    },
    operaEnv(formData) {
      this[environment.CREATE_ENVIRONMENT](formData)
      .then(() => {
        this.dialogVisible = false;
        this.$message({
          showClose: true,
          message: '新增环境成功。',
          type: 'success'
        });
        this.fetchData();
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    deleteEnv(id) {
      this[environment.DELETE_ENVIRONMENT]({ id })
      .then(() => {
        this.$message({
          showClose: true,
          message: '环境删除成功。',
          type: 'success'
        });
        this.fetchData();
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    handleDelete(data) {
      const message = '确定要删除该环境，是否继续？';
      const title = '删除操作';
      this.$confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger'
      }).then(() => {
        this.deleteEnv(data.id);
      })
      .catch(() => '');
    }
  }
};
</script>


<style lang="scss" scope>
  .el-row {
    margin-right: 0;
    margin-left: 0;
  }
</style>
