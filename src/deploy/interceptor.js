/**
 ** ********************************************************
 ** Ajax interceptor
 ** @file interceptor.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-12-03 13:49:29
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import axios from 'axios';
import {
  getToken,
  getRefreshToken,
  getSelectedProjectId
} from 'utils/local-storage';
import { authCheck } from '../utils/auth-check';
import router from './router';

window.isRefreshing = false;

const refreshSubscribers = [];

/* push所有缓存请求到数组中 */
const subscribeTokenRefresh = cb => {
  refreshSubscribers.push(cb);
};

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = false;
// if ajax url doesn't start with http, https or /data,
// it will add prefix of /api automatically
axios.interceptors.request.use(
  config => {
    // 接口前加api
    const { url } = config;
    !/^(https?:|\/\/|\/datas)/.test(url) &&
      (config.url = `/api${/^\//.test(url) ? '' : '/'}${url}`);
    // !/^(https?:|\/\/|\/data)/.test(url) &&
    //   (config.url = `/api${/^\//.test(url) ? '' : '/'}${url}`);
    // 让每个请求携带自定义token 请根据实际情况自行修改
    // 如果是 刷新token请求 附带token未刷新token
    if (url === '/users/refreshToken') {
      config.headers.Authorization = `Bearer ${getRefreshToken()}`;
    } else if (url === '/users/login') {
      return config;
    } else {
      // // 如果auth失败且不是在刷新token，说明 auth失效 在路由跳转判断
      // if (!authCheck(refreshSubscribers) && !window.isRefreshing) {
      //   /* 清除本地保存的auth */
      //   removeAuth();
      //   router.replace({
      //     path: '/login',
      //     // 登录成功后跳入浏览的当前页面
      //     query: { redirect: router.currentRoute.fullPath }
      //   });
      //   // window.location.href = '#/login';
      //   return config;
      // 如果auth失败且在刷新token，说明 token失效或即将失效 正在刷新，缓存请求
      // } else
      if (!authCheck(refreshSubscribers) && window.isRefreshing) {
        /* 把请求(token)=>{....}都push到一个数组中 */
        const retry = new Promise(resolve => {
          /* (token) => {...}这个函数就是回调函数 */
          subscribeTokenRefresh(token => {
            config.headers.Authorization = `Bearer ${token}`;
            /* 将请求挂起 */
            resolve(config);
          });
        });
        return retry;
      }
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
    const whiteList = [
      '/login',
      '/project/all',
      '/project/query',
      '/project/create',
      '/project/update',
      '/project/delete',
      '/project/all'
    ];
    // 请求增加项目id参数
    if (whiteList.indexOf(url) === -1 && getSelectedProjectId()) {
      const data = config.data || {};
      data.projectId = getSelectedProjectId();
      config.data = data;
    }
    return config;
  },
  err => Promise.reject(err)
);

// if errcode doesn't equal with zero, catch error handle
axios.interceptors.response.use(
  res => (+res.data.errorCode === 100 ? res.data : Promise.reject(res)),
  err => {
    if (err.response) {
      switch (err.response.status) {
        case 401:
          // 这里写清除token的代码
          router.replace({
            path: '/login',
            // 登录成功后跳入浏览的当前页面
            query: { redirect: router.currentRoute.fullPath }
          });
          break;
        default:
          console.log('err');
      }
    }
    return Promise.reject(err);
  }
);
