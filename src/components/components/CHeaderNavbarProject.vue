<!--
  -- --------------------------------------------------------
  -- @file CHeaderNavbarProject.vue
  -- @author  hanli
  -- @date 2018-09-18 16:52:47
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-11-29 16:32:48
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<!--
detail： 选择项目
 -->

<template>
  <div>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        项目: {{ selectedProject.name }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="project in projects"
          :key="project._id"
          @click.native="handleChangeProject(project)">
          {{ project.name }}</el-dropdown-item>
        <el-dropdown-item
          divided
          @click.native="handleViewProjects">查看所有项目</el-dropdown-item>
        <el-dropdown-item
          divided
          @click.native="handleLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  name: 'CHeaderNavbarProject',
  props: {
    projects: {
      type: Array,
      default: null
    },
    selectedProject: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleChangeProject(item) {
      this.$emit('select-project', item);
      this.reload();
    },

    handleViewProjects() {
      this.$router.push({ path: '/projects' });
    },
    handleLogout() {
      this.$emit('logout');
    }

  }
};
</script>

