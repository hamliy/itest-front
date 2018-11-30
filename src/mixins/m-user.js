/**
 ** ********************************************************
 ** @file m-user.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-19 17:44:55
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 17:10:52
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import * as behavior from 'store/constants/user';
import * as pbehavior from 'store/constants/project';
import { mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations([behavior.SET_USER_INFO, behavior.SET_NAME]),
    ...mapActions([
      behavior.LOGIN,
      behavior.LOGOUT,
      behavior.REGISTER,
      behavior.REFRESH_TOKEN,
      behavior.UPDATE_INFO,
      behavior.UPDATE_PASSWORD,
      pbehavior.GET_PROJECT
    ])
  }
};
