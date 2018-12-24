/**
 ** ********************************************************
 ** @file environment.js
 ** @description : 接口请求处理
 ** @author  hanli
 ** @date 2018-09-29 10:02:35
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-24 17:17:06
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getEnvironment,
  searchEnvironment,
  createEnvironment,
  updateEnvironment,
  deleteEnvironment
} from 'api/environment';

import * as behavior from '../constants/environment';

const state = {
  allEnv: []
};

const getters = {
  allEnv: _state => _state.allEnv
};

const mutations = {
  // 缓存环境信息数据
  [behavior.UPDATE_ALL_ENV](_state, data) {
    _state.allEnv = data;
  }
};

const onGetAllEnvSuccess = (context, res) => {
  context.commit(behavior.UPDATE_ALL_ENV, res.data);
  return Promise.resolve();
};

const actions = {
  [behavior.GET_ENVIRONMENT](context, params) {
    return getEnvironment(params).then(response => {
      onGetAllEnvSuccess(context, response);
    });
  },
  [behavior.SEARCH_ENVIRONMENT](context, params) {
    return searchEnvironment(params);
  },
  [behavior.CREATE_ENVIRONMENT](context, params) {
    return createEnvironment(params);
  },
  [behavior.UPDATE_ENVIRONMENT](context, params) {
    return updateEnvironment(params);
  },
  [behavior.DELETE_ENVIRONMENT](context, params) {
    return deleteEnvironment(params);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
