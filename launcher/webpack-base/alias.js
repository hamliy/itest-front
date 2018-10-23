/**
 ** ********************************************************
 ** The webpack resolve.alias option
 ** @file alias.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2017-12-14 10:42:51
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-17 17:29:28
 ** @tutorial https://webpack.js.org/configuration/resolve/#resolve-alias
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const path = require('path');
const { dirs } = require('../config/dir-vars');

module.exports = Object.assign({}, dirs, {
  vue$: 'vue/dist/vue.js',

  design$: path.join(dirs.launcher, 'config', 'design.js'),

  envUtil$: path.join(dirs.launcher, 'config', 'env-util.js')
});
