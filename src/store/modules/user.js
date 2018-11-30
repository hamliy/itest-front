/**
 ** ********************************************************
 ** @file user.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-19 16:26:56
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-27 16:14:20
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import { setAuth, removeAuth } from 'utils/local-storage';

import * as behavior from '../constants/user';
import {
  login,
  logout,
  register,
  refreshToken,
  updateInfo,
  updatePassword
} from '../../api/user';

const state = {
  // token: getToken(),
  // refreshToken: getRefreshToken(),
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
  const auth = {
    token_type: 'Bearer',
    access_token: response.data.access_token,
    refresh_token: response.data.refresh_token,
    access_token_exp: response.data.access_token_exp,
    refresh_token_exp: response.data.refresh_token_exp
  };
  setAuth(JSON.stringify(auth));
  return Promise.resolve();
};

const onLogoutSuccess = () => {
  removeAuth();
  return Promise.resolve();
};

const actions = {
  [behavior.LOGIN](context, { email, password }) {
    return login(email, password).then(response => {
      onLoginSuccess(response);
    });
  },
  [behavior.LOGOUT]() {
    return logout().then(response => {
      onLogoutSuccess(response);
    });
  },
  [behavior.REGISTER](context, params) {
    return register(params);
  },
  [behavior.REFRESH_TOKEN](context, params) {
    return refreshToken(params);
  },
  [behavior.UPDATE_INFO](context, params) {
    return updateInfo(params);
  },
  [behavior.UPDATE_PASSWORD](context, params) {
    return updatePassword(params);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
