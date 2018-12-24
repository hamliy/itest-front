/**
 ** ********************************************************
 ** @file environment.js
 ** @description : 环境相关接口
 ** @author  hanli
 ** @date 2018-09-29 09:59:30
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-24 17:31:15
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import { post } from './index';

export const URL = {
  search: '/envs/search',
  get: '/envs/get',
  create: '/envs/create',
  update: '/envs/update',
  delete: '/envs/delete'
};

export const searchEnvironment = params => post(URL.search, params);
export const getEnvironment = params => post(URL.get, params);
export const createEnvironment = params => post(URL.create, params);
export const updateEnvironment = params => post(URL.update, params);
export const deleteEnvironment = params => post(URL.delete, params);
