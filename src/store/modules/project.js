/**
 ** ********************************************************
 ** @file project.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-18 17:39:29
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-12-03 10:18:11
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import { Message } from 'element-ui';
import {
  getProject,
  searchProject,
  createProject,
  updateProject,
  deleteProject
} from 'api/project';
import {
  setSelectedProjectId,
  getSelectedProjectId
} from 'utils/local-storage';
import * as behavior from '../constants/project';

import router from '../../deploy/router';

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
    setSelectedProjectId(selectProject.id);
  },
  [behavior.SET_PROJECT](_state, projects) {
    _state.projects = projects;
  },
  [behavior.INIT_SELECTED_PROJECT](_state, projects) {
    // 初始化页面判断是否已缓存项目
    const id = getSelectedProjectId();
    if (id) {
      projects.every(project => {
        if (project.id === id) {
          _state.selectedProject = project;
          return false;
        }
        return true;
      });
    } else {
      const obj = projects[0];
      _state.selectedProject = obj;
      setSelectedProjectId(obj.id);
    }
  }
};

const actions = {
  [behavior.GET_PROJECT](context) {
    getProject().then(({ data }) => {
      if (data.data && data.total > 0) {
        // 验证返回的data是否是一个非空数组
        const projects = data.data;
        context.commit(behavior.INIT_SELECTED_PROJECT, projects);
        context.commit(behavior.SET_PROJECT, projects);
      } else {
        Message({
          showClose: true,
          message: '请先创建项目。',
          type: 'warning'
        });
        router.push({ path: '/projects' });
      }
    });
  },

  [behavior.SEARCH_PROJECT](context, params) {
    return searchProject(params);
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
