/**
 ** ********************************************************
 ** @file m-interface-group.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-11-26 16:49:25
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 16:51:42
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import * as behavior from 'store/constants/interface-group';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      behavior.GET_INTERFACE_GROUP,
      behavior.SEARCH_INTERFACE_GROUP,
      behavior.CREATE_INTERFACE_GROUP,
      behavior.UPDATE_INTERFACE_GROUP,
      behavior.DELETE_INTERFACE_GROUP
    ])
  }
};
