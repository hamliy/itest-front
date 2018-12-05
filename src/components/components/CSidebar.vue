<!--
  -- --------------------------------------------------------
  -- @file CSidebar.vue
  -- @author  hanli
  -- @date 2018-09-17 10:39:38
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-10-08 10:52:05
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <c-sidebar-item
        v-for="route in routes"
        :key="route.name"
        :item="route"
        :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import CSidebarItem from './CSidebarItem';

export default {
  name: 'CSidebar',
  components: { CSidebarItem },
  computed: {
    routes() {
      const sidebar = require('routes/sidebar.js');
      return sidebar.default;
    },
    isCollapse() {
      return !this.$store.getters.sidebarOpened;
    }
  }
};
</script>

<style lang="scss" scoped>
  .el-scrollbar {
    height: 100%;
    background-color: #fff;
  }
</style>
