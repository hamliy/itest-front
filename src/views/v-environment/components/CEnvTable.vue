<!--
  -- --------------------------------------------------------
  -- @file CEnvTable.vue
  -- @description :
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-28 17:40:05
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-09-29 18:34:00
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-table
    v-loading="listLoading"
    ref="envTable"
    :data="dataSet"
    element-loading-text="Loading"
    border
    fit
    highlight-current-row>
    <el-table-column
      label="名称"
      min-width="180">
      <template slot-scope="scope">
        <template v-if="scope.row.edit">
          <el-input
            v-model="scope.row.name"
            class="edit-input"
            size="small"/>
        </template>
        <span v-else>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="协议"
      align="center"
      width="100">
      <template slot-scope="scope">
        <template v-if="scope.row.edit">
          <el-select
            v-model="scope.row.protocol"
            placeholder="请选择">
            <el-option label="http" value="http"/>
            <el-option label="https" value="https"/>
          </el-select>
        </template>
        <span v-else>{{ scope.row.protocol }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="ip"
      align="center"
      width="250">
      <template slot-scope="scope">
        <template v-if="scope.row.edit">
          <el-input
            v-model="scope.row.ip"
            class="edit-input"
            size="small"/>
        </template>
        <span v-else>{{ scope.row.ip }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="端口号"
      align="center"
      width="100">
      <template slot-scope="scope">
        <template v-if="scope.row.edit">
          <el-input
            v-model="scope.row.port"
            class="edit-input"
            size="small"/>
        </template>
        <span v-else>{{ scope.row.port }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="描述"
      align="center"
      width="200">
      <template slot-scope="scope">
        <template v-if="scope.row.edit">
          <el-input
            v-model="scope.row.desc"
            class="edit-input"
            type="textarea"
            size="small"/>
        </template>
        <span v-else>{{ scope.row.desc }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      align="center"
      width="200">
      <template slot-scope="scope">
        <el-button
          v-if="scope.row.edit"
          type="success"
          size="small"
          icon="el-icon-circle-check-outline"
          @click="confirmEdit(scope.row)">确认</el-button>
        <el-button
          v-if="scope.row.edit"
          class="cancel-btn"
          size="small"
          icon="el-icon-refresh"
          type="warning"
          @click="cancelEdit(scope.row)">取消</el-button>
        <el-button
          v-if="!scope.row.edit"
          type="primary"
          size="small"
          icon="el-icon-edit"
          @click="scope.row.edit=!scope.row.edit">编辑</el-button>
        <el-button
          v-if="!scope.row.edit"
          type="danger"
          size="small"
          icon="el-icon-delete"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
  import * as environment from 'store/constants/environment';
  import mEnvironment from 'mixins/m-environment';
  import mUtil from 'mixins/m-util';

  export default {
    name: 'CEnvTable',
    date() {
      return {
        listLoading: false
      };
    },
    mixins: [mUtil, mEnvironment],
    props: {
      listLoading: {
        type: Boolean,
        default: false
      },
      dataSet: {
        type: Array,
        required: true
      }
    },
    methods: {
      originalRow(row) {
        row.name = row.original.name;
        row.protocol = row.original.protocol;
        row.ip = row.original.ip;
        row.port = row.original.port;
        row.desc = row.original.desc;
      },
      rowOriginal(row) {
        row.original.name = row.name;
        row.original.protocol = row.protocol;
        row.original.ip = row.ip;
        row.original.port = row.port;
        row.original.desc = row.desc;
      },
      getDate(row) {
        return {
          name: row.name,
          protocol: row.protocol,
          ip: row.ip,
          port: row.port,
          desc: row.desc,
          id: row.id
        };
      },
      cancelEdit(row) {
        this.originalRow(row);
        row.edit = false;
        this.$message({
          message: '操作已取消',
          type: 'warning'
        });
      },
      confirmEdit(row) {
        this[environment.UPDATE_ENVIRONMENT](this.getDate(row))
        .then(() => {
          row.edit = false;
          this.rowOriginal(row);
          this.$message({
            showClose: true,
            message: '编辑成功。',
            type: 'success'
          });
        })
        .catch(err => {
          row.edit = true;
          this.$_mUtil_messageError(err);
        });
      },
      handleDelete(row) {
        this.$emit('delete', row);
      }
    }
  };
</script>
