<!--
  -- --------------------------------------------------------
  -- @file CInfoPanel.vue
  -- @description :
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-10-10 16:04:23
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-26 10:16:11
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="info-panel">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CInfoPanel'
  };
</script>

<style lang="scss">
  .info-panel {
    flex: 1;
    height: 100%;
    min-height: calc(100vh - 72px);
    margin-left: 15px;
    overflow: hidden;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    transition: 0.3s;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  }
</style>

