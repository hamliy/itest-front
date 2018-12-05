/**
 ** ********************************************************
 ** @file image-group.js
 ** @description :
 ** @author  hanli
 ** @date 2018-10-09 16:18:13
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 15:34:25
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { get, post } from './index';

export const URL = {
  get: '/image-group/get',
  search: '/image-group/search',
  create: '/image-group/create',
  update: '/image-group/update',
  delete: '/image-group/delete'
};

export const getImageGroup = params => get(URL.get, params);
export const searchImageGroup = params => post(URL.search, params);
export const createImageGroup = params => post(URL.create, params);
export const updateImageGroup = params => post(URL.update, params);
export const deleteImageGroup = params => post(URL.delete, params);
