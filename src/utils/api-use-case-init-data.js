/**
 ** ********************************************************
 ** @file api-use-case-init-data.js
 ** @description : 初始化用例数据
 ** @author hanli <lihan_li@test.com>
 ** @date 2018-12-20 15:55:36
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-24 14:09:26
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import Param from '../model/Param';

const apiUseCaseInitData = () => ({
  name: '',
  groupId: '',
  interfaceId: '',
  desc: null,
  level: 0,
  options: {
    path: '',
    method: 'get',
    headers: {
      example: {},
      params: [new Param()]
    },
    delay: 0,
    data: {
      examples: {
        query: new Param(),
        body: new Param(),
        path: new Param()
      },
      params: {
        query: [new Param()],
        body: [new Param()],
        path: [new Param()]
      }
    },
    type: 'query',
    expect: []
  }
});
export default apiUseCaseInitData;
