/**
 ** ********************************************************
 ** @file auth.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-19 16:49:11
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-29 14:51:32
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import Cookies from 'js-cookie';

const TokenKey = 'itest-token';
const ProjectKey = 'selected-project';

export const getToken = () => Cookies.get(TokenKey);

export const removeToken = () => Cookies.remove(TokenKey);

export const setToken = token => Cookies.set(TokenKey, token);

export const getSelectedProjectId = () => Cookies.get(ProjectKey);

export const setSelectedProjectId = selectedProjectId =>
  Cookies.set(ProjectKey, selectedProjectId);
