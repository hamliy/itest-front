/**
 ** ********************************************************
 ** @file environment.js
 ** @description : 环境相关接口
 ** @author  hanli
 ** @date 2018-09-29 09:59:30
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-11-26 15:18:35
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import { post, get } from './index';

export const URL = {
  search: '/envs/search',
  get: '/envs/get',
  create: '/envs/create',
  update: '/envs/update',
  delete: '/envs/delete'
};

export const searchEnvironment = params => post(URL.search, params);
export const getEnvironment = params => get(URL.get, params);
export const createEnvironment = params => post(URL.create, params);
export const updateEnvironment = params => post(URL.update, params);
export const deleteEnvironment = params => post(URL.delete, params);
