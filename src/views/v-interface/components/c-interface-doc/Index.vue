<!--
  -- --------------------------------------------------------
  -- @file Index.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 10:41:31
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 20:43:05
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->
<template>
  <div :id="api.id" class="api-doc">
    <div class="fields">
      <div class="field name">
        <h2>
          <label>{{ api.name }}</label>
          <span :class="methodStyle" class="method">{{ method }}</span>
        </h2>
        <div class="control">
          <el-button class="follow" @click="diff()">历史对比</el-button>
        </div>
      </div>
      <div class="field url">
        <div>
          <label>接口名称：</label>
          <p class="prod code">{{ api.name }}</p>
        </div>
        <div>
          <label>接口路径：</label>
          <p class="prod code">
            {{ api.path }}</p></div>
      </div>
      <div class="field">
        <label>提交参数</label>
        <c-interface-doc-schema
          v-for="(schema, key) in schemaParams"
          v-if="hasParams(schema.params)"
          :name="key"
          :schema="schema"
          :key="key"/>
      </div>
      <div v-if="headers.params.length" class="field">
        <label>请求头</label>
        <c-interface-doc-schema :schema="headers" name="headers"/>
      </div>
      <div
        v-if="api.options.response && api.options.response.length"
        class="field">
        <label>返回结果</label>
        <c-interface-doc-schemas
          :schemas="api.options.response"
          name="response"/>
      </div>
      <div v-show="api.desc" class="field desc">
        <label>其他备注</label>
        <div
          class="editor-style"
          v-html="api.desc"></div>
      </div>
    </div>
  </div>
</template>
<script>
import CInterfaceDocParamsTable from './CInterfaceDocParamsTable';
import CInterfaceDocSchemas from './CInterfaceDocSchemas';
import CInterfaceDocSchema from './CInterfaceDocSchema';
// import { mapActions, mapState } from 'vuex';
// // 为了接口描述在文档中显示的跟编辑时样式一致而引入
// import 'simditor/styles/simditor.css';
export default {
  name: 'CInterfaceDoc',
  components: {
    CInterfaceDocSchema,
    CInterfaceDocSchemas,
    CInterfaceDocParamsTable
  },
  props: {
    api: {
      type: Object,
      default: null
    }
  },
  computed: {
    isPreview() {
      return !!this.$route.query.preview;
    },
    method() {
      return this.api.method.toUpperCase();
    },
    methodStyle() {
      return {
        [this.method]: true
      };
    },
    schemaParams() {
      const schemas = {};
      Object.keys(this.api.options.params).forEach(key => {
        // get方法没有body参数
        if (this.method !== 'GET' || key !== 'body') {
          schemas[key] = {
            example: this.api.options.examples[key],
            params: this.api.options.params[key]
          };
        }
      });
      return schemas;
    },
    headers() {
      return this.api.options.headers;
    }
  },
  methods: {
    edit() {
      this.$store.commit('UPDATE_API', this.api);
      this.$store.commit('CHANGE_MODE', 'edit');
      this.$router.push(`/edit/${this.api.group}/${this.api._id}`);
    },
    hasParams(params) {
      return params && params.filter(p => p.key).length > 0;
    }
  }
};
</script>
<style lang="scss">
  .apis-doc {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .method {
    &.put,
    &.PUT,
    &.PATCH,
    &.patch,
    &.post,
    &.POST {
      color: #f5a623;
    }

    &.get,
    &.GET {
      color: #3eb63e;
    }
  }

  .path-method {
    color: rgb(16, 142, 233);
    background-color: rgb(210, 234, 251);
    padding: 4px 6px;
    margin-right: 8px;
    border-radius: 4px;
    vertical-align: middle;
  }

  .api-doc {
    width: 100%;
    padding: 10px;

    & ~ .api-doc {
      border-top: 1px solid #ddd;
    }

    h2 {
      border-bottom: 1px solid #ececec;
      font-weight: bold;
      padding: 10px 0;
    }

    .code {
      // border: 1px solid #e6e6e6;
      padding: 6px 10px;
      border-radius: 3px;
      color: #666;
      background-color: #f8f8f8;
    }

    .fields {
      width: 100%;
      min-width: 650px;
    }

    .method {
      color: #3eb63e;
      font-weight: normal;
      margin-left: 10px;
    }

    .field {
      width: 100%;
      position: relative;
      margin-bottom: 30px;

      &.name .control {
        position: absolute;
        right: 0;
        top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }

      & > label {
        display: block;
        font-size: 16px;
        border-bottom: 1px solid #e6e6e6;
        line-height: 2;
        margin-bottom: 20px;
      }

      &.url {
        & > div {
          padding-left: 75px;
          position: relative;
          margin-bottom: 10px;

          .code {
            word-break: break-all;
          }
        }

        label {
          position: absolute;
          left: 0;
          top: 10px;
        }
      }
    }
  }
</style>
