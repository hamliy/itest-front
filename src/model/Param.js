/**
 ** ********************************************************
 ** @file Param.js
 ** @description :
 ** @author hanli <lihan_li@test.com>
 ** @date 2018-12-05 17:31:09
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-05 17:31:40
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

class Param {
  constructor(initParam = {}) {
    const {
      key = null,
      type = 'string',
      required = true,
      comment = null
    } = initParam;
    this.key = key;
    this.type = type;
    this.required = required;
    this.comment = comment;
  }
}

export default Param;
