/**
 ** ********************************************************
 ** @file InterfaceUseCase-use-case.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 16:32:26
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 16:44:06
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getInterfaceUseCase,
  searchInterfaceUseCase,
  createInterfaceUseCase,
  updateInterfaceUseCase,
  deleteInterfaceUseCase,
  getInterfaceUseCaseHistory,
  executeInterfaceUseCase,
  executeInterfaceUseCaseGroup
} from 'api/interface-use-case';

import * as behavior from '../constants/interface-use-case';

const actions = {
  [behavior.GET_INTERFACE_USE_CASE](context, params) {
    return getInterfaceUseCase(params);
  },
  [behavior.SEARCH_INTERFACE_USE_CASE](context, params) {
    return searchInterfaceUseCase(params);
  },
  [behavior.CREATE_INTERFACE_USE_CASE](context, params) {
    return createInterfaceUseCase(params);
  },
  [behavior.UPDATE_INTERFACE_USE_CASE](context, params) {
    return updateInterfaceUseCase(params);
  },
  [behavior.DELETE_INTERFACE_USE_CASE](context, params) {
    return deleteInterfaceUseCase(params);
  },
  [behavior.GET_INTERFACE_USE_CASE_HISTORY](context, params) {
    return getInterfaceUseCaseHistory(params);
  },
  [behavior.EXECUTE_INTERFACE_USE_CASE](context, params) {
    return executeInterfaceUseCase(params);
  },
  [behavior.EXECUTE_INTERFACE_USE_CASE_GROUP](context, params) {
    return executeInterfaceUseCaseGroup(params);
  }
};

export default {
  actions
};
