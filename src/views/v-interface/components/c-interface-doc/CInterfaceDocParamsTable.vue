<!--
  -- --------------------------------------------------------
  -- @file CInterfaceDocParamsTable.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 11:20:21
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 20:22:41
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="params-table">
    <div class="hd">
      <el-row type="flex">
        <el-col class="key">参数名</el-col>
        <div class="row-and-col">
          <el-col class="type">类型</el-col>
          <el-col class="required">是否必填</el-col>
          <el-col class="comment">备注</el-col>
          <el-col class="example">示例</el-col>
        </div>
      </el-row>
    </div>
    <div class="bd2">
      <c-interface-doc-params
        :params="params"
        :level="0"/>
    </div>
  </div>
</template>

<script>
import CInterfaceDocParams from './CInterfaceDocParams';

export default {
  components: {
    CInterfaceDocParams
  },
  props: {
    params: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss">
  .params-table {
    width: 100%;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    // overflow: hidden;

    .hd {
      background-color: #f8f8f8;
    }

    .el-row {
      border-top: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
      margin: -1px 0;

      .row-and-col {
        display: flex;
        width: 100%;
        flex: 8;
      }
    }

    .el-row:hover {
      background-color: #f8f8f8;
    }
  }

  .params-table .el-col {
    word-break: break-all;
    border-right: 1px solid #e6e6e6;
    padding: 8px 15px;
    min-width: 87px;

    &.el-col-24 {
      width: auto;
    }

    &:last-child {
      border: none;
    }

    &.key {
      flex: 2;
    }

    &.comment {
      min-width: 220px;
      max-width: 220px;
    }

    &.example {
      width: 100%;
    }

    &.type {
      min-width: 130px;
      max-width: 130px;
      text-align: center;
    }

    &.required {
      min-width: 100px;
      max-width: 100px;
      text-align: center;
    }
  }
</style>
