/**
 ** ********************************************************
 ** @file interface.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-10-09 16:21:20
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-10-12 11:06:09
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getInterface,
  queryInterface,
  createInterface,
  updateInterface,
  deleteInterface,
  createTheme,
  createThemeSub,
  createThemeInterface,
  removeTheme,
  removeThemeSub,
  removeThemeInterface,
  getTheme
} from 'api/interface';

import * as behavior from '../constants/interface';

const actions = {
  [behavior.GET_INTERFACE](context, params) {
    return getInterface(params);
  },
  [behavior.QUERY_INTERFACE](context, params) {
    return queryInterface(params);
  },
  [behavior.CREATE_INTERFACE](context, params) {
    return createInterface(params);
  },
  [behavior.UPDATE_INTERFACE](context, params) {
    return updateInterface(params);
  },
  [behavior.DELETE_INTERFACE](context, params) {
    return deleteInterface(params);
  },
  [behavior.CREATE_THEME](context, params) {
    return createTheme(params);
  },
  [behavior.CREATE_THEME_SUB](context, params) {
    return createThemeSub(params);
  },
  [behavior.CREATE_THEME_INTERFACE](context, params) {
    return createThemeInterface(params);
  },
  [behavior.REMOVE_THEME](context, params) {
    return removeTheme(params);
  },
  [behavior.REMOVE_THEME_SUB](context, params) {
    return removeThemeSub(params);
  },
  [behavior.REMOVE_THEME_INTERFACE](context, params) {
    return removeThemeInterface(params);
  },
  [behavior.GET_THEME](context, params) {
    return getTheme(params);
  }
};

export default {
  actions
};
