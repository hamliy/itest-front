/**
 ** ********************************************************
 ** @file m-data.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-10-30 20:42:29
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-10-30 20:43:06
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/data';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      behavior.GET_IMAGE,
      behavior.QUERY_IMAGES,
      behavior.CREATE_IMAGE
    ])
  }
};
