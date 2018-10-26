/**
 ** ********************************************************
 ** Auto set global directive in directives dir
 ** @file directive.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-10-26 16:55:41
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import { getRequireModules } from 'utils/debris';

const modules = require.context('directives', true, /\.js$/);

modules.keys().forEach(key => {
  const { path, name } = getRequireModules('js', key);
  const module = require(`directives/${path}`);
  console.log(KEBABCASE(name));
  console.log(module.default);
  Vue.directive(KEBABCASE(name), module.default || module);
});
