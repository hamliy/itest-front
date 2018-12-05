<!--
  -- --------------------------------------------------------
  -- @file CColumnExpand.vue
  -- @description : 动态列表格可扩展组件
  -- @author  hanli
  -- @date 2018-10-29 15:27:46
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-10-29 17:52:02
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-select
    v-if="field=='select'"
    v-model="column[prop]"
    placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"/>
  </el-select>
  <el-switch
    v-else-if="field=='switch'"
    v-model="column[prop]"
    active-color="#13ce66"
    inactive-color="#ff4949"/>
  <el-input v-else v-model="column[prop]"/>
</template>

<script>
  export default {
    name: 'CColumnExpand',
    props: {
      column: {
        type: Object,
        default: null
      },
      field: {
        type: String,
        default: 'input'
      },
      prop: {
        type: String,
        default: null
      },
      options: {
        type: Array,
        default: null
      }
    }
  };
</script>
