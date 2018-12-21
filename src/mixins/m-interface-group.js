/**
 ** ********************************************************
 ** @file m-interface-group.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 16:49:25
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-17 16:45:52
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import * as behavior from 'store/constants/interface-group';
import { mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations([behavior.UPDATE_API_GROUP]),
    ...mapActions([
      behavior.GET_INTERFACE_GROUP,
      behavior.SEARCH_INTERFACE_GROUP,
      behavior.CREATE_INTERFACE_GROUP,
      behavior.UPDATE_INTERFACE_GROUP,
      behavior.DELETE_INTERFACE_GROUP
    ])
  }
};
