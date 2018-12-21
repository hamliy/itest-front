/**
 ** ********************************************************
 ** @file InterfaceUseCase-use-case.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 16:32:26
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-21 11:09:45
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getInterfaceUseCaseAll,
  getInterfaceUseCaseById,
  getInterfaceUseCaseByGroupId,
  searchInterfaceUseCase,
  createInterfaceUseCase,
  updateInterfaceUseCase,
  deleteInterfaceUseCase,
  getInterfaceUseCaseHistory,
  executeInterfaceUseCase,
  executeInterfaceUseCaseGroup
} from 'api/interface-use-case';
import R from 'utils/ramda-r';
import * as behavior from '../constants/interface-use-case';
import apiUseCaseInitData from './../../utils/api-use-case-init-data';

const state = {
  apiUseCase: apiUseCaseInitData(),
  apiUseCaseUnsaved: false
};

const getters = {
  apiUseCase: _state => _state.apiUseCase,
  apiUseCaseUnsaved: _state => _state.apiUseCaseUnsaved
};

const mutations = {
  // 初始api用例数据
  [behavior.INIT_API_USE_CASE](_state) {
    _state.apiUseCase = apiUseCaseInitData();
  },
  // 缓存api用例数据
  [behavior.UPDATE_API_USE_CASE](_state, data) {
    _state.apiUseCase = data;
    _state.apiUseCaseUnsaved = true;
  },
  // 设置保存用例状态数据
  [behavior.SAVE_API_USE_CASE](_state) {
    _state.apiUseCaseUnsaved = false;
  },
  // api用例数据缓存
  [behavior.UPDATE_API_USE_CASE_PROPS](_state, propValuePair) {
    const apiUseCase = _state.apiUseCase || {};
    const prop = R.head(propValuePair);
    const value = R.last(propValuePair);
    const route = prop.split('.').map(p => {
      if (Number(p).toString() === p) {
        return Number(p);
      }
      return p;
    });
    _state.apiUseCase = R.assocPath(route, value, apiUseCase);
    _state.apiUseCaseUnsaved = true;
  }
};

const onGetApiUseCaseSuccess = (context, res) => {
  context.commit(behavior.UPDATE_API_USE_CASE, res.data);
  return Promise.resolve();
};
const onInitApiUseCase = context => {
  context.commit(behavior.INIT_API_USE_CASE);
  return Promise.resolve();
};

const actions = {
  [behavior.GET_INTERFACE_USE_CASE_ALL]() {
    return getInterfaceUseCaseAll();
  },
  [behavior.GET_INTERFACE_USE_CASE_BY_ID](context, params) {
    return getInterfaceUseCaseById(params).then(response => {
      onGetApiUseCaseSuccess(context, response);
    });
  },
  [behavior.GET_INTERFACE_USE_CASE_BY_GROUP_ID](context, params) {
    return getInterfaceUseCaseByGroupId(params);
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
    return deleteInterfaceUseCase(params).then(() => {
      onInitApiUseCase(context);
    });
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
  state,
  getters,
  mutations,
  actions
};
