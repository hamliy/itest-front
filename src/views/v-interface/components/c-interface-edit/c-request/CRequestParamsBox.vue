<!--
  -- --------------------------------------------------------
  -- @file CRequestParamsBox.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 21:17:55
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-19 10:23:19
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div>
    <c-params
      :params="params"
      :name="name"
      @updateParams="changeParams"/>
    <c-params
      :params="reqParams"
      :name="name"
      mode="fill"
      @updateParams="changeReqParams"/>
  </div>
</template>

<script>

import R from 'utils/ramda-r';

export default {
  name: 'CRequestParamsBox',
  props: {
    params: {
      type: Object,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  },
  computed: {
    reqParams: {
      get() {
        return R.clone(this.params);
      }
    }
  },
  methods: {
    changeParams(data) {
      const key = `options.params.${this.name}`;
      this.$store.commit('UPDATE_API_PROPS', [key, R.clone(data)]);
    },
    changeReqParams(data, value) {
      this.$store.commit('UPDATE_REQ_PARAMS', {
        type: this.name,
        params: R.clone(data),
        value
      });
      this.reqParams = R.clone(data);
    },
    getReqParams(param) {
      this.buildReqParams(param);
      return param;
    },
    buildReqParams(param) {
      if (param.type === 'object' && param.params) {
        param.params.map(p => this.buildReqParams(p));
      }
      param.value = '';
    }
  }
};
</script>
