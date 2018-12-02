/**
 ** ********************************************************
 ** @file interface.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-10-09 16:21:20
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 15:49:38
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getInterface,
  searchInterface,
  createInterface,
  getGroupInterface,
  updateInterface,
  deleteInterface,
  getInterfaceHistory
} from 'api/interface';

import * as behavior from '../constants/interface';

const actions = {
  [behavior.GET_INTERFACE](context, params) {
    return getInterface(params);
  },
  [behavior.SEARCH_INTERFACE](context, params) {
    return searchInterface(params);
  },
  [behavior.CREATE_INTERFACE](context, params) {
    return createInterface(params);
  },
  [behavior.GET_GROUP_INTERFACE](context, params) {
    return getGroupInterface(params);
  },
  [behavior.UPDATE_INTERFACE](context, params) {
    return updateInterface(params);
  },
  [behavior.DELETE_INTERFACE](context, params) {
    return deleteInterface(params);
  },
  [behavior.GET_INTERFACE_HISTORY](context, params) {
    return getInterfaceHistory(params);
  }
};

export default {
  actions
};
