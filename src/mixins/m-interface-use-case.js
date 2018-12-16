/**
 ** ********************************************************
 ** @file m-interface-use-case.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 16:48:20
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 17:06:33
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/interface-use-case';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      behavior.GET_INTERFACE_USE_CASE_ALL,
      behavior.GET_INTERFACE_USE_CASE_BY_ID,
      behavior.GET_INTERFACE_USE_CASE_BY_GROUP_ID,
      behavior.SEARCH_INTERFACE_USE_CASE,
      behavior.CREATE_INTERFACE_USE_CASE,
      behavior.UPDATE_INTERFACE_USE_CASE,
      behavior.DELETE_INTERFACE_USE_CASE,
      behavior.GET_INTERFACE_USE_CASE_HISTORY,
      behavior.EXECUTE_INTERFACE_USE_CASE,
      behavior.EXECUTE_INTERFACE_USE_CASE_GROUP
    ])
  }
};
