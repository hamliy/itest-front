/**
 ** ********************************************************
 ** The webpack dll entry
 ** @file entry.js
 ** @author
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-09-17 16:48:36
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

module.exports = {
  vendor: [
    'vue',
    'vuex',
    'vue-router',
    'axios',
    'core-js',
    'lodash.camelcase',
    'lodash.kebabcase',
    'element-ui'
  ]

  // you can add more contents here for multi entries use
  // but the value must be array type
};
