<!--
  -- --------------------------------------------------------
  -- @file CSidebarItem.vue
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-17 10:39:38
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-09-25 18:00:43
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div>
    <svg-icon
      v-if="icon"
      :icon-class="icon"/>
    <span
      v-if="title"
      slot="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'CSidebarItemNode',

  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>
