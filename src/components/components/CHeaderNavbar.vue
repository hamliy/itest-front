<!--
  -- --------------------------------------------------------
  -- @file CHeaderNavbar.vue
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-17 10:40:27
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-08 16:15:46
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="header">
    <el-row>
      <el-col
        v-if="showHamburger"
        :span="12">
        <c-header-navbar-hamburger
          :toggle-click="toggleSideBar"
          :is-active="$store.getters.sidebarOpened"
          class="hamburger-container"/>
        <c-breadcrumb/>
      </el-col>
      <el-col
        :offset="showHamburger?0:12"
        :span="12">
        <c-header-navbar-project
          :selected-project="$store.getters.selectedProject"
          :projects="$store.getters.projects"
          class="items-container"
          @select-project="handleSelect"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import mProject from 'mixins/m-project';
  import * as behavior from 'store/constants/toggle';
  import * as pbehavior from 'store/constants/project';
  import CHeaderNavbarHamburger from '../components/CHeaderNavbarHamburger';
  import CHeaderNavbarProject from '../components/CHeaderNavbarProject';
  import CBreadcrumb from '../components/CBreadcrumb';

  export default {
    name: 'CHeaderNavbar',
    components: { CHeaderNavbarHamburger, CHeaderNavbarProject, CBreadcrumb },
    mixins: [mProject],
    props: {
      showHamburger: {
        type: Boolean,
        default: true
      }
    },
    created() {
      this.getProjects();
    },
    methods: {
      getProjects() {
        this[pbehavior.GET_PROJECTS]().then()
        .catch(this.$_mUtil_toastError);
      },

      toggleSideBar() {
        this.$store.dispatch(behavior.TOGGLE_SIDEBAR);
      },
      handleSelect(project) {
        this.$store.commit(pbehavior.SET_SELECT_PROJECT, project);
        if (this.$route.path.indexOf('/projects') === 0) {
          this.$router.push({ path: '/' });
        }
        this.$router.push({
          // 获取当前连接，重新跳转
          path: this.$route.fullPath
        });
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    position: absolute;
    width: 100%;
    height: 50px;
    line-height: 50px;
    top: 0;

    .hamburger-container {
      float: left;
      padding: 0 10px;
      position: relative;
    }

    .items-container {
      position: relative;
      float: right;
      // left: 135px;
      padding: 0 30px;
      cursor: pointer;
    }
  }
</style>
