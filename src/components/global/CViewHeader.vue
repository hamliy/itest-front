<!--
  -- --------------------------------------------------------
  -- @file CViewHeader.vue
  -- @description 视图标题
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-17 10:39:38
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-09 20:31:29
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="view-header">
    <div class="view-header-inner">
      <div class="view-header-main">
        <h2>{{ title }}</h2>
      </div>
      <div class="view-header-action">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CViewHeader',
    props: {
      title: {
        type: String,
        default: ''
      }
    }

  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .view-header {
    padding: 20px;

    .view-header-inner {
      border-spacing: 0;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      display: table;
      table-layout: auto;
      width: 100%;

      .view-header-main {
        vertical-align: middle;
        font-size: 16px;
      }

      .view-header-main,
      .view-header-actions {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: table-cell;
        margin: 0;
        padding: 0;
        text-align: left;
        vertical-align: top;
      }

      .view-header-actions {
        padding-left: 20px;
        text-align: right;
        vertical-align: middle;
      }
    }
  }
</style>
