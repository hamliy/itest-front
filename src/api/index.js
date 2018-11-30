/**
 ** ********************************************************
 ** @file index.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-18 19:30:25
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-27 10:41:40
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import axios from 'axios';

const postConfig = {
  // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
};
const formDataConfig = {
  headers: { 'Content-Type': 'multipart/form-data' }
};

const wrapPromise = fn =>
  new Promise((resolve, reject) => {
    fn()
    .then(res => resolve(res))
    .catch(reason => reject(reason));
  });

const post = (url, params, config = {}) =>
  wrapPromise(function axiosPost() {
    return axios.post(url, params, { ...postConfig, ...config });
  });

const postFormData = (url, formData) =>
  wrapPromise(function axiosPost() {
    return axios.post(url, formData, formDataConfig);
  });

const get = (url, params) =>
  wrapPromise(function axiosPost() {
    return axios.get(url, { params });
  });

const put = (url, params) =>
  wrapPromise(function axiosPost() {
    return axios.post(url, params);
  });

export { post, postFormData, get, put };
