/**
 ** ********************************************************
 ** @file analyse.js
 ** @author
 ** @date 2018-03-21 14:56:19
 ** @last_modified_by
 ** @last_modified_date 2018-03-21 14:56:52
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const clear = require('cli-clear');
const { compileWebpack } = require('../utils/debris');
const analyseConfig = require('../webpack-analyse');

clear();

compileWebpack(analyseConfig, {
  msg: 'Webpack analyse assets is created',
  showStats: true,
  terminateOnError: true
});
