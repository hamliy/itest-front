<!--
  -- --------------------------------------------------------
  -- @file VVariable.vue
  -- @desc 环境变量
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-25 16:38:10
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-09 16:29:01
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
          :data-set="envSet"/>
      </el-col>
      <el-col :span="12">
        <c-view-header title="变量">
          <div style="float:right;">
            <el-button
              type="primary"
              round
              @click="handleCreate('variable')">创建新变量</el-button>
          </div>
        </c-view-header>
        <c-env-table
          :list-loading="listLoading"
          :data-set="variableSet"/>
      </el-col>
    </el-row>
    <c-env-dialog-operate
      :visible.sync="dialogVisible"
      :title="textMap[type]"
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
  name: 'VVariable',
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
        query_name: '',
        page: 1,
        page_size: 10
      },
      total: 0,
      dialogVisible: false,
      type: '',
      formData: {
        name: '',
        value: '',
        type: 'env',
        description: ''
      },
      textMap: {
        variable: '新增变量',
        env: '新增环境'
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      this[environment.GET_ENVIRONMENT](this.listQuery)
      .then(response => {
        const items = response.data.data;
        const dataSet = items.map(v => {
          this.$set(v, 'edit', false);
          v.original = {
            name: v.name,
            value: v.value,
            description: v.description
          };
          return v;
        });
        this.envSet = dataSet.filter(v => v.type === 'env');
        this.variableSet = dataSet.filter(v => v.type === 'variable');
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
        value: '',
        type: this.type,
        description: ''
      };
    },
    handleCreate(type) {
      this.type = type;
      this.initFrom();
      this.dialogVisible = true;
    },
    operaEnv(formData) {
      this[environment.CREATE_ENVIRONMENT](formData)
      .then(() => {
        this.dialogVisible = false;
        this.$message({
          showClose: true,
          message: `${this.textMap[this.type]}成功。`,
          type: 'success'
        });
        this.fetchData();
      })
      .catch(err => {
        this.$_mUtil_messageError(err);
      });
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
