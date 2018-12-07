<!--
  -- --------------------------------------------------------
  -- @file CInterfaceDocParams.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 11:26:47
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-12-04 14:18:38
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->
<template>
  <div class="doc-params">
    <c-interface-doc-param
      v-for="(param, key) in params"
      :key="key"
      :param="param"
      :level="level">
      <c-interface-doc-params
        v-if="param.type === 'object' && param.params"
        slot="params"
        :params="param.params"
        :level="nextLevel"/>
      <c-interface-doc-params
        v-if="param.type === 'array' && param.items.type === 'object'"
        slot="params"
        :params="param.items.params"/>
    </c-interface-doc-param>
  </div>
</template>

<script>
import CInterfaceDocParam from './CInterfaceDocParam';

export default {
  name: 'CInterfaceDocParams',
  components: {
    CInterfaceDocParam
  },
  props: {
    params: {
      type: Array,
      required: true
    },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    nextLevel() {
      return this.level + 1;
    }
  }
};
</script>
<style lang="scss">
  .doc-params {
    position: relative;

    .doc-params {
      padding-left: 20px;

      &::before {
        content: '';
        position: absolute;
        width: 1px;
        left: 20px;
        top: 0;
        bottom: 0;
        background-color: #e6e6e6;
        z-index: 1;
      }
    }
  }

  .doc-param {
    position: relative;
    z-index: 0;
  }
</style>

