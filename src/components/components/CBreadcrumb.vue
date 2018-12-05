<!--
  -- --------------------------------------------------------
  -- @file CBreadcrumb.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-09-28 15:30:03
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-10-08 16:03:00
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        :key="'/'">
        <router-link
          :to="'/'">{{ $store.getters.selectedProject.name }}</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item,index) in levelList"
        v-if="item.meta.title"
        :key="item.path">
        <span
          v-if="item.redirect==='noredirect'||index==levelList.length-1"
          class="no-redirect">{{ item.meta.title }}</span>
        <router-link
          v-else
          :to="item.redirect||item.path">{{ item.meta.title }}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'CBreadcrumb',
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      const matched = this.$route.matched.filter(item => item.name);
      const first = matched[0];
      console.log(first.name);
      // if (first && first.name !== '项目信息') {
      // const projectName = this.$store.getters.selectedProject.name;
      // matched = [{ path: '/', meta: { title: projectName } }]
      // .concat(matched);
      // }
      this.levelList = matched;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;

    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
