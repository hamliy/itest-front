<!--
  -- --------------------------------------------------------
  -- @file LMain.vue
  -- @description : 上中布局
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-10-08 10:25:53
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-08 16:19:01
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<!-- 上中下布局 -->
<template>
  <div class="layout">
    <c-header-navbar
      :show-hamburger="false"/>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import CHeaderNavbar from '../components/CHeaderNavbar';
import LContent from '../components/LContent';

export default {
  name: 'LMainNoSide',
  components: { CHeaderNavbar, LContent }
};
</script>

<style lang="scss" scope>
  .layout {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #f5f7f9;

    .main-content {
      position: absolute;
      width: 100%;
      background-color: #fafafa;
      top: 50px;
      height: auto;
      padding: 10px 20px;
    }
  }
</style>
