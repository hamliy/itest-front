<!--
  -- --------------------------------------------------------
  -- @file LMain.vue
  -- @description : 上中布局
  -- @author  hanli
  -- @date 2018-10-08 10:25:53
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-11-30 16:04:41
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
  components: { CHeaderNavbar, LContent },
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
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
