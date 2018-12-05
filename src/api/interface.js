/**
 ** ********************************************************
 ** @file interface.js
 ** @description :
 ** @author  hanli
 ** @date 2018-10-09 16:18:13
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-12-03 15:20:59
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { get, post } from './index';

export const URL = {
  get: '/interfaces/get',
  search: '/interfaces/search',
  create: '/interfaces/create',
  getGroupInterface: '/interfaces/group-tree',
  getInterfaceByGroup: '/interfaces/group',
  update: '/interfaces/update',
  delete: '/interfaces/delete',
  getHistory: '/interface-history/get'
};

export const getInterface = params => get(URL.get, params);
export const searchInterface = params => post(URL.search, params);
export const createInterface = params => post(URL.create, params);
export const getGroupInterface = params => post(URL.getGroupInterface, params);
export const getInterfaceByGroup = params =>
  get(URL.getInterfaceByGroup, params);
export const updateInterface = params => post(URL.update, params);
export const deleteInterface = params => post(URL.delete, params);
export const getInterfaceHistory = params => get(URL.getHistory, params);
