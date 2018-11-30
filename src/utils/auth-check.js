/**
 ** ********************************************************
 ** @file auth-check.js
 ** @description : 权限校验
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-11-27 16:47:30
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-29 16:29:20
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import {
  isTokenExpired,
  isRefreshTokenExpired,
  getAuth,
  setAuth
} from 'utils/local-storage';

import { refreshToken } from 'api/user';
import router from 'deploy/router';

export const authCheck = refreshSubscribers => {
  const authTmp = getAuth();
  // 判断是否已经登录
  if (authTmp) {
    const auth = JSON.parse(authTmp);
    // 判断信息是否存在
    if (auth) {
      /* 判断刷新token请求的refresh_token是否过期 */
      if (isRefreshTokenExpired()) {
        // alert('刷新token过期，请重新登录');
        return false;
      }
      /* 判断token是否将要过期 或过期, 需要刷新数据 */
      if (isTokenExpired()) {
        /* 判断是否正在刷新 */
        if (!window.isRefreshing) {
          /* 将刷新token的标志置为true */
          window.isRefreshing = true;
          // 刷新token
          refreshToken()
          .then(res => {
              /* 将标志置为false */
            window.isRefreshing = false;
              /* 成功刷新token */
            auth.access_token = res.data.access_token;
            auth.access_token_exp = res.data.access_token_exp;
              // 更新auth
            setAuth(JSON.stringify(auth));
              /* 刷新请求（refreshSubscribers数组中的请求得到新的token之后会自执行，用新的token去请求数据） */
            refreshSubscribers.map(cb => cb(auth.access_token));
          })
          .catch(err => {
            console.log(err);
            window.isRefreshing = false;
              /* 清除本地保存的auth */
              // localStorage.removeItem('auth')
            router.replace({
              path: '/login',
                // 登录成功后跳入浏览的当前页面
              query: { redirect: router.currentRoute.fullPath }
            });
          });
          // token是否将要过期 或过期
          return false;
        }
      }
      // token未过期
      return true;
    }
    // auth 不存在
    return false;
  }
  // auth 不存在
  return false;
};
