<!--
  -- --------------------------------------------------------
  -- @file CDataImagesList.vue
  -- @description : 数据显示
  -- @author  hanli
  -- @date 2018-10-30 17:33:54
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-10-30 21:33:38
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div>
    <el-form :inline="true">
      <el-form-item>
        <el-input
          :placeholder="'图片名'"
          v-model="listQuery.image_name"
          style="width: 150px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"/>
      </el-form-item>
      <el-form-item>
        <el-input
          :placeholder="'用途'"
          v-model="listQuery.usage"
          style="width: 150px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"/>
      </el-form-item>
      <el-form-item>
        <el-select
          v-model="listQuery.image_type"
          :placeholder="'类型'"
          clearable
          class="filter-item"
          style="width: 120px;">
          <el-option
            v-for="item in typeOptions"
            :key="item.key"
            :label="item.label"
            :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select
          v-model="listQuery.tags"
          :placeholder="'标签'"
          clearable
          style="width: 90px;"
          class="filter-item">
          <el-option
            v-for="item in tagsOptions"
            :key="item.key"
            :label="item.label"
            :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          class="filter-item"
          type="primary"
          icon="el-icon-search"
          @click="handleFilter">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      v-loading="listLoading"
      ref="imagesTable"
      :data="list"
      element-loading-text="Loading"
      border
      height="780"
      fit
      highlight-current-row
      @current-change="handleCurrentChange">
      <el-table-column
        align="center"
        label="ID"
        width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="图片名">
        <template slot-scope="scope">
          {{ scope.row.image_name }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="类型"
        width="110"
        align="center">
        <template slot-scope="scope">
          {{ scope.row.image_type }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="标签"
        width="110"
        align="center">
        <template slot-scope="scope">
          {{ scope.row.tags }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="用途"
        width="110"
        align="center">
        <template slot-scope="scope">
          {{ scope.row.usage }}
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        :current-page="listQuery.page"
        :page-sizes="[10,20,30,50]"
        :page-size="listQuery.page_size"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CDataImagesList',
  props: {
    list: {
      type: Array,
      default: null
    },
    listQuery: {
      type: Object,
      default: null
    },
    listLoading: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tagsOptions: [{
        key: 'test',
        label: 'test'
      }],
      typeOptions: [
        {
          key: 0,
          label: 'test'
        }
      ]
    };
  },
  methods: {
    fetchData() {
      this.$emit('fetchData');
    },
    handleFilter() {
      this.fetchData();
    },
    handleCurrentChange(val) {
      if (typeof val !== 'undefined') {
        this.currentRow = val;
        this.handleView(this.currentRow);
      }
    },
    handlePageChange(val) {
      this.listQuery.page = val;
      this.fetchData();
    },
    handleSizeChange(val) {
      this.listQuery.page_size = val;
      this.fetchData();
    },
    handleView(row) {
      this.$emit('showImage', row);
    }
  }

};
</script>
