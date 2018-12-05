<!--
  -- --------------------------------------------------------
  -- @file CDataImagesViewer.vue
  -- @description : 图片预览页面
  -- @author  hanli
  -- @date 2018-10-30 17:40:45
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-10-31 16:20:14
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div>
    <!-- <viewer
      ref="viewer"
      :images="images"
      :options="options">
      <img
        v-for="src in images"
        :src="src"
        :key="src"
        width="100%"
        height="600px">
    </viewer> -->
  </div>
</template>

<script>

export default {
  name: 'CDataImagesViewer',
  props: {
    images: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      options: {
        inline: true,
        button: true,
        navbar: false,
        title: true,
        toolbar: true,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: false,
        transition: true,
        fullscreen: true,
        keyboard: true,
        url: 'data-source'
      }
    };
  }
};
</script>

