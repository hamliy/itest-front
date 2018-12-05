/**
 ** ********************************************************
 ** @file mark-field.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 16:29:23
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 16:31:55
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getMarkField,
  searchMarkField,
  createMarkField,
  updateMarkField,
  deleteMarkField
} from 'api/mark-field';

import * as behavior from '../constants/mark-field';

const actions = {
  [behavior.GET_MARK_FIELD](context, params) {
    return getMarkField(params);
  },
  [behavior.SEARCH_MARK_FIELD](context, params) {
    return searchMarkField(params);
  },
  [behavior.CREATE_MARK_FIELD](context, params) {
    return createMarkField(params);
  },
  [behavior.UPDATE_MARK_FIELD](context, params) {
    return updateMarkField(params);
  },
  [behavior.DELETE_MARK_FIELD](context, params) {
    return deleteMarkField(params);
  }
};

export default {
  actions
};
