/**
 ** ********************************************************
 ** @file loading.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-18 20:10:21
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-18 20:14:59
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import * as behavior from 'store/constants/loading';

const state = {
  loading: false
};

const mutations = {
  [behavior.SHOW_GLOBAL_LOADING](_state) {
    _state.loading = true;
  },
  [behavior.HIDE_GLOBAL_LOADING](_state) {
    _state.loading = false;
  }
};

const getters = {
  globalLoading: _state => _state.loading
};

export default {
  state,
  getters,
  mutations
};
