/**
 ** ********************************************************
 ** @file data.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-10-30 20:40:21
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-10-30 20:42:20
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import { getImage, queryImages, createImage } from 'api/data';

import * as behavior from '../constants/data';

const actions = {
  [behavior.GET_IMAGE](context, params) {
    return getImage(params);
  },
  [behavior.QUERY_IMAGES](context, params) {
    return queryImages(params);
  },
  [behavior.CREATE_IMAGE](context, params) {
    return createImage(params);
  }
};

export default {
  actions
};
