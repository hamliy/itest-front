<!--
  -- --------------------------------------------------------
  -- @file Index.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 20:41:35
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-20 15:16:30
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-container class="out-box">
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
import mInterface from 'mixins/m-interface';
import * as iBehavior from 'store/constants/interface';
import R from 'utils/ramda-r';
import CResponseStatus from './CResponseStatus';
import CResponseStatusSetting from './CResponseStatusSetting';

export default {
  name: 'CResponse',
  components: {
    CResponseStatus,
    CResponseStatusSetting

  },
  mixins: [mInterface],
  props: {
    response: {
      type: Array,
      required: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    changeSchema(index) {
      this.activeIndex = index;
    },
    deleteResponse(index) {
      this.$store.commit(iBehavior.DELETE_API_RESPONSE, index);
      if (this.activeIndex !== 0) {
        this.activeIndex -= 1;
      }
    },
    addResponse() {
      this.$store.commit(iBehavior.ADD_API_RESPONSE);
      this.activeIndex = this.response.length - 1;
    },
    updateStatus({ status, statusText }) {
      const schema = R.clone(this.response[this.activeIndex]);
      schema.status = status;
      schema.statusText = statusText;
      this.updateResponse(schema);
    },
    updateResponse(schema) {
      const key = `options.response.${this.activeIndex}`;
      this.$store.commit(iBehavior.UPDATE_API_PROPS,
        [key, R.clone(schema)]);
    }
  }
};
</script>
<style lang="scss">
  .out-box {
    height: 300px;

    .el-col {
      position: relative;
    }

    .el-col.status {
      position: relative;
      min-width: 150px;
      max-width: 150px;
      height: 100%;
      overflow-y: auto;
    }
  }

  .fullscreen {
    .out-box {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .schema-content {
      height: auto;
    }
  }
</style>
