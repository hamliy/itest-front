/**
 ** ********************************************************
 ** The webpack dll for production environment
 ** @file dll-prod.js
 ** @author
 ** @date 2018-03-16 17:14:11
 ** @last_modified_by
 ** @last_modified_date 2018-03-16 17:14:27
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const createDll = require('./dll-base');
const { prod } = require('../config/env');
const dllConfig = require('../webpack-prod/dll-config');

createDll({ ...prod, config: dllConfig, clearOld: true });
