/**
 ** ********************************************************
 ** The config in different environments
 ** @file env.js
 ** @author wenkanglin <wenkang_lin@kingdee.com>
 ** @date 2017-12-13 14:18:04
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-11-26 17:55:55
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const { dev, test, prod } = require('./env-util');
const _ip = require('ip').address();

module.exports = {
  dev: {
    port: 3001,
    host: _ip,
    open: true,
    env: dev,
    quiet: false,
    proxy: {
      '/api': { target: 'http://172.20.166.138:8083' }
    },
    dllPattern: '',
    dllManifest: 'dev-manifest.json'
  },

  test: {
    port: 8080,
    env: test,
    proxy: {}
  },

  prod: {
    port: 8080,
    env: prod,
    proxy: {},
    dllPattern: '.**',
    dllManifest: 'prod-manifest.json',
    sw: 'service-worker.js'
  }
};
