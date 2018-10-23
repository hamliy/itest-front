/**
 ** ********************************************************
 ** @file user.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-19 16:26:56
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-29 14:43:54
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import { getToken, setToken, removeToken } from 'utils/cookie';

import * as behavior from '../constants/user';
import { login, logout } from '../../api/user';

const state = {
  token: getToken(),
  name: '',
  userInfo: {}
};

const getters = {
  name: _state => _state.name,
  userInfo: _state => _state.userInfo
};

const mutations = {
  [behavior.SET_USER_INFO](_state, info) {
    _state.userInfo = info;
  },
  [behavior.SET_NAME](_state, name) {
    _state.name = name;
  }
};

const onLoginSuccess = response => {
  setToken(response.data.token);
  return Promise.resolve();
};

const onLogoutSuccess = () => {
  removeToken();
  return Promise.resolve();
};

const actions = {
  [behavior.LOGIN](context, { username, password }) {
    return login(username, password).then(response => {
      onLoginSuccess(response);
    });
  },
  [behavior.LOGOUT]() {
    return logout().then(response => {
      onLogoutSuccess(response);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
