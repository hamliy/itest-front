<!--
  -- --------------------------------------------------------
  -- @file App.vue
  -- @author
  -- @date 2018-03-07 17:26:40
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-10-08 16:20:36
  -- @copyright (c) 2018 @yfe/aldnoah-spa
  -- --------------------------------------------------------
 -->

<template>
  <main id="app">
    <!-- <router-link :to="{ name: 'home' }">go to home page</router-link>
    <router-link :to="{ name: '404' }">go to 404 page</router-link> -->
    <!-- <transition name="fade" mode="out-in"> -->
    <keep-alive :include="/alive$/i">
      <router-view/>
    </keep-alive>
    <!-- </transition> -->
  </main>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style src="styles/reset.css"></style>
<style src="styles/common.css"></style>
<style src="styles/animation.css"></style>
