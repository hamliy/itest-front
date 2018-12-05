<!--
  -- --------------------------------------------------------
  -- @file LMain.vue
  -- @description : 上中布局
  -- @author  hanli
  -- @date 2018-10-08 10:25:53
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-10-08 16:22:57
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<!-- 上中下布局 -->
<template>
  <div class="layout">
    <c-header-navbar/>
    <l-content>
      <c-sidebar slot="left"/>
      <router-view v-if="isRouterAlive" slot="content"/>
    </l-content>
  </div>
</template>

<script>
import CSidebar from '../components/CSidebar';
import CHeaderNavbar from '../components/CHeaderNavbar';
import LContent from '../components/LContent';

export default {
  name: 'LMain',
  components: { CSidebar, CHeaderNavbar, LContent },
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

<style lang="scss">
  .layout {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #f5f7f9;
  }
</style>
