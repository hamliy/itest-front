/**
 ** ********************************************************
 ** @file project.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-18 17:39:29
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-10-10 17:34:39
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import {
  getProjects,
  queryProjects,
  createProject,
  updateProject,
  deleteProject
} from 'api/project';
import { setSelectedProjectId, getSelectedProjectId } from 'utils/cookie';
import * as behavior from '../constants/project';

const state = {
  selectedProject: {},
  projects: []
};

const getters = {
  projects: _state => _state.projects,
  selectedProject: _state => _state.selectedProject
};

const mutations = {
  [behavior.SET_SELECT_PROJECT](_state, selectProject) {
    _state.selectedProject = selectProject;
    setSelectedProjectId(selectProject._id);
  },
  [behavior.SET_PROJECTS](_state, projects) {
    _state.projects = projects;
  },
  [behavior.INIT_SELECTED_PROJECT](_state, projects) {
    // 初始化页面判断是否已缓存项目
    const id = getSelectedProjectId();
    if (id) {
      projects.every(project => {
        if (project._id === id) {
          _state.selectedProject = project;
          return false;
        }
        return true;
      });
    } else {
      const obj = projects[0];
      _state.selectedProject = obj;
    }
  }
};

const actions = {
  [behavior.GET_PROJECTS](context) {
    getProjects().then(({ data }) => {
      if (data.data && data.total > 0) {
        // 验证返回的data是否是一个非空数组
        const projects = data.data;
        context.commit(behavior.INIT_SELECTED_PROJECT, projects);
        context.commit(behavior.SET_PROJECTS, projects);
      } else {
        this.$message({
          showClose: true,
          message: '请先创建项目。',
          type: 'warning'
        });
        this.$router.push({ path: '/projects' });
      }
    });
  },

  [behavior.QUERY_PROJECTS](context, params) {
    return queryProjects(params);
  },
  [behavior.CREATE_PROJECT](context, params) {
    return createProject(params);
  },
  [behavior.UPDATE_PROJECT](context, params) {
    return updateProject(params);
  },
  [behavior.DELETE_PROJECT](context, params) {
    return deleteProject(params);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
