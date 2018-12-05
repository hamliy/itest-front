<!--
  -- --------------------------------------------------------
  -- @file index.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-10-08 13:36:40
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-10-08 13:46:54
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->
<template>
  <div class="layout-test">
    <span class="fixed-top">超长时出现下拉条，这句话相对父元素固定在顶部</span>
    <ul>
      <li
        v-for="i in 100"
        :key="i">布局测试{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VUseCase'
};
</script>

<style lang="scss" scoped>
  .layout-test {
    text-align: center;
    padding: 16px;

    span {
      font-size: 18px;
    }

    ul {
      padding-top: 20px;
    }

    li {
      text-align: left;
    }

    .fixed-top {
      position: fixed;
      margin: 0 auto;
    }
  }
</style>
