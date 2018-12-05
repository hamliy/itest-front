/**
 ** ********************************************************
 ** Auto set global components in the components/global dir
 ** Auto set global components in the components/ui/global dir
 ** @file component.js
 ** @author
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-12-04 20:21:24
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import { getRequireModules } from 'utils/debris';

const modules = require.context('comps/global', true, /\.vue$/);
const comModules = require.context('comps/common', true, /\.vue$/);
const uiModules = require.context('ui/global', true, /\.vue$/);

modules.keys().forEach(key => {
  const { path, name } = getRequireModules('vue', key);
  const module = require(`comps/global/${path}`);
  Vue.component(KEBABCASE(name), module.default || module);
});

comModules.keys().forEach(key => {
  const { path, name } = getRequireModules('vue', key);
  const module = require(`comps/common/${path}`);
  Vue.component(KEBABCASE(name), module.default || module);
});

uiModules.keys().forEach(key => {
  const { path, name } = getRequireModules('vue', key);
  const module = require(`ui/global/${path}`);
  Vue.component(KEBABCASE(name), module.default || module);
});
