/**
 ** ********************************************************
 ** The common webpack loader config for all enrionments
 ** @file loaders.js
 ** @author
 ** @date 2017-12-14 13:48:04
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-05 14:43:26
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

const { dirs, vars } = require('../config/dir-vars');
const _path = require('path');

const happypackLoader = 'happypack/loader';
const _element = _path.join(dirs.node, 'element-ui', 'lib', 'theme-chalk');
const _vueTree = _path.join(
  dirs.node,
  'vue-tree-halower',
  'dist',
  'halower-tree.min'
);
const _prismjs = _path.join(dirs.node, 'prismjs', 'themes', 'prism');
const _viewerjs = _path.join(dirs.node, 'viewerjs', 'dist', 'viewer');

/**
 * @param {Object} [options={}] - custom options
 * @param {boolean} [options.useEslint] - whether use eslint-loader
 * @param {boolean} [options.hash] - webpack hash, not use in development env
 * @param {Object|boolean} [options.extractCss] - extract css
 * @param {string[]|RegExp} [options.dll] - dll rules limit
 * @returns {WebpackConfig} - webpack loader config
 */
module.exports = (options = {}) => ({
  module: {
    rules: (options.useEslint
      ? [
        {
          test: /\.(vue|js)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [dirs.src],
          options: { cache: true }
        }
      ]
      : []
    ).concat([
      {
        test: /\.vue$/,
        loader: `${happypackLoader}?id=vue`,
        include: options.dll || [dirs.src]
      },
      {
        test: /\.js$/,
        loader: `${happypackLoader}?id=babel`,
        include: options.dll || [dirs.src, dirs.launcher]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [dirs.icons],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(svg|woff2?|ttf|eot)\??.*$/,
        loader: 'url-loader',
        include: options.dll || [dirs.fonts, _element],
        exclude: [dirs.icons],
        options: {
          limit: 10000,
          name: `${vars.fonts}/[name]${options.hash ? '.[hash:6]' : ''}.[ext]`
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        include: options.dll || [dirs.src],
        exclude: [dirs.fonts, dirs.icons],
        options: {
          limit: 10000,
          name: options.hash
            ? `${vars.images}/[name].[hash:6].[ext]`
            : '[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: options.extractCss || [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ],
        include: options.dll || [
          dirs.src,
          _element,
          _vueTree,
          _viewerjs,
          _prismjs
        ]
      }
    ])
  }
});
