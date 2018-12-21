/**
 ** ********************************************************
 ** @file api-use-case-init-data.js
 ** @description : 初始化用例数据
 ** @author hanli <lihan_li@test.com>
 ** @date 2018-12-20 15:55:36
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-21 11:10:02
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
    headers: [new Param()],
    delay: 0,
    data: {
      query: [new Param()],
      body: [new Param()],
      path: [new Param()]
    },
    type: 'query',
    expect: []
  }
});
export default apiUseCaseInitData;
