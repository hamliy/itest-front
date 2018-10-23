<!--
  -- --------------------------------------------------------
  -- @file index.vue
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-25 16:38:10
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-09-28 17:09:06
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-table
    v-loading="listLoading"
    ref="projectsTable"
    :data="projects"
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
      label="项目名"
      min-width="200">
      <template slot-scope="scope">
        <span
          class="link-type"
          @click="handleSelect(scope.row)">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="项目版本"
      align="center"
      width="120">
      <template slot-scope="scope">
        <span>{{ scope.row.version }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="项目类型"
      align="center"
      width="120">
      <template slot-scope="scope">
        {{ scope.row.type }}
      </template>
    </el-table-column>
    <el-table-column
      label="创建时间"
      align="center"
      width="200">
      <template slot-scope="scope">
        {{ scope.row.create_info.time.$date
        | parseTime('{y}-{m}-{d} {h}:{i}') }}
      </template>
    </el-table-column>
    <el-table-column
      label="更新时间"
      align="center"
      width="200">
      <template slot-scope="scope">
        {{ scope.row.update_info | updateTime()
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
    name: 'CProjectTable',
    filters: {
      parseTime,
      formatTime,
      updateTime(info) {
        if (info) {
          return info.time.$date;
        }
        return '';
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
      projects: {
        type: Array,
        required: true
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
