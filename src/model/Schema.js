/**
 ** ********************************************************
 ** @file Schema.js
 ** @description :
 ** @author hanli <lihan_li@test.com>
 ** @date 2018-12-05 17:33:20
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-05 17:33:49
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */
import Param from '../model/Param';

class Schema {
  constructor(index = 1) {
    this.status = 200;
    this.statusText = `status${index}`;
    this.example = null;
    this.params = [new Param()];
  }
}

export default Schema;
