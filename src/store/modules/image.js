/**
 ** ********************************************************
 ** @file image.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-11-26 16:22:54
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 16:28:24
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getImage,
  searchImage,
  createImage,
  updateImage,
  deleteImage
} from 'api/image';

import * as behavior from '../constants/image';

const actions = {
  [behavior.GET_IMAGE](context, params) {
    return getImage(params);
  },
  [behavior.SEARCH_IMAGE](context, params) {
    return searchImage(params);
  },
  [behavior.CREATE_IMAGE](context, params) {
    return createImage(params);
  },
  [behavior.UPDATE_IMAGE](context, params) {
    return updateImage(params);
  },
  [behavior.DELETE_IMAGE](context, params) {
    return deleteImage(params);
  }
};

export default {
  actions
};
