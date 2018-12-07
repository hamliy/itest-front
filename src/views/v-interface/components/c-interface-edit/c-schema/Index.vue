<!--
  -- --------------------------------------------------------
  -- @file Index.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 21:08:05
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 16:16:10
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="schema schema-edit">
    <el-tabs
      v-model="activeTab"
      type="card"
      class="tabs">
      <el-tab-pane
        class="tab-item structure"
        label="Schema"
        name="structure">
        <c-params
          :params="localSchema.params"
          :name="name"
          @updateParams="paramsChanged"/>
      </el-tab-pane>
      <!-- schema的真正json格式，暂时废弃 -->
      <!-- <el-tab-pane class="tab-item" label="Schema" name="schema">
        <json-editor v-if="activeTab === 'schema'"
              v-model="localSchema"
              :resize-act="fullscreen"
              :fullscreentool="false"
              @change="schemaChanged"></json-editor>
      </el-tab-pane> -->
      <el-tab-pane
        :label="exampleName"
        class="tab-item"
        name="example">
        <c-schema-example
          :schema="localSchema"
          :fullscreen="fullscreen"
          :name="exampleName"
          @buildSchema="updateSchema"
          @buildExample="updateExample"/>
      </el-tab-pane>
      <slot></slot>
    </el-tabs>
  </div>
</template>

<script>
import R from 'utils/ramda-r';
import CParams from '../c-params/Index';
import CSchemaExample from './CSchemaExample';

export default {
  name: 'CSchema',
  components: {
    CParams,
    CSchemaExample
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    exampleName: {
      type: String,
      default: 'Example'
    },
    schema: {
      type: Object,
      required: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    activeTab: 'structure'
  }),
  computed: {
    localSchema() {
      return R.clone(this.schema);
    }
  },
  methods: {
    schemaChanged(rs) {
      if (rs.success) {
        this.updateSchema(rs.data);
      }
    },
    paramsChanged() {
      this.updateSchema(this.localSchema);
    },
    updateExample(example) {
      this.localSchema.example = example;
      this.$emit('change', this.localSchema);
    },
    updateSchema(data) {
      this.$emit('change', data);
    }
  }
};
</script>
<style lang="scss">
  .schema-content {
    position: relative;
    border-left: 1px solid #d1dbe5;
  }

  .schema {
    &.schema-edit {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    .el-tabs__item {
      height: 36px;
      line-height: 36px;
    }

    .tabs .el-tabs__item {
      border-top: 0 !important;
      border-radius: 0 !important;
      margin-left: -1px;
    }

    .el-tabs__header {
      margin-bottom: 0;
    }

    .tab-item {
      height: 100%;
    }

    .el-tabs__content {
      position: absolute;
      top: 36px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;

      .structure {
        padding: 10px 20px;
      }
    }
  }
</style>
