/**
 ** ********************************************************
 ** @file m-environment.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-29 10:55:38
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-29 10:56:19
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/environment';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      behavior.GET_ENVIRONMENT,
      behavior.QUERY_ENVIRONMENT,
      behavior.CREATE_ENVIRONMENT,
      behavior.UPDATE_ENVIRONMENT,
      behavior.DELETE_ENVIRONMENT
    ])
  }
};
