<!--
  -- --------------------------------------------------------
  -- @file SvgIcon.vue
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-20 15:38:16
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-09 11:18:58
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->


<template>
  <svg :class="svgClass" aria-hidden="true">
    <title v-if="showTitle">{{ title }}</title>
    <use :xlink:href="iconName">
    </use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      }
      return 'svg-icon';
    },
    showTitle() {
      if (this.title) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
