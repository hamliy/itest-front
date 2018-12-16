<!--
  -- --------------------------------------------------------
  -- @file CDescBox.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 19:58:18
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 20:50:52
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->


<template>
  <div class="editor-box">
    <textarea
      id="desc-editor"
      v-model="desc"
      placeholder="其他备注"
      @change="updateDesc"></textarea>
  </div>
</template>

<script>
import mInterface from 'mixins/m-interface';
import * as iBehavior from 'store/constants/interface';

export default {
  name: 'CDescBox',
  mixins: [mInterface],
  computed: {
    desc() {
      return this.$store.getters.api.desc;
    }
  },
  methods: {
    updateDesc(val) {
      this.$store.commit(iBehavior.UPDATE_API_PROPS, ['desc', val]);
    }
  }
};
</script>
<style>
  #desc-editor {
    min-height: 200px;
    width: 100%;
    border: 0;
  }
</style>
