/**
 ** ********************************************************
 ** @file interface.js
 ** @description :
 ** @author  hanli
 ** @date 2018-10-09 16:21:20
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-17 16:52:42
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getInterface,
  searchInterface,
  createInterface,
  updateInterface,
  deleteInterface,
  getInterfaceHistory,
  getInterfaceByGroup
} from 'api/interface';

import R from 'utils/ramda-r';
import Schema from 'model/Schema';
import * as behavior from '../constants/interface';
import apiInitData from './../../utils/api-init-data';

const state = {
  api: apiInitData(),
  apiList: [],
  apiUnsaved: false
};

const getters = {
  api: _state => _state.api,
  apiList: _state => _state.apiList,
  apiUnsaved: _state => _state.apiUnsaved
};

const mutations = {
  // 初始api数据
  [behavior.INIT_API](_state) {
    _state.api = apiInitData();
  },
  // 缓存api数据
  [behavior.UPDATE_API](_state, data) {
    _state.api = data;
    _state.apiUnsaved = true;
  },
  // 设置保存状态数据
  [behavior.SAVE_API](_state) {
    _state.apiUnsaved = false;
  },
  // api数据缓存
  [behavior.UPDATE_API_PROPS](_state, propValuePair) {
    const api = _state.api || {};
    const prop = R.head(propValuePair);
    const value = R.last(propValuePair);
    const route = prop.split('.').map(p => {
      if (Number(p).toString() === p) {
        return Number(p);
      }
      return p;
    });
    _state.api = R.assocPath(route, value, api);
    _state.apiUnsaved = true;
  },
  // api
  [behavior.ADD_API_RESPONSE](_state) {
    _state.api.options.response.push(
      new Schema(state.api.options.response.length + 1)
    );
  },
  [behavior.DELETE_API_RESPONSE](_state, index) {
    _state.api.options.response.splice(index, 1);
    if (_state.api.options.responseIndex >= index && index !== 0) {
      _state.api.options.responseIndex -= 1;
    }
  }
};

const onGetInterfaceSuccess = (context, res) => {
  context.commit(behavior.UPDATE_API, res.data);
  return Promise.resolve();
};

const onInitApi = context => {
  context.commit(behavior.INIT_API);
  return Promise.resolve();
};

const actions = {
  [behavior.GET_INTERFACE](context, params) {
    return getInterface(params).then(response => {
      onGetInterfaceSuccess(context, response);
    });
  },
  [behavior.SEARCH_INTERFACE](context, params) {
    return searchInterface(params);
  },
  [behavior.CREATE_INTERFACE](context, params) {
    return createInterface(params);
  },
  [behavior.GET_INTERFACE_BY_GROUP](context, params) {
    return getInterfaceByGroup(params);
  },
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  [behavior.UPDATE_INTERFACE]({ state }) {
    return updateInterface(state.api);
  },
  [behavior.DELETE_INTERFACE](context, params) {
    return deleteInterface(params).then(() => {
      onInitApi(context);
    });
  },
  [behavior.GET_INTERFACE_HISTORY](context, params) {
    return getInterfaceHistory(params);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
