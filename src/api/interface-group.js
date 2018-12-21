/**
 ** ********************************************************
 ** @file interface-group.js
 ** @description :
 ** @author  hanli
 ** @date 2018-10-09 16:18:13
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-17 16:57:03
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { post } from './index';

export const URL = {
  get: '/interface-group/get',
  search: '/interface-group/search',
  create: '/interface-group/create',
  update: '/interface-group/update',
  delete: '/interface-group/delete'
};

export const getInterfaceGroup = params => post(URL.get, params);
export const searchInterfaceGroup = params => post(URL.search, params);
export const createInterfaceGroup = params => post(URL.create, params);
export const updateInterfaceGroup = params => post(URL.update, params);
export const deleteInterfaceGroup = params => post(URL.delete, params);
