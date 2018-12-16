<!--
  -- --------------------------------------------------------
  -- @file index.vue
  -- @description : 接口视图
  -- @author  hanli
  -- @date 2018-09-30 17:39:48
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 19:58:11
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="content-page">
    <c-api-use-case-tree
      :group-data="groupInfo"
      :prop="prop"
      @fetch-tree-data="fetchTreeData"/>
  </div>
</template>

<script>
import * as cInterfaceUseCaseGroup
  from 'store/constants/interface-use-case-group';
import mInterfaceUseCaseGroup from 'mixins/m-interface-use-case-group';
import mUtil from 'mixins/m-util';
import CApiUseCaseTree from './components/CApiUseCaseTree';

export default {
  name: 'VApiUseCase',
  components: {
    CApiUseCaseTree
  },
  mixins: [mInterfaceUseCaseGroup, mUtil],
  data() {
    return {
      groupInfo: [],
      prop: {
        children: 'member',
        label: 'name'
      }
    };
  },
  created() {
    this.fetchTreeData();
  },
  methods: {
    fetchTreeData() {
      this[cInterfaceUseCaseGroup.GET_INTERFACE_USE_CASE_GROUP]()
      .then(res => {
        this.groupInfo = this.appendRoot(res.data);
      }).catch(err => {
        this.$_mUtil_messageError(err);
      });
    },
    appendRoot(data) {
      const root = {};
      root[this.prop.children] = [];
      root[this.prop.label] = '所有用例';
      root.id = -1;
      data.splice(0, 0, root);
      return data;
    }
  }
};
</script>

<style lang="scss">
  .content-page {
    display: flex;
  }
</style>
