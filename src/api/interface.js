/**
 ** ********************************************************
 ** @file interface.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-10-09 16:18:13
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 15:17:32
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { get, post } from './index';

export const URL = {
  get: '/interfaces/get',
  search: '/interfaces/search',
  create: '/interfaces/create',
  update: '/interfaces/update',
  delete: '/interfaces/delete',
  getHistory: '/interface-history/get'
};

export const getInterface = params => get(URL.get, params);
export const searchInterface = params => post(URL.search, params);
export const createInterface = params => post(URL.create, params);
export const updateInterface = params => post(URL.update, params);
export const deleteInterface = params => post(URL.delete, params);
export const getInterfaceHistory = params => get(URL.getHistory, params);
