/**
 ** ********************************************************
 ** @file environment.js
 ** @description : 接口请求处理
 ** @author  hanli
 ** @date 2018-09-29 10:02:35
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 16:20:28
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

const actions = {
  [behavior.GET_ENVIRONMENT](context, params) {
    return getEnvironment(params);
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
  actions
};
