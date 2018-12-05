/**
 ** ********************************************************
 ** @file interface.js
 ** @description :
 ** @author  hanli
 ** @date 2018-10-09 16:21:20
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-12-03 14:21:06
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
  getInterfaceHistory,
  getInterfaceByGroup
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
  [behavior.GET_INTERFACE_BY_GROUP](context, params) {
    return getInterfaceByGroup(params);
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
