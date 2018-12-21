<!--
  -- --------------------------------------------------------
  -- @file Index.vue
  -- @description : 接口编辑页面
  -- @author  hanli
  -- @date 2018-12-04 19:55:11
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-19 10:01:10
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->
<template>
  <div class="api-box el-col">
    <c-base-info-box/>
    <c-setting-field title="Request" class="request-field">
      <template slot-scope="props">
        <c-request-box :fullscreen="props.fullscreen" :method="method"/>
      </template>
    </c-setting-field>
    <!-- <c-setting-field title="Result">
      <el-tabs
        slot="header"
        v-model="resActive"
        class="result-tabs">
        <el-tab-pane label="Body" name="body"/>
        <el-tab-pane label="Headers" name="header"/>
        <el-tab-pane label="All-Data" name="all"/>
      </el-tabs>
      <template slot-scope="props">
        <c-result-box :fullscreen="props.fullscreen" :res-active="resActive"/>
      </template>
    </c-setting-field> -->
    <c-setting-field v-if="response" title="Response">
      <c-response-config slot="header"/>
      <template slot-scope="props">
        <c-response :response="response" :fullscreen="props.fullscreen"/>
      </template>
    </c-setting-field>
    <c-setting-field title="Api Desc">
      <c-desc-box/>
    </c-setting-field>
  </div>
</template>

<script>
import CRequestBox from './c-request/Index';
import CResponse from './c-response/Index';
import CResponseConfig from './c-response/CResponseConfig';
import CResultBox from './CResultBox';
import CBaseInfoBox from './CBaseInfoBox';
import CDescBox from './CDescBox';

export default {
  name: 'CInterfaceEdit',
  components: {
    CRequestBox,
    CResponse,
    CResponseConfig,
    CResultBox,
    CDescBox,
    CBaseInfoBox
  },
  data() {
    return {
      resActive: 'body'
    };
  },
  computed: {
    method() {
      return this.$store.getters.api.method;
    },
    response() {
      return this.$store.getters.api.options.response;
    }
  }
};
</script>
<style>
  .api-box {
    padding: 20px;
    width: 100%;
    min-width: 688px;
  }

  .result-tabs.el-tabs {
    display: inline-block;
    margin: 0 0 -1px 30px;
    vertical-align: top;
  }

  .result-tabs .el-tabs__header {
    margin-bottom: 0;
  }
</style>
