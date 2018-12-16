<!--
  -- --------------------------------------------------------
  -- @file CInterfaceDocSchema.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 11:20:12
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 20:41:23
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="schema doc-schema">
    <div
      v-if="name !== 'headers'"
      :class="isShowExample"
      class="title">
      <span
        v-if="schema.status"
        :class="schema.status.toString()"
        class="status">
        {{ schema.status }}
      </span>
      <span
        v-if="name"
        class="status-text">
        {{ name }}
      </span>
      <span
        v-if="schema.statusText">
        [{{ schema.statusText }}]
      </span>
      <a
        href="javascript:;"
        class="example"
        @click="isShowExample = !isShowExample">
        {{ isShowExample ? '结构' : '示例' }}
      </a>
    </div>
    <c-interface-doc-params-table
      v-show="!isShowExample"
      :params="schema.params"/>
    <pre
      v-show="isShowExample"
      class="code"><code v-html="example"></code>
    </pre>
  </div>
</template>

<script>
import Prism from 'node/prismjs';
import CInterfaceDocParamsTable from './CInterfaceDocParamsTable';

export default {
  name: 'CInterfaceDocSchema',
  components: {
    CInterfaceDocParamsTable
  },
  props: {
    schema: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isShowExample: false
    };
  },
  computed: {
    example() {
      const example = this.schema.example
        ? this.schema.example : {};
        // : buildExampleFromSchema(this.schema);
      console.log(JSON.stringify(example, null, 4));
      return Prism.highlight(
        JSON.stringify(example, null, 4),
        Prism.languages.javascript
      );
    }
  }
};
</script>
<style lang="scss">
  .doc-schema {
    margin-bottom: 30px;

    .title {
      font-size: 14px;
      border-radius: 3px;
      padding: 0 10px;
      border: 1px solid #eee;
      margin-bottom: 10px;
      height: 30px;
      line-height: 30px;
      background-color: #f8f8f8;

      .status-text {
        font-size: 15px;
      }

      .status {
        color: #333;
      }

      [class^='status 5'],
      [class^='status 4'] {
        color: rgb(255, 0, 0);
      }

      [class^='status 3'] {
        color: #f5a623;
      }

      [class^='status 2'] {
        color: #3eb63e;
      }

      [class^='status 1'] {
        color: #aaa;
      }
    }

    .example {
      float: right;
    }
  }
</style>
