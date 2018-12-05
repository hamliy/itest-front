<!--
  -- --------------------------------------------------------
  -- @file CStatusSetting.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 20:44:51
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-12-04 21:05:05
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-form
    label-position="right"
    label-width="105px"
    class="status-form">
    <el-form-item label="Status Code" class="status-code">
      <el-input v-model="status"/>
    </el-form-item>
    <el-form-item label="Status Text" class="status-text">
      <el-input v-model="statusText"/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'CResponseStatusSetting',
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  computed: {
    status: {
      get() {
        return this.schema.status;
      },
      set(val) {
        this.$emit('change', {
          status: val,
          statusText: this.statusText
        });
      }
    },
    statusText: {
      get() {
        return this.schema.statusText;
      },
      set(val) {
        this.$emit('change', {
          status: this.status,
          statusText: val
        });
      }
    }
  }
};
</script>
<style>
  .status-form {
    padding-top: 20px;
  }

  .status-form .el-form-item {
    width: 240px;
    display: inline-block;
  }
</style>
