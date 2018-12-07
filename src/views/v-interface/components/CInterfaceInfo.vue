<!--
  -- --------------------------------------------------------
  -- @file CInterfaceInfo.vue
  -- @description : 接口基本信息页面
  -- @author  hanli
  -- @date 2018-10-09 17:53:16
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 20:18:10
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-tabs>
    <el-tab-pane label="预览">
      <c-interface-doc
        :api="$store.getters.api"/>
    </el-tab-pane>
    <el-tab-pane label="编辑">
      <c-interface-edit/>
    </el-tab-pane>
    <el-tab-pane label="调试">
      <c-interface-info-debug
        :info="$store.getters.api"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import CInterfaceEdit from './c-interface-edit/Index';
  import CInterfaceInfoDebug from './CInterfaceInfoDebug';
  import CInterfaceDoc from './c-interface-doc/Index';

  export default {
    name: 'CInterfaceInfo',
    components: {
      CInterfaceDoc,
      CInterfaceInfoDebug,
      CInterfaceEdit
    },
    data() {
      return {
        tabPosition: 'top'
      };
    },
    methods: {
      handleUpdateInfo(type, info) {
        this.$emit('updateInfo', type, info);
      }
    }
  };
</script>
