<!--
  -- --------------------------------------------------------
  -- @file Index.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 21:16:20
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 11:11:33
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-row type="flex" class="request-box">
    <el-col class="types">
      <div class="control">Types</div>
      <ul>
        <li
          v-for="(r, key) in types"
          v-show="method !== 'get' || r.name !== 'body'"
          :class="[{active: activeType === r.name}]"
          :key="key"
          class="item"
          @click="changeSchema(r.name)">
          <span>
            {{ r.label }}
            <el-tooltip
              v-if="r.tip"
              :content="r.tip"
              placement="top">
              <span class="mocker-tip">?</span>
            </el-tooltip>
          </span>
        </li>
        <li
          key="headers"
          :class="[{active: activeType === 'headers'}]"
          class="item"
          @click="changeSchema('headers')">
          <span>Header</span>
        </li>
      </ul>
    </el-col>
    <el-col class="schema-content">
      <schema
        :schema="activeSchema"
        :name="activeType"
        :fullscreen="fullscreen"
        @change="updateParams"/>
    </el-col>
  </el-row>
</template>

<script>
import R from 'utils/ramda-r';
import CSchema from '../c-schema/Index';

export default {
  name: 'CRequest',
  components: {
    CSchema
  },
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    },
    method: {
      type: String,
      default: null
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
      return this.activeType === 'headers' ?
        this.headers : this.localParams[this.activeType];
    },
    headers() {
      return this.$store.state.api.options.headers;
    },
    params() {
      return R.clone(this.$store.state.api.options.params);
    },
    examples() {
      return R.clone(this.$store.state.api.options.examples);
    },
    localParams() {
      const localParams = {};
      Object.this.params(key => {
        localParams[key] = this.getSchemaObject(key);
      });
      return localParams;
    }
  },
  watch: {
    method(val) {
      if (this.activeType === 'headers') {
        return;
      }
      if (val === 'get') {
        this.activeType = 'query';
      } else {
        this.activeType = 'body';
      }
    }
  },
  methods: {
    initActive() {
      if (this.method === 'get') {
        return 'query';
      }
      return 'body';
    },
    updateParams(data) {
      if (this.activeType === 'headers') {
        this.$store.commit('UPDATE_API_PROPS', ['options.headers', data]);
        return;
      }
      const key = `options.params.${this.activeType}`;
      this.$store.commit('UPDATE_API_PROPS', [key, data.params]);
      const exampleKey = `options.examples.${this.activeType}`;
      this.$store.commit('UPDATE_API_PROPS', [exampleKey, data.example]);
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

    .el-col.types {
      position: relative;
      min-width: 150px;
      max-width: 150px;
      height: 100%;
    }

    .types {
      .control {
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-bottom: 1px solid #d1dbe5;
      }

      .item {
        border-bottom: 1px solid #eee;
        padding: 8px 10px;
        cursor: pointer;
        height: 36px;
        overflow: hidden;
        color: #79818b;

        &.active {
          background-color: #fafafa;
          color: #333;
        }

        .mocker-tip {
          margin: 2px 3px 0 0;
          float: right;
          background-color: #bfcbd9;
          display: none;
        }

        &:hover .mocker-tip {
          display: inline-block;
        }
      }
    }
  }
</style>

