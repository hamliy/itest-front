/**
 ** ********************************************************
 ** @file index.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-20 14:54:39
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-20 15:38:58
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./svg', false, /\.svg$/);

requireAll(req);
