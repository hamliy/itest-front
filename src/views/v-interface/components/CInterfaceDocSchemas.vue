<!--
  -- --------------------------------------------------------
  -- @file CInterfaceDocSchemas.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 11:20:06
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-12-04 14:38:32
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="doc-schemas">
    <c-interface-doc-schema
      v-for="(schema, key) in schemas"
      :schema="schema"
      :key="key"
      :name="name"/>
  </div>
</template>

<script>
import CInterfaceDocSchema from './CInterfaceDocSchema';

export default {
  name: 'CInterfaceDocSchemas',
  components: {
    CInterfaceDocSchema
  },
  props: {
    schemas: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>
