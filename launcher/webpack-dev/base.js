/**
 ** ********************************************************
 ** The common webpack config for development environment and dev dll
 ** @file base.js
 ** @author
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-12-03 14:47:26
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const { DefinePlugin } = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const { dev } = require('../config/env');

module.exports = () => ({
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'source-map',
  stats: 'none',

  performance: false,

  plugins: [
    new DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(dev.env) }
    }),
    new FriendlyErrorsPlugin()
  ]
});
