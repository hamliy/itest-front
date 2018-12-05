/**
 ** ********************************************************
 ** @file interface-use-case-group.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 16:32:35
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 16:47:06
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getInterfaceUseCaseGroup,
  searchInterfaceUseCaseGroup,
  createInterfaceUseCaseGroup,
  updateInterfaceUseCaseGroup,
  deleteInterfaceUseCaseGroup
} from 'api/interface-use-case-group';

import * as behavior from '../constants/interface-use-case-group';

const actions = {
  [behavior.GET_INTERFACE_USE_CASE_GROUP](context, params) {
    return getInterfaceUseCaseGroup(params);
  },
  [behavior.SEARCH_INTERFACE_USE_CASE_GROUP](context, params) {
    return searchInterfaceUseCaseGroup(params);
  },
  [behavior.CREATE_INTERFACE_USE_CASE_GROUP](context, params) {
    return createInterfaceUseCaseGroup(params);
  },
  [behavior.UPDATE_INTERFACE_USE_CASE_GROUP](context, params) {
    return updateInterfaceUseCaseGroup(params);
  },
  [behavior.DELETE_INTERFACE_USE_CASE_GROUP](context, params) {
    return deleteInterfaceUseCaseGroup(params);
  }
};

export default {
  actions
};
