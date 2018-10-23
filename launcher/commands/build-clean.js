/**
 ** ********************************************************
 ** Remove all files which were builded by webpack
 ** @file build-clean.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by wenkanglin <wenkang_lin@kingdee.com>
 ** @last_modified_date 2018-03-16 17:12:21
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const del = require('del');
const logger = require('../utils/logger');
const { dirs } = require('../config/dir-vars');

const { INFO, DONE } = logger;

const print = folders => {
  const { length } = folders;
  const info = 'There are no folders to delete';
  const done = `Remove folders ${folders.join(', ')}`;
  logger[length ? DONE : INFO](length ? done : info);
};

del(dirs.build)
.then(folders => print(folders))
.catch(err => logger.error(err));
