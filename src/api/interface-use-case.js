/**
 ** ********************************************************
 ** @file interface-use-case.js
 ** @description :
 ** @author  hanli
 ** @date 2018-10-09 16:18:13
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-21 17:08:02
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { get, post } from './index';

export const URL = {
  getAll: '/interface-use-case/getAll',
  getById: '/interface-use-case/getById',
  getByGroupId: '/interface-use-case/getByGroupId',
  search: '/interface-use-case/search',
  create: '/interface-use-case/create',
  update: '/interface-use-case/update',
  delete: '/interface-use-case/delete',
  getHistory: '/interface-use-case-history/get',
  execute: '/interface-use-case/execute',
  executeGroup: '/interface-use-case/execute/group'
};

export const getInterfaceUseCaseAll = () => post(URL.getAll);
export const getInterfaceUseCaseById = params => get(URL.getById, params);
export const getInterfaceUseCaseByGroupId = params =>
  get(URL.getByGroupId, params);
export const searchInterfaceUseCase = params => post(URL.search, params);
export const createInterfaceUseCase = params => post(URL.create, params);
export const updateInterfaceUseCase = params => post(URL.update, params);
export const deleteInterfaceUseCase = params => post(URL.delete, params);
export const getInterfaceUseCaseHistory = params => get(URL.getHistory, params);
export const executeInterfaceUseCase = params => post(URL.execute, params);
export const executeInterfaceUseCaseGroup = params =>
  post(URL.executeGroup, params);
