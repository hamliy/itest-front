/**
 ** ********************************************************
 ** @file m-image-group.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 16:49:03
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 16:52:36
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import * as behavior from 'store/constants/image-group';
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      behavior.GET_IMAGE_GROUP,
      behavior.SEARCH_IMAGE_GROUP,
      behavior.CREATE_IMAGE_GROUP,
      behavior.UPDATE_IMAGE_GROUP,
      behavior.DELETE_IMAGE_GROUP
    ])
  }
};
