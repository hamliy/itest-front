/**
 ** ********************************************************
 ** @file m-environment.js
 ** @description :
 ** @author  hanli
 ** @date 2018-09-29 10:55:38
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-24 17:16:19
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/environment';
import { mapActions, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([behavior.UPDATE_ALL_ENV]),
    ...mapActions([
      behavior.GET_ENVIRONMENT,
      behavior.SEARCH_ENVIRONMENT,
      behavior.CREATE_ENVIRONMENT,
      behavior.UPDATE_ENVIRONMENT,
      behavior.DELETE_ENVIRONMENT
    ])
  }
};
