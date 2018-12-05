/**
 ** ********************************************************
 ** @file m-environment.js
 ** @description :
 ** @author  hanli
 ** @date 2018-09-29 10:55:38
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 16:20:35
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/environment';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      behavior.GET_ENVIRONMENT,
      behavior.SEARCH_ENVIRONMENT,
      behavior.CREATE_ENVIRONMENT,
      behavior.UPDATE_ENVIRONMENT,
      behavior.DELETE_ENVIRONMENT
    ])
  }
};
