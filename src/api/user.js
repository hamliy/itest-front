/**
 ** ********************************************************
 ** @file user.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-19 16:30:16
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 15:12:58
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { post, get } from './index';

export const URL = {
  login: '/users/login',
  search: '/users/search',
  register: '/users/create',
  refresh: '/users/refreshToken',
  updateInfo: '/users/update/info',
  updatePassword: '/users/update/password',
  logout: '/users/logout'
};

export const login = (email, password) => post(URL.login, { email, password });
export const logout = () => post(URL.logout);
export const searchUser = params => post(URL.search, params);
export const register = params => get(URL.register, params);
export const refreshToken = () => post(URL.refresh);
export const updateInfo = params => post(URL.updateInfo, params);
export const updatePassword = params => post(URL.updatePassword, params);
