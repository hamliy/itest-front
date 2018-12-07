<!--
  -- --------------------------------------------------------
  -- @file CResultBox.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 19:58:09
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 16:27:27
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="result-box">
    <c-json-editor
      id="json-editor"
      :resize-act="fullscreen"
      v-model="jsonData"
      name="返回数据"
      readonly/>
  </div>
</template>

<script>
export default {
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    },
    resActive: {
      type: String,
      required: true
    }
  },
  computed: {
    jsonData() {
      return this.getResponseData();
    },
    response() {
      return this.$store.getters.api.options.response;
    }
  },
  methods: {
    getResponseData() {
      if (this.resActive === 'body') {
        return this.response.data;
      } else if (this.resActive === 'header') {
        return Object.assign({
          status: this.response.status,
          statusText: this.response.statusText
        }, this.response.headers);
      }
      return this.response;
    }
  }
};
</script>
<style>
  .result-box {
    height: 300px;
  }
</style>
