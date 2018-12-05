/**
 ** ********************************************************
 ** Auto set global vue filter in filters dir
 ** @file filter.js
 ** @author
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by
 ** @last_modified_date 2018-03-22 09:42:19
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import { getRequireModules } from 'utils/debris';

const modules = require.context('filters', true, /\.js$/);

modules.keys().forEach(key => {
  const { path, name } = getRequireModules('js', key);
  const module = require(`filters/${path}`);
  Vue.filter(KEBABCASE(name), module.default || module);
});
