/**
 ** ********************************************************
 ** @file m-mark-field.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 16:48:01
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 16:53:50
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/mark-field';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      behavior.GET_MARK_FIELD,
      behavior.SEARCH_MARK_FIELD,
      behavior.CREATE_MARK_FIELD,
      behavior.UPDATE_MARK_FIELD,
      behavior.DELETE_MARK_FIELD
    ])
  }
};
