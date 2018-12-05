/**
 ** ********************************************************
 ** @file image.js
 ** @description :
 ** @author  hanli
 ** @date 2018-11-26 15:30:52
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 15:33:33
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { get, post } from './index';

export const URL = {
  get: '/images/get',
  search: '/images/search',
  create: '/images/create',
  update: '/images/update',
  delete: '/images/delete',
  updateMarks: '/images/update-marks'
};

export const getImage = params => get(URL.get, params);
export const searchImage = params => post(URL.search, params);
export const createImage = params => post(URL.create, params);
export const updateImage = params => post(URL.update, params);
export const deleteImage = params => post(URL.delete, params);
export const updateImageMarks = params => post(URL.updateMarks, params);
