/**
 ** ********************************************************
 ** @file interface-group.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-11-26 16:21:21
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 16:29:03
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getInterfaceGroup,
  searchInterfaceGroup,
  createInterfaceGroup,
  updateInterfaceGroup,
  deleteInterfaceGroup
} from 'api/interface-group';

import * as behavior from '../constants/interface-group';

const actions = {
  [behavior.GET_INTERFACE_GROUP](context, params) {
    return getInterfaceGroup(params);
  },
  [behavior.SEARCH_INTERFACE_GROUP](context, params) {
    return searchInterfaceGroup(params);
  },
  [behavior.CREATE_INTERFACE_GROUP](context, params) {
    return createInterfaceGroup(params);
  },
  [behavior.UPDATE_INTERFACE_GROUP](context, params) {
    return updateInterfaceGroup(params);
  },
  [behavior.DELETE_INTERFACE_GROUP](context, params) {
    return deleteInterfaceGroup(params);
  }
};

export default {
  actions
};
