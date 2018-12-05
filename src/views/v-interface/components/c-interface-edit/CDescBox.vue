<!--
  -- --------------------------------------------------------
  -- @file CDescBox.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 19:58:18
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 11:24:49
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->


<template>
  <c-simditor
    id="desc-editor"
    v-model="desc"
    placeholder="其他备注"
    @change="updateDesc"/>
</template>

<script>

export default {
  name: 'CDescBox',
  computed: {
    desc() {
      return this.$store.state.api.desc;
    }
  },
  methods: {
    updateDesc(val) {
      this.$store.commit('UPDATE_API_PROPS', ['desc', val]);
    }
  }
};
</script>
<style>
  #desc-editor {
    min-height: 200px;
  }
</style>
