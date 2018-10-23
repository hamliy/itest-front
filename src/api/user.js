/**
 ** ********************************************************
 ** @file user.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-19 16:30:16
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-19 16:34:05
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { post, get } from './index';

export const URL = {
  login: '/user/login',
  getInfo: '/user/info',
  logout: '/user/logout'
};

export const login = (username, password) =>
  post(URL.login, { username, password });

export const getInfo = () => get(URL.getInfo);

export const logout = () => post(URL.logout);
