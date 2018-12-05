/**
 ** ********************************************************
 ** @file user.js
 ** @author  hanli
 ** @date 2018-09-20 11:29:46
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-09-20 11:30:34
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

export default [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "v-home" */ 'views/v-account/VLogin'),
    meta: {
      title: '登录-itest'
    }
  }
];
