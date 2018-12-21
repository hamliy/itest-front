/**
 ** ********************************************************
 ** @file m-interface.js
 ** @description :
 ** @author  hanli
 ** @date 2018-10-09 16:23:26
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-17 16:52:56
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/interface';
import { mapActions, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([
      behavior.SAVE_API,
      behavior.UPDATE_API,
      behavior.INIT_API,
      behavior.UPDATE_API_PROPS,
      behavior.ADD_API_RESPONSE,
      behavior.DELETE_API_RESPONSE
    ]),
    ...mapActions([
      behavior.GET_INTERFACE,
      behavior.SEARCH_INTERFACE,
      behavior.CREATE_INTERFACE,
      behavior.GET_INTERFACE_BY_GROUP,
      behavior.UPDATE_INTERFACE,
      behavior.DELETE_INTERFACE,
      behavior.GET_INTERFACE_HISTORY
    ])
  }
};
