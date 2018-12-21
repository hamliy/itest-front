<!--
  -- --------------------------------------------------------
  -- @file CResponseConfig.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 20:44:36
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-17 19:55:37
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="config-box">
    <el-form label-position="right" label-width="82px">
      <el-form-item label="返回结果：" class="delay">
        <el-select v-model="responseIndex" placeholder="请选择">
          <el-option
            v-for="(r, key) in response"
            :key="key"
            :label="r.statusText"
            :value="key"/>
          <el-option
            :key="-1"
            :value="-1"
            label="随机"/>
        </el-select>
      </el-form-item>
      <el-form-item label="模拟延迟：" class="delay">
        <el-input v-model="delay" @change="updateDelay"/>
        <em class="unit">ms</em>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CResponseConfig',
  computed: {
    response() {
      return this.$store.getters.api.options.response;
    },
    delay() {
      return this.$store.getters.api.options.delay;
    },
    responseIndex: {
      get() {
        return this.$store.getters.api.options.responseIndex;
      },
      set(value) {
        this.$store.commit('UPDATE_API_PROPS',
          ['options.responseIndex', value]);
      }
    }
  },
  methods: {
    updateDelay(value) {
      this.$store.commit('UPDATE_API_PROPS', ['options.delay',
        window.parseInt(value).toString() === 'NaN' ? value : 0]);
    }
  }
};
</script>
<style lang="scss" scoped>
  .config-box {
    display: inline-block;
    margin-left: 36px;

    .el-input {
      display: inline-block;
      width: 70px;
    }

    .el-select .el-input {
      width: 100px;
    }

    .el-input .el-input__inner {
      border: none;
      border-radius: 0;
      border-bottom: 1px solid #bfcbd9;
      height: 20px;
    }

    .unit {
      color: #bfcbd9;
    }

    .delay.el-form-item {
      margin: 0 20px 0 0;
      display: inline-block;
    }
  }
</style>
