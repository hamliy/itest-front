/**
 ** ********************************************************
 ** @file interface-use-case-group.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 16:32:35
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-17 15:10:57
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

const state = {
  // 用例组数据
  apiUseCaseGroup: []
};

const getters = {
  apiUseCaseGroup: _state => _state.apiUseCaseGroup
};

const mutations = {
  // 更新用例组数据
  [behavior.UPDATE_API_USE_CASE_GROUP](_state, data) {
    _state.apiUseCaseGroup = data;
  }
};

const onGetInterfaceUseCaseGroupSuccess = (context, res) => {
  context.commit(behavior.UPDATE_API_USE_CASE_GROUP, res.data);
  return Promise.resolve();
};

const actions = {
  [behavior.GET_INTERFACE_USE_CASE_GROUP](context) {
    return getInterfaceUseCaseGroup().then(response => {
      onGetInterfaceUseCaseGroupSuccess(context, response);
    });
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
  state,
  actions,
  getters,
  mutations
};
