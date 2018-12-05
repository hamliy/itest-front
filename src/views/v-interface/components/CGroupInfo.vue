<!--
  -- --------------------------------------------------------
  -- @file CGroupInfo.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-10-09 17:52:59
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-10-11 20:19:18
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-row>
    <el-col>
      <div>
        <p class="header-content">
          基本信息
        </p>
      </div>
    </el-col>
    <el-col>
      <div class="content-info">
        <el-form
          :label-position="'left'"
          :model="info"
          label-width="80px">
          <el-form-item label="名称">
            <el-input
              v-if="isEdit"
              v-model="info.name"/>
            <div v-else>{{ info.name }}</div>
          </el-form-item>
          <el-form-item label="描述">
            <el-input
              v-if="isEdit"
              v-model="info.desc"
              type="textarea"/>
            <div v-else>{{ info.desc }}</div>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'CGroupInfo',
  props: {
    info: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isEdit: false
    };
  }
};

</script>

<style lang="scss">
  .header-content {
    margin: 0 auto;
    background: rgba(66, 185, 131, 0.1);
    color: #42b983;
    font-weight: 600;
    font-size: 20px;
    border-radius: 2px;
    border-left: 3px #409eff solid;
    line-height: 1.6rem;
    padding: 1rem;
    font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
  }

  .content-info {
    padding: 2rem 1rem;
  }
</style>

