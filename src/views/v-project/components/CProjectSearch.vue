<!--
  -- --------------------------------------------------------
  -- @file CProjectSearch.vue
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-25 16:38:10
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-09-25 16:38:40
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-form
    :inline="true"
    class="demo-form-inline">
    <el-form-item>
      <el-input
        v-model="nameQuery"
        placeholder="项目名"
        @keyup.enter.native="handleFilter"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleQuery">查询</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
  export default {
    name: 'CProjectSearch',
    data() {
      return {
        nameQuery: ''
      };
    },
    methods: {
      handleQuery() {
        this.$emit('query', this.nameQuery);
      }
    }
  };
</script>
