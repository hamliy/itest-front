/**
 ** ********************************************************
 ** @file environment.js
 ** @description : 环境相关接口
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-29 09:59:30
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-10-08 11:15:57
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import { post } from './index';

export const URL = {
  getEnvironment: '/environment/all',
  queryEnvironment: '/environment/query',
  createEnvironment: '/environment/create',
  updateEnvironment: '/environment/update',
  deleteEnvironment: '/environment/delete'
};

export const getEnvironment = params => post(URL.getEnvironment, params);
export const queryEnvironment = params => post(URL.queryEnvironment, params);
export const createEnvironment = params => post(URL.createEnvironment, params);
export const updateEnvironment = params => post(URL.updateEnvironment, params);
export const deleteEnvironment = params => post(URL.deleteEnvironment, params);
