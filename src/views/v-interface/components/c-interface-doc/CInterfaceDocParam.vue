<!--
  -- --------------------------------------------------------
  -- @file CInterfaceDocParam.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 11:26:37
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-12-04 14:39:47
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div
    v-if="param.key"
    class="doc-param">
    <el-row type="flex">
      <!-- <em class="split-line" :style="splitStyle"></em> -->
      <el-col
        :style="keyStyle"
        class="key">{{ param.key }}</el-col>
      <div class="row-and-col">
        <el-col class="type">
          {{ param.type }}
          <code
            v-if="param.type === 'array'"
            class="array-type">
            [{{ param.items.type }}]
          </code>
        </el-col>
        <el-col
          class="required">
          {{ param.required ? '是' : '否' }}
        </el-col>
        <el-col
          class="comment">
          {{ param.comment ? param.comment : '无' }}
        </el-col>
        <el-col
          class="example">
          {{ param.example !== undefined ? param.example : '无' }}
        </el-col>
      </div>
    </el-row>
    <slot name="params"></slot>
  </div>
</template>

<script>
  export default {
    name: 'CInterfaceDocParam',
    props: {
      param: {
        type: Object,
        required: true
      },
      level: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        keyStyle: {
          marginLeft: `-${this.level * 20}px`,
          textIndent: `${this.level * 20}px`
        },
        splitStyle: {
          width: this.level ? '1px' : 0,
          left: `${this.level * 20}px`
        }
      };
    }
  };
</script>
<style>
  .doc-param .array-type {
    color: #e96900;
  }

  .split-line {
    position: absolute;
    width: 1px;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #e6e6e6;
    z-index: 1;
  }
</style>
