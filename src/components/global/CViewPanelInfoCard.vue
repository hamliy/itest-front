<!--
  -- --------------------------------------------------------
  -- @file CViewPanelInfoCard.vue
  -- @description : 内部视图模板，通用格式
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-10-26 10:51:31
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-26 14:10:57
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="panel-info-card">
    <div class="panel-info-card-header">
      <div>{{ title }}</div>
    </div>
    <div class="panel-info-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CViewPanelInfoCard',
    props: {
      title: {
        type: String,
        default: ''
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
