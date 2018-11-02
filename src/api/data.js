/**
 ** ********************************************************
 ** @file data.js
 ** @description : 数据集
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-10-30 20:32:25
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-10-31 13:36:36
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import { post, get, postFormData } from './index';

export const URL = {
  queryImages: '/data/images/query',
  getImage: '/data/images/get',
  createImage: '/data/images/create'
};

export const queryImages = params => post(URL.queryImages, params);

export const getImage = params => get(URL.getImage, params);
export const createImage = formData => postFormData(URL.createImage, formData);
