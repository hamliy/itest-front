/**
 ** ********************************************************
 ** @file project.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-18 19:30:38
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-30 17:05:54
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { get, post } from './index';

export const URL = {
  search: '/projects/search',
  get: '/projects/get',
  create: '/projects/create',
  update: '/projects/update',
  delete: '/projects/delete'
};

export const searchProject = params => post(URL.search, params);
export const getProject = () => get(URL.get);
export const createProject = params => post(URL.create, params);
export const updateProject = params => post(URL.update, params);
export const deleteProject = params => post(URL.delete, params);
