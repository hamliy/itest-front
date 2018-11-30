/**
 ** ********************************************************
 ** @file m-image.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-11-26 16:47:38
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 16:52:50
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/image';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      behavior.GET_IMAGE,
      behavior.SEARCH_IMAGE,
      behavior.CREATE_IMAGE,
      behavior.UPDATE_IMAGE,
      behavior.DELETE_IMAGE
    ])
  }
};
