/**
 ** ********************************************************
 ** @file local-storage.js
 ** @description : 本地缓存数据
 ** @author  hanli
 ** @date 2018-11-27 13:49:36
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-12-03 10:11:17
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

const Auth = 'itest-token';
const ProjectKey = 'selected-project';

export const removeAuth = () => localStorage.removeItem(Auth);

export const setAuth = auth => localStorage.setItem(Auth, auth);

export const getAuth = () => localStorage.getItem(Auth);

export const getRefreshToken = () =>
  JSON.parse(localStorage.getItem(Auth)).refresh_token;

export const getToken = () =>
  JSON.parse(localStorage.getItem(Auth)).access_token;

export const getRefreshTokenExp = () =>
  JSON.parse(localStorage.getItem(Auth)).refresh_token_exp;

export const getTokenExp = () =>
  JSON.parse(localStorage.getItem(Auth)).access_token_exp;

export const isTokenExpired = () => {
  // 从localStorage中取出token过期时间
  const expiredTime = new Date(getTokenExp()) / 1000;
  // 获取本地时间
  const nowTime = new Date().getTime() / 1000;
  // 获取校验时间差 getToken
  // const diffTime = JSON.parse(sessionStorage.diffTime);
  // 校验本地时间
  // nowTime -= diffTime;
  // 如果 < 10分钟，则说明即将过期或已过期
  return expiredTime - nowTime < 10 * 60;
};
export const isRefreshTokenExpired = () => {
  // 从localStorage中取出refreshToken过期时间
  const expiredTime = new Date(getRefreshTokenExp()) / 1000;
  // 获取本地时间
  const nowTime = new Date().getTime() / 1000;
  // 获取校验时间差 待实现
  // const diffTime = JSON.parse(sessionStorage.diffTime);
  // 校验本地时间
  // nowTime -= diffTime;
  // 如果 < 10分钟，则说明已过期
  return expiredTime - nowTime < 0;
};

export const getSelectedProjectId = () => localStorage.getItem(ProjectKey);
export const removeSelectedProjectId = () =>
  localStorage.removeItem(ProjectKey);

export const setSelectedProjectId = selectedProjectId =>
  localStorage.setItem(ProjectKey, selectedProjectId);
