<!--
  -- --------------------------------------------------------
  -- @file CParamsItemFill.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 21:26:10
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-12-04 21:40:16
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="param fill">
    <el-row type="flex" class="row-bg">
      <el-col
        :span="5"
        class="name">
        <label>{{ param.key }}<code>[{{ param.type }}]</code>:</label>
      </el-col>
      <el-col class="value">
        <el-input
          v-if="param.type === 'object'"
          :placeholder="getPlaceholder(param)"
          readonly
          @click.native="expand"/>
        <el-input
          v-else
          v-model="param.value"
          :placeholder="getPlaceholder(param)"
          @change="updateReqParam"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CParamsItemFill',
  props: {
    param: {
      type: Object,
      required: true
    }
  },
  computed: {
    valueString() {
      if (this.param.type === 'string') {
        return this.param.value;
      }
      return JSON.stringify(this.param.value);
    }
  },
  methods: {
    getPlaceholder(p) {
      return p.required ? '必填' : '选填';
    },
    updateReqParam() {
      this.$emit('change', this.param);
    },
    expand() {
      this.$emit('expand');
    }
  }
};
</script>
