/**
 ** ********************************************************
 ** @file mark-field.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-11-26 15:34:48
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 15:35:39
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { get, post } from './index';

export const URL = {
  get: '/mark-field/get',
  search: '/mark-field/search',
  create: '/mark-field/create',
  update: '/mark-field/update',
  delete: '/mark-field/delete'
};

export const getMarkField = params => get(URL.get, params);
export const searchMarkField = params => post(URL.search, params);
export const createMarkField = params => post(URL.create, params);
export const updateMarkField = params => post(URL.update, params);
export const deleteMarkField = params => post(URL.delete, params);
