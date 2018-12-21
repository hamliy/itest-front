<!--
  -- --------------------------------------------------------
  -- @file CApiUseCaseListTable.vue
  -- @description :
  -- @author hanli <lihan_li@test.com>
  -- @date 2018-12-21 15:37:15
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-21 17:06:26
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-table
    v-loading="listLoading"
    ref="listTable"
    :data="list"
    element-loading-text="Loading"
    border
    fit
    highlight-current-row>
    <el-table-column
      align="center"
      label="ID"
      width="95">
      <template slot-scope="scope">
        {{ scope.$index +1 }}
      </template>
    </el-table-column>
    <el-table-column
      label="用例名"
      min-width="200">
      <template slot-scope="scope">
        <span
          class="link-type"
          @click="handleSelect(scope.row)">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="用例级别"
      align="center"
      width="80">
      <template slot-scope="scope">
        <span>{{ scope.row.level }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="用例组"
      align="center"
      width="120">
      <template slot-scope="scope">
        {{ groupNameById[scope.row.groupId] }}
      </template>
    </el-table-column>
    <el-table-column
      label="测试接口"
      align="center"
      width="120">
      <template slot-scope="scope">
        <span class="method">
          {{ scope.row.options.method }}</span>
        <label>{{ scope.row.options.path }}</label>
      </template>
    </el-table-column>
    <el-table-column
      label="创建时间"
      align="center"
      width="200">
      <template slot-scope="scope">
        {{ scope.row.createTime
        | parseTime('{y}-{m}-{d} {h}:{i}') }}
      </template>
    </el-table-column>
    <el-table-column
      label="更新时间"
      align="center"
      width="200">
      <template slot-scope="scope">
        {{ scope.row.modifiedTime | updateTime()
        | formatTime('{y}-{m}-{d} {h}:{i}') }}
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      align="center"
      width="300">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="success"
          @click="handleView(scope.row)">查看</el-button>
        <el-button
          size="mini"
          type="warning"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
  import { parseTime, formatTime } from 'utils/time-helper';

  export default {
    name: 'CApiUseCaseListTable',
    filters: {
      parseTime,
      formatTime,
      updateTime(info) {
        if (info) {
          return info;
        }
        return '';
      },
      showGroupName(groupId) {
        return this.groupNameById[groupId];
      }
    },
    date() {
      return {
        listLoading: false
      };
    },
    props: {
      listLoading: {
        type: Boolean,
        default: false
      },
      list: {
        type: Array,
        required: true
      }
    },
    computed: {
      groupNameById() {
        const obj = {};
        this.apiUseCaseGroup.forEach(group => {
          obj[group.id] = group.name;
        });
        return obj;
      },
      apiUseCaseGroup() {
        return this.$store.getters.apiUseCaseGroup;
      }
    },
    methods: {
      handleView(row) {
        this.$emit('view', row);
      },

      handleEdit(row) {
        this.$emit('edit', row);
      },

      handleDelete(row) {
        this.$emit('delete', row);
      },

      handleSelect(row) {
        this.$emit('select', row);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .method {
    &.put,
    &.PUT,
    &.PATCH,
    &.patch,
    &.post,
    &.POST {
      color: #f5a623;
    }

    &.get,
    &.GET {
      color: #3eb63e;
    }
  }
</style>

