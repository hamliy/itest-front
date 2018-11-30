/**
 ** ********************************************************
 ** @file interface-use-case-group.js
 ** @description :
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-10-09 16:18:13
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 17:07:25
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { get, post } from './index';

export const URL = {
  get: '/interface-use-case-group/get',
  search: '/interface-use-case-group/search',
  create: '/interface-use-case-group/create',
  update: '/interface-use-case-group/update',
  delete: '/interface-use-case-group/delete'
};

export const getInterfaceUseCaseGroup = params => get(URL.get, params);
export const searchInterfaceUseCaseGroup = params => post(URL.search, params);
export const createInterfaceUseCaseGroup = params => post(URL.create, params);
export const updateInterfaceUseCaseGroup = params => post(URL.update, params);
export const deleteInterfaceUseCaseGroup = params => post(URL.delete, params);