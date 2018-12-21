/**
 ** ********************************************************
 ** @file interface-group.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 16:21:21
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-17 16:58:26
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

const state = {
  // 接口组数据
  apiGroup: []
};

const getters = {
  apiGroup: _state => _state.apiGroup
};

const mutations = {
  // 更新用例组数据
  [behavior.UPDATE_API_GROUP](_state, data) {
    _state.apiGroup = data;
  }
};

const onGetInterfaceGroupSuccess = (context, res) => {
  context.commit(behavior.UPDATE_API_GROUP, res.data);
  return Promise.resolve();
};
const actions = {
  [behavior.GET_INTERFACE_GROUP](context, params) {
    return getInterfaceGroup(params).then(response => {
      onGetInterfaceGroupSuccess(context, response);
    });
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
  state,
  actions,
  getters,
  mutations
};
