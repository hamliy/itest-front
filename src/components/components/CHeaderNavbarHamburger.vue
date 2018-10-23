<!--
  -- --------------------------------------------------------
  -- @file CHeaderNavbarHamburger.vue
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-18 16:31:27
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-09-28 11:08:55
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<!--
detail： 切换侧边栏按钮
 -->

<template>
  <div>
    <svg
      :class="{'is-active':isActive}"
      t="1492500959545"
      class="hamburger"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1691"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="64"
      height="64"
      @click="toggleClick">
      <!-- eslint-disable -->
      <path
        d="M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z"
        p-id="1692"></path>
      <path
        d="M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z"
        p-id="1693"></path>
      <path
        d="M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z"
        p-id="1694"></path>
      <!-- eslint-enable -->
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CHeaderNavbarHamburger',
  props: {
    isActive: {
      type: Boolean,
      default: true
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
};
</script>

<style scoped>
  .hamburger {
    display: inline-block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
    transition: 0.38s;
    transform-origin: 50% 50%;
  }

  .hamburger.is-active {
    transform: rotate(0deg);
  }
</style>
