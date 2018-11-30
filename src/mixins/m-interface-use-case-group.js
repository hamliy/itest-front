/**
 ** ********************************************************
 ** @file m-interface-use-case-group.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-11-26 16:49:16
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 16:52:07
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/interface-use-case-group';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      behavior.GET_INTERFACE_USE_CASE_GROUP,
      behavior.SEARCH_INTERFACE_USE_CASE_GROUP,
      behavior.CREATE_INTERFACE_USE_CASE_GROUP,
      behavior.UPDATE_INTERFACE_USE_CASE_GROUP,
      behavior.DELETE_INTERFACE_USE_CASE_GROUP
    ])
  }
};
