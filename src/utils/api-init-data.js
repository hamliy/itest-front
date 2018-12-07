/**
 ** ********************************************************
 ** @file api-init-data.js
 ** @description :
 ** @author hanli <lihan_li@test.com>
 ** @date 2018-12-05 15:12:00
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-05 17:34:01
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import Schema from '../model/Schema';

const apiInitData = () => ({
  name: '',
  groupId: '',
  desc: null,
  path: '',
  method: 'get',
  options: {
    response: [new Schema()],
    responseIndex: 0,
    headers: {
      example: null,
      params: []
    },
    delay: 0,
    examples: {
      query: null,
      body: null,
      path: null
    },
    params: {
      query: [],
      body: [],
      path: []
    }
  }
});
export default apiInitData;
