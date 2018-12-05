<!--
  -- --------------------------------------------------------
  -- @file CSchemaExample.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 21:08:31
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 11:22:24
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="schema-example">
    <div class="control">
      <el-tooltip
        v-model="tooltip.example"
        :manual="true"
        class="item"
        effect="dark"
        content="已覆盖示例值"
        placement="top">
        <el-button
          size="small"
          @click.native="buildExample">
          Schema => Example</el-button>
      </el-tooltip>
      <el-tooltip
        v-model="tooltip.schema"
        :manual="true"
        class="item"
        effect="dark"
        content="生成模型成功"
        placement="top">
        <el-button
          size="small"
          @click.native="buildSchema">Example => Schema</el-button>
      </el-tooltip>
    </div>
    <div class="editor">
      <c-json-editor
        v-model="example"
        :parse-tool="true"
        :resize-act="fullscreen"
        :fullscreen-tool="false"
        class="example-editor"
        @change="updateExample"/>
    </div>
  </div>
</template>

<script>
import buildSchemaFromExample from 'utils/build-schema-from-example';
import buildExampleFromSchema from 'utils/build-example-from-schema';

export default {
  name: 'CSchemaExample',
  props: {
    schema: {
      type: Object,
      required: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      status: {
        success: true,
        msg: ''
      },
      tooltip: {
        example: false,
        schema: false
      }
    };
  },
  computed: {
    example: {
      get() {
        return this.schema.example;
      },
      set(val) {
        this.$emit('buildExample', val);
      }
    }
  },
  methods: {
    showTooltip(name) {
      this.tooltip[name] = true;
      window.setTimeout(() => {
        this.tooltip[name] = false;
      }, 1000);
    },
    updateExample(data) {
      this.status = data;
      if (data.success) {
        this.example = data.data;
      }
      // 此处为了业务简单，与vuex耦合
      this.$store.commit('UPDATE_DSL_STATUS', data);
    },
    buildExample() {
      this.example = buildExampleFromSchema({
        ...this.schema,
        example: null
      });
      this.showTooltip('example');
    },
    buildSchema() {
      if (!this.status.success) {
        this.$message.error(this.status.msg);
        return;
      }
      const { params, statusText, status } = this.schema;
      const schema = buildSchemaFromExample(this.example,
        params, statusText, status);
      this.$emit('buildSchema', schema);
      this.showTooltip('schema');
    }
  }
};
</script>
<style>
  .schema-example {
    height: 100%;
  }

  .schema-example .control {
    padding: 10px 20px;
    border-bottom: 1px solid #d1dbe5;
  }

  .schema-example .editor {
    position: absolute;
    top: 49px;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
