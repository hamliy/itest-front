/**
 ** ********************************************************
 ** @file project.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-18 19:30:38
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-28 14:19:57
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { get, post } from './index';

export const URL = {
  getProjects: '/project/all',
  queryProjects: '/project/query',
  createProject: '/project/create',
  updateProject: '/project/update',
  deleteProject: '/project/delete'
};

export const getProjects = () => get(URL.getProjects);
export const queryProjects = params => post(URL.queryProjects, params);
export const createProject = params => post(URL.createProject, params);
export const updateProject = params => post(URL.updateProject, params);
export const deleteProject = params => post(URL.deleteProject, params);
