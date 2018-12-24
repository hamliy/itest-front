<!--
  -- --------------------------------------------------------
  -- @file CRequestDataBox.vue
  -- @description : 用例请求数据
  -- @author hanli <lihan_li@test.com>
  -- @date 2018-12-19 14:17:35
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-24 16:40:52
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->


<template>
  <el-container class="request-box">
    <el-header v-show="reqActive !== 'headers'" class="type-header">
      <div>
        <span class="req-type">请求类型：</span>
        <el-radio-group
          v-model="dataType"
          size="small"
          text-color="#409eff">
          <el-radio
            v-for="(r, key) in types"
            v-show="method.toLowerCase() !== 'get' || r.name !== 'body'"
            :key="key"
            :label="r.name"
            @change="changeSchema(r.name)">
            <span>
              {{ r.label }}
              <el-tooltip
                v-if="r.tip"
                :content="r.tip"
                placement="top">
                <span class="mocker-tip">?</span>
              </el-tooltip>
            </span>
          </el-radio>
        </el-radio-group>
      </div>
    </el-header>
    <el-main class="schema-main">
      <c-schema
        :schema="activeSchema"
        :name="activeType"
        :fullscreen="fullscreen"
        @change="updateParams"/>
    </el-main>
  </el-container>
</template>

<script>
import mInterface from 'mixins/m-interface-use-case';
import * as uBehavior from 'store/constants/interface-use-case';
import R from 'utils/ramda-r';

export default {
  name: 'CRequestDataBox',
  mixins: [mInterface],
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    },
    method: {
      type: String,
      default: null
    },
    reqActive: {
      type: String,
      default: 'body'
    }
  },
  data() {
    return {
      activeType: this.initActive(),
      types: [{
        label: 'Body',
        name: 'body',
        tip: 'POST、PUT请求时的参数，支持form、json'
      }, {
        label: 'Query',
        name: 'query',
        tip: 'Get请求时的url参数，以 ? 和 & 拼接到url中'
      }, {
        label: 'Path',
        name: 'path',
        tip: 'RESTful风格的url参数，例如 http://www.dxy.cn/:userId'
      }]
    };
  },
  computed: {
    activeSchema() {
      if (this.reqActive === 'headers') {
        return this.headers;
      }
      return this.localParams[this.activeType];
    },
    headers() {
      return this.$store.getters.apiUseCase.options.headers;
    },
    params() {
      return R.clone(this.$store.getters.apiUseCase.options.data.params);
    },
    examples() {
      return R.clone(this.$store.getters.apiUseCase.options.data.examples);
    },
    dataType: {
      get() {
        return this.$store.getters.apiUseCase.options.type;
      },
      set(value) {
        this.$store.commit(uBehavior.UPDATE_API_USE_CASE_PROPS,
          ['options.type', value]);
      }
    },
    localParams() {
      const localParams = {};
      Object.keys(this.params).forEach(key => {
        localParams[key] = this.getSchemaObject(key);
      });
      return localParams;
    }
  },
  watch: {
    method(val) {
      if (val.toLowerCase() === 'get') {
        this.activeType = 'query';
      } else {
        this.activeType = 'body';
      }
    }
  },
  methods: {
    initActive() {
      if (this.method.toLowerCase() === 'get') {
        return 'query';
      }
      return 'body';
    },
    updateParams(data) {
      if (this.reqActive === 'headers') {
        this.$store.commit(uBehavior.UPDATE_API_USE_CASE_PROPS,
          ['options.headers', data]);
        return;
      }
      const key = `options.data.params.${this.activeType}`;
      this.$store.commit(uBehavior.UPDATE_API_USE_CASE_PROPS,
        [key, data.params]);
      const exampleKey = `options.data.examples.${this.activeType}`;
      this.$store.commit(uBehavior.UPDATE_API_USE_CASE_PROPS,
        [exampleKey, data.example]);
    },
    changeSchema(type) {
      this.activeType = type;
    },
    getSchemaObject(key) {
      return {
        example: this.examples[key],
        params: this.params[key]
      };
    }
  }
};
</script>
<style lang="scss">
  .request-box {
    height: 300px;

    .mocker-tip {
      display: none;
      width: 16px;
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      border-radius: 50%;
      text-align: center;
      cursor: pointer;
      vertical-align: middle;
      background: #97a8be;
      color: #fff;
      float: right;
      background-color: #bfcbd9;
    }

    .req-type {
      float: left;
      padding-right: 40px;
    }

    .type-header {
      height: 40px !important;
      line-height: 40px;

      .el-radio {
        width: 90px;

        &.active {
          background-color: #fafafa;
          color: #333;
        }

        &:hover .mocker-tip {
          display: inline-block;
        }
      }
    }

    .el-col.types {
      position: relative;
      min-width: 150px;
      max-width: 150px;
      height: 100%;
    }

    .schema-main {
      position: relative;
    }
  }
</style>
