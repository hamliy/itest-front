/**
 ** ********************************************************
 ** @file toggle.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-20 11:03:04
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-28 11:09:54
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import * as behavior from 'store/constants/toggle';

const state = {
  sidebarOpened: true
};

const mutations = {
  [behavior.TOGGLE_SIDEBAR](_state) {
    _state.sidebarOpened = !_state.sidebarOpened;
  }
};

const getters = {
  sidebarOpened: _state => _state.sidebarOpened
};

const actions = {
  [behavior.TOGGLE_SIDEBAR](context) {
    context.commit(behavior.TOGGLE_SIDEBAR);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
