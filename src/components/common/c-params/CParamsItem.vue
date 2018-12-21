<!--
  -- --------------------------------------------------------
  -- @file CParamsItem.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 21:25:46
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-19 09:41:24
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div
    :class="[expanded ? 'unfold' : 'fold']"
    class="param-wrap">
    <div
      v-show="isShowExpand"
      class="expand"
      @click="expandParam">
      <span
        :class="{expanded: expanded}"
        class="el-tree-node__expand-icon el-icon-caret-right"></span>
    </div>
    <div
      :style="styleObject"
      class="control">
      <i
        :class="{hidden: params.length === 1}"
        class="el-icon-close"
        @click="deleteParam">
      </i>
      <i class="el-icon-plus" @click="addParam"></i>
    </div>
    <c-params-item-set
      :param="param"
      :name="name"
      @keydown.native.enter="addParam"
      @buildObject="buildObject"
      @change="updateParam"/>
    <slot name="params"></slot>
  </div>
</template>

<script>
import CParamsItemSet from './CParamsItemSet';

export default {
  name: 'CParamsItem',
  components: {
    CParamsItemSet
  },
  props: {
    level: {
      type: Number,
      required: true
    },
    params: {
      type: Array,
      required: true
    },
    param: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      default: '',
      required: false
    }
  },
  data() {
    return {
      styleObject: {
        left: `-${51 + this.level * 25}px`
      },
      expanded: false
    };
  },
  computed: {
    isShowExpand() {
      return this.param.type === 'object' ||
        this.param.type === 'array' && this.param.items.type === 'object';
    }
  },
  methods: {
    buildObject() {
      this.expanded = true;
    },
    updateParam() {
      this.$emit('change', this.param);
    },
    addParam() {
      this.$emit('addParam');
    },
    deleteParam() {
      this.$emit('deleteParam');
    },
    expandParam() {
      this.expanded = !this.expanded;
    }
  }
};
</script>
<style lang="scss">
  .params-box {
    .control {
      min-width: 56px;
      max-width: 56px;
      position: absolute;
      left: 0;
      top: 0;
    }

    .control i {
      color: #ccc;
      line-height: 36px;
      width: 28px;
      font-size: 12px;
      cursor: pointer;
      float: left;
      text-align: center;
    }

    .control i.el-icon-plus {
      font-size: 14px;
    }

    .control i:hover {
      background-color: #eff2f7;
    }

    .control i.hidden {
      visibility: hidden;
    }
  }

  .param-wrap {
    position: relative;

    .params-box {
      transition: height 0.3s ease;
    }

    &.fold .params-box {
      overflow: hidden;
      height: 0;
    }

    .expand {
      cursor: pointer;
      display: inline-block;
      width: 20px;
      height: 36px;
      position: absolute;
      left: -20px;
      top: 0;
      line-height: 36px;
    }
  }

  .param .el-input__inner:hover {
    border-color: #eff2f7;
  }

  .control:hover ~ .param,
  .param-wrap .param:focus,
  .param-wrap .param:hover {
    box-shadow: 0 0 5px 2px #eee;
    z-index: 1;
  }
</style>
