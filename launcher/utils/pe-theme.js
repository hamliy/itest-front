/**
 ** ********************************************************
 ** A custom theme for pretty-error
 ** @file pe-theme.js
 ** @author
 ** @date 2018-03-16 17:08:23
 ** @last_modified_by
 ** @last_modified_date 2018-03-16 17:12:08
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

module.exports = {
  'pretty-error > header': {
    display: 'none'
  },

  'pretty-error > header > title': {
    display: 'none'
  },

  'pretty-error > header > colon': {
    display: 'none'
  },

  'pretty-error > header > message': {
    color: 'white'
  },

  'pretty-error > trace': {
    marginTop: 2
  },

  'pretty-error > trace > item > header > pointer > file': {
    color: 'yellow'
  },

  'pretty-error > trace > item > header > pointer > line': {
    color: 'yellow'
  },

  'pretty-error > trace > item > header > what': {
    color: 'blue'
  }
};
