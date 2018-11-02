/**
 ** ********************************************************
 ** @file interface.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-10-09 16:18:13
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-10-30 13:35:28
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { post } from './index';

export const URL = {
  getInterface: '/interface/get',
  queryInterface: '/interface/query',
  createInterface: '/interface/create',
  updateInterface: '/interface/update',
  deleteInterface: '/interface/delete',
  updateInterfaceBasic: '/interface/update/basic',
  updateInterfaceBody: '/interface/update/body',
  createTheme: '/interface/theme/create',
  createThemeSub: '/interface/theme/create/sub',
  createThemeInterface: '/interface/theme/create/interface',
  removeTheme: '/interface/theme/remove',
  removeThemeSub: '/interface/theme/remove/sub',
  removeThemeInterface: '/interface/theme/remove/interface',
  getTheme: '/interface/theme/all'
};

export const getInterface = params => post(URL.getInterface, params);
export const queryInterface = params => post(URL.queryInterface, params);
export const createInterface = params => post(URL.createInterface, params);
export const updateInterface = params => post(URL.updateInterface, params);
export const deleteInterface = params => post(URL.deleteInterface, params);
export const updateInterfaceBasic = params =>
  post(URL.updateInterfaceBasic, params);
export const updateInterfaceBody = params =>
  post(URL.updateInterfaceBody, params);
export const createTheme = params => post(URL.createTheme, params);
export const createThemeSub = params => post(URL.createThemeSub, params);
export const createThemeInterface = params =>
  post(URL.createThemeInterface, params);
export const removeTheme = params => post(URL.removeTheme, params);
export const removeThemeSub = params => post(URL.removeThemeSub, params);
export const removeThemeInterface = params =>
  post(URL.removeThemeInterface, params);
export const getTheme = params => post(URL.getTheme, params);
