/**
 ** ********************************************************
 ** @file m-interface-use-case-group.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 16:49:16
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-17 14:16:18
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/interface-use-case-group';
import { mapActions, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([behavior.UPDATE_API_USE_CASE_GROUP]),
    ...mapActions([
      behavior.GET_INTERFACE_USE_CASE_GROUP,
      behavior.SEARCH_INTERFACE_USE_CASE_GROUP,
      behavior.CREATE_INTERFACE_USE_CASE_GROUP,
      behavior.UPDATE_INTERFACE_USE_CASE_GROUP,
      behavior.DELETE_INTERFACE_USE_CASE_GROUP
    ])
  }
};
