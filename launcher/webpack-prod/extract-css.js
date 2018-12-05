/**
 ** ********************************************************
 ** The config of css loader use with extract-text-webpack-plugin
 ** @file extract-css.js
 ** @author
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by
 ** @last_modified_date 2018-03-22 17:58:33
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = ExtractTextPlugin.extract({
  use: [
    {
      loader: 'css-loader',
      options: { minimize: true }
    },
    'postcss-loader'
  ],
  fallback: 'vue-style-loader'
});
