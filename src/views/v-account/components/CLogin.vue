<!--
  -- --------------------------------------------------------
  -- @file CLogin.vue
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-19 11:18:44
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-11-26 17:29:09
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-form
    class="login-form"
    auto-complete="on"
    label-position="left">
    <h3 class="title">itest</h3>
    <el-form-item prop="email">
      <span class="svg-container svg-container_login">
        <svg-icon icon-class="user"/>
      </span>
      <el-input
        v-model="email"
        name="email"
        type="text"
        auto-complete="on"
        placeholder="email"/>
    </el-form-item>
    <el-form-item prop="password">
      <span class="svg-container">
        <svg-icon icon-class="password"/>
      </span>
      <el-input
        :type="pwdType"
        v-model="password"
        name="password"
        auto-complete="on"
        placeholder="password"
        @keyup.enter.native="handleLogin"/>
      <span class="show-pwd" @click="showPwd">
        <svg-icon icon-class="eye"/>
      </span>
    </el-form-item>
    <el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;"
        @click.native.prevent="handleLogin">
        登录
      </el-button>
    </el-form-item>
    <div class="tips">
      <span style="margin-right:20px;">email: admin@admin.com</span>
      <span> password: admin</span>
    </div>
  </el-form>
</template>

<script>

export default {
  name: 'CLogin',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pwdType: 'password',
      email: 'admin@admin.com',
      password: 'admin'
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = '';
      } else {
        this.pwdType = 'password';
      }
    },
    handleLogin() {
      if (this.checkName() || this.checkPassword()) {
        this.$toast('邮箱或密码不能为空');
        return false;
      }
      if (this.loading) {
        return false;
      }
      this.$emit('login', this.email, this.password);
      return true;
    },
    checkName() {
      return this.email.trim() === '';
    },
    checkPassword() {
      return this.password.trim() === '';
    }

  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  $light_gray: #eee;

  /* reset element-ui css */
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0;
      -webkit-appearance: none;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;

      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px;
    margin: 120px auto;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;

    &_login {
      font-size: 20px;
    }
  }

  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0 auto 40px;
    text-align: center;
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
</style>
