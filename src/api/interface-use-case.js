/**
 ** ********************************************************
 ** @file interface-use-case.js
 ** @description :
 ** @author  hanli
 ** @date 2018-10-09 16:18:13
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 15:28:42
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { get, post } from './index';

export const URL = {
  get: '/interfaces/get',
  search: '/interface-use-case/search',
  create: '/interface-use-case/create',
  update: '/interface-use-case/update',
  delete: '/interface-use-case/delete',
  getHistory: '/interface-use-case-history/get',
  execute: '/interface-use-case/execute',
  executeGroup: '/interface-use-case/execute/group'
};

export const getInterfaceUseCase = params => get(URL.get, params);
export const searchInterfaceUseCase = params => post(URL.search, params);
export const createInterfaceUseCase = params => post(URL.create, params);
export const updateInterfaceUseCase = params => post(URL.update, params);
export const deleteInterfaceUseCase = params => post(URL.delete, params);
export const getInterfaceUseCaseHistory = params => get(URL.getHistory, params);
export const executeInterfaceUseCase = params => post(URL.execute, params);
export const executeInterfaceUseCaseGroup = params =>
  post(URL.executeGroup, params);
