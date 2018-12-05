<!--
  -- --------------------------------------------------------
  -- @file CTableExpand.vue
  -- @description : 可新增删除编辑表格
  -- @author  hanli
  -- @date 2018-10-29 14:58:48
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-10-30 14:30:35
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-table
    ref="editTable"
    :data="dataSet"
    border
    fit
    highlight-current-row>
    <el-table-column
      v-for="(column, index) in columns "
      :label="column.label"
      :width="column.width"
      :key="index">
      <template slot-scope="scope">
        <c-column-expand
          v-if="column.edit"
          :field="column.field"
          :prop="column.prop"
          :options="column.options"
          :column="scope.row"/>
        <span v-else>
          {{ scope.row[column.prop] }}
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      align="center"
      width="100">
      <template slot-scope="scope">
        <a @click="() => onRemoveRow(scope)">
          <svg-icon
            color="#EB4F38"
            style="cursor: pointer;"
            title="删除"
            icon-class="delete"/>
        </a>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import CColumnExpand from '../components/CColumnExpand';

  export default {
    name: 'CTableExpand',
    components: {
      CColumnExpand
    },
    props: {
      dataSet: {
        type: Array,
        default: null
      },
      columns: {
        type: Array,
        default: null
      }
    },
    methods: {
      onRemoveRow(scope) {
        console.log(scope);
        // const index = this.dataSet.findIndex(d => d._id === row._id);
        this.dataSet.splice(scope.$index, 1);
        console.log(this.dataSet);
        // this.dataSet.remove(row);
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .panel-info-card {
    .panel-info-card-header {
      // padding: 20px;
      margin: 0 auto;
      background: rgba(66, 185, 131, 0.1);
      color: #42b983;
      font-weight: 600;
      font-size: 18px;
      border-radius: 2px;
      border-left: 3px #409eff solid;
      line-height: 1.2rem;
      padding: 0.8rem;
      font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
    }

    .panel-info-card-content {
      padding: 1.5rem 1rem;
    }
  }
</style>
