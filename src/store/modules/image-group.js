/**
 ** ********************************************************
 ** @file image-group.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-11-26 16:23:04
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 16:28:32
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getImageGroup,
  searchImageGroup,
  createImageGroup,
  updateImageGroup,
  deleteImageGroup
} from 'api/image-group';

import * as behavior from '../constants/image-group';

const actions = {
  [behavior.GET_IMAGE_GROUP](context, params) {
    return getImageGroup(params);
  },
  [behavior.SEARCH_IMAGE_GROUP](context, params) {
    return searchImageGroup(params);
  },
  [behavior.CREATE_IMAGE_GROUP](context, params) {
    return createImageGroup(params);
  },
  [behavior.UPDATE_IMAGE_GROUP](context, params) {
    return updateImageGroup(params);
  },
  [behavior.DELETE_IMAGE_GROUP](context, params) {
    return deleteImageGroup(params);
  }
};

export default {
  actions
};
