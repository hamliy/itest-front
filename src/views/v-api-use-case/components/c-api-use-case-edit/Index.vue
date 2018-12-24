<!--
  -- --------------------------------------------------------
  -- @file CApiUseCaseEidt.vue
  -- @description :
  -- @author hanli <lihan_li@test.com>
  -- @date 2018-12-17 17:02:24
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-24 16:44:30
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="api-box el-col">
    <c-api-use-case-info-box/>
    <c-setting-field title="请求数据" class="request-field">
      <el-tabs
        slot="header"
        v-model="reqActive"
        class="result-tabs">
        <el-tab-pane label="Headers" name="headers"/>
        <el-tab-pane label="Body" name="body"/>
      </el-tabs>
      <template slot-scope="props">
        <c-request-data-box
          :method="method"
          :fullscreen="props.fullscreen"
          :req-active="reqActive"/>
      </template>
    </c-setting-field>
    <!-- <c-setting-field title="预期结果">
      <template slot-scope="props">
        <c-expect-data-box :expect="response" :fullscreen="props.fullscreen"/>
      </template>
    </c-setting-field>
    <c-setting-field title="执行结果">
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
  </div>
</template>

<script>
import CApiUseCaseInfoBox from './CApiUseCaseInfoBox';
// import CExpectDataBox from './CExpectDataBox';
import CRequestDataBox from './CRequestDataBox';
// import CResultBox from './CResultBox';

export default {
  name: 'CApiUseCaseEdit',
  components: {
    CApiUseCaseInfoBox,
    // CExpectDataBox,
    CRequestDataBox
    // CResultBox
  },
  data() {
    return {
      resActive: 'body',
      reqActive: 'body'
    };
  },
  computed: {
    method() {
      return this.$store.getters.apiUseCase.options.method;
    }
  }
};
</script>
<style lang="scss">
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
