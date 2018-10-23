/**
 ** ********************************************************
 ** @file m-project.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-19 17:44:55
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-28 14:21:54
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import * as behavior from 'store/constants/project';
import { mapMutations, mapActions } from 'vuex';

export default {
  methods: {
    ...mapMutations([
      behavior.SET_PROJECTS,
      behavior.SET_SELECT_PROJECT,
      behavior.INIT_SELECTED_PROJECT
    ]),
    ...mapActions([
      behavior.GET_PROJECTS,
      behavior.QUERY_PROJECTS,
      behavior.CREATE_PROJECT,
      behavior.UPDATE_PROJECT,
      behavior.DELETE_PROJECT
    ])
  }
};
