/**
 ** ********************************************************
 ** @file m-project.js
 ** @author  hanli
 ** @date 2018-09-19 17:44:55
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 17:12:12
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import * as behavior from 'store/constants/project';
import { mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations([
      behavior.SET_PROJECT,
      behavior.SET_SELECT_PROJECT,
      behavior.INIT_SELECTED_PROJECT
    ]),
    ...mapActions([
      behavior.GET_PROJECT,
      behavior.SEARCH_PROJECT,
      behavior.CREATE_PROJECT,
      behavior.UPDATE_PROJECT,
      behavior.DELETE_PROJECT
    ])
  }
};
