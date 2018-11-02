/**
 ** ********************************************************
 ** Ajax interceptor
 ** @file interceptor.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-10-31 14:52:09
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import axios from 'axios';
import { getToken, getSelectedProjectId } from 'utils/cookie';

axios.defaults.timeout = 10000;

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
    if (getToken()) {
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
      data.project_id = getSelectedProjectId();
      config.data = data;
    }
    return config;
  },
  err => Promise.reject(err)
);

// if errcode doesn't equal with zero, catch error handle
axios.interceptors.response.use(
  res => (+res.data.errorCode === 100 ? res.data : Promise.reject(res)),
  err => Promise.reject(err)
);
