<!--
  -- --------------------------------------------------------
  -- @file CInterfaceInfo.vue
  -- @description : 接口基本信息页面
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-10-09 17:53:16
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-30 13:17:12
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-tabs>
    <el-tab-pane label="预览">
      <c-interface-info-preview
        :info="info"/>
    </el-tab-pane>
    <el-tab-pane label="编辑">
      <c-interface-info-edit
        :source-info="info"
        @updateInfo="handleUpdateInfo"/>
    </el-tab-pane>
    <el-tab-pane label="调试">
      <c-interface-info-debug
        :info="info"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import CInterfaceInfoPreview from './CInterfaceInfoPreview';
  import CInterfaceInfoEdit from './CInterfaceInfoEdit';
  import CInterfaceInfoDebug from './CInterfaceInfoDebug';

  export default {
    name: 'CInterfaceInfo',
    components: {
      CInterfaceInfoPreview,
      CInterfaceInfoDebug,
      CInterfaceInfoEdit
    },
    props: {
      info: {
        type: Object,
        default: null
      }
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
