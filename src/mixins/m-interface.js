/**
 ** ********************************************************
 ** @file m-interface.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-10-09 16:23:26
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 15:51:02
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/interface';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      behavior.GET_INTERFACE,
      behavior.SEARCH_INTERFACE,
      behavior.CREATE_INTERFACE,
      behavior.UPDATE_INTERFACE,
      behavior.DELETE_INTERFACE,
      behavior.GET_INTERFACE_HISTORY
    ])
  }
};
