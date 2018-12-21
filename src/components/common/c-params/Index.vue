<!--
  -- --------------------------------------------------------
  -- @file Index.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 21:23:29
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-12-04 21:49:52
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <c-params-items
    :params="params"
    :name="name"
    :level="1"
    class="set"
    @change="update"/>
</template>

<script>
import CParamsItems from './CParamsItems';

export default {
  name: 'CParams',
  components: {
    CParamsItems
  },
  props: {
    params: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      default: '',
      required: false
    }
  },
  beforeUpdate() {
    this.rebuildParams();
  },
  beforeMount() {
    this.rebuildParams();
  },
  methods: {
    rebuildParams() {
      if (!this.params || this.params.length === 0) {
        this.params.push({
          key: null,
          type: 'string',
          required: true
        });
      }
    },
    getFillValue(params) {
      const value = {};
      params.forEach(p => {
        if (p.type === 'object' && p.params) {
          const v = this.getFillValue(p.params);
          if (Object.keys(v).length > 0) {
            value[p.key] = v;
            this.$set(p, 'value', v);
          }
        } else if (p.value) {
          value[p.key] = p.value;
        }
      });
      return value;
    },
    update() {
      if (this.mode === 'fill') {
        const value = this.getFillValue(this.params);
        this.$emit('updateParams', this.params, value);
      } else {
        this.$emit('updateParams', this.params);
      }
    }
  }
};
</script>
