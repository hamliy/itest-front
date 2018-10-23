<!--
  -- --------------------------------------------------------
  -- @file VLogin.vue
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-19 11:14:20
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-09-20 11:32:33
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="login-container">
    <c-login
      ref="loginForm"
      :username="username"
      :password="password"
      :loading="loading"
      @login="login"/>
  </div>
</template>

<script>
import mUtil from 'mixins/m-util';
import mUser from 'mixins/m-user';
import * as user from 'store/constants/user';
import CLogin from './components/CLogin';

export default {
  name: 'Login',
  components: {
    CLogin
  },
  mixins: [mUtil, mUser],
  data() {
    return {
      username: 'admin',
      password: 'admin',
      loading: false
    };
  },
  methods: {
    onLoginSuccess() {
      this.$router.push({ path: '/' });
    },
    login() {
      this.loading = true;
      console.log({
        username: this.username,
        password: this.password
      });
      this[user.LOGIN]({
        username: this.username,
        password: this.password
      })
      .finally(() => (this.loading = false))
      .then(this.onLoginSuccess)
      .catch(this.$_mUtil_toastError);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
  }
</style>
