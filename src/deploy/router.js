/**
 ** ********************************************************
 ** Vue router config
 ** @file router.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-12-03 13:55:24
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import VueRouter from 'vue-router';
import { getRequireModules } from 'utils/debris';
import { removeAuth } from 'utils/local-storage';
import { authCheck } from '../utils/auth-check';

Vue.use(VueRouter);

let routes = [];
const modules = require.context('routes', true, /\.js$/);

modules.keys().forEach(key => {
  const { path } = getRequireModules('js', key);
  const module = require(`routes/${path}`);
  routes = routes.concat(module.default || module);
});

routes.push({ path: '*', redirect: '/404' });

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.meta && to.meta.position) {
      return to.meta.position;
    }
    return { x: 0, y: 0 };
  }
});

// 跳转之前判断 是否token过期
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    // 认证通过
    if (authCheck('')) {
      // if (router.query.redirect) {
      //   const redirect = router.query.redirect;
      //   next({ path: redirect });
      // } else {
      next({ path: '/' });
      // }
    }
    next();
    return;
  }
  // 如果auth失败且不是在刷新token，说明 auth失效
  if (!authCheck('') && !window.isRefreshing) {
    /* 清除本地保存的auth */
    removeAuth();
    next({ path: '/login' });
    return;
  }
  next();
});

export default router;
