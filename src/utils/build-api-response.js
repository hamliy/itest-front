/**
 ** ********************************************************
 ** @file build-api-response.js
 ** @description :
 ** @author  hanli
 ** @date 2018-12-04 21:51:12
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-12-04 21:59:58
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import buildSchemaFromExample from './build-schema-from-example';

export default api => {
  if (api.options.response) {
    return api;
  }
  api.options.response = [buildSchemaFromExample(api.dsl)];
  return api;
};
