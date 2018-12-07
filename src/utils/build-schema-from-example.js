/**
 ** ********************************************************
 ** @file buidl-schema-from-example.js
 ** @description :
 ** @author hanli <lihan_li@test.com>
 ** @date 2018-12-05 10:59:28
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-05 18:13:59
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

/**
 ** ********************************************************
 ** @file build-schema-from-example.js
 ** @description :
 ** @author  hanli
 ** @date 2018-12-04 21:52:05
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-05 10:58:49
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import R from './ramda-r';
import Param from '../model/Param';

const findParam = (params, key) => {
  if (!params || !params.length) {
    return null;
  }
  return params.find(p => p.key === key);
};

const buildParams = (json, oldParams) => {
  const params = [];
  Object.keys(json).forEach(key => {
    const jsonValue = json[key];
    const type = typeof jsonValue;
    // null, {}, [] 都属于空，属性则为选填
    const required = !(R.isEmpty(jsonValue) || jsonValue === null);
    const oldParam = findParam(oldParams, key);
    const param = new Param({
      ...oldParam || {},
      key,
      type,
      required
    });
    if (type === 'object' && jsonValue instanceof Array) {
      param.type = 'array';
      param.items = { type: typeof jsonValue[0] };
      if (param.items.type === 'object') {
        param.items.params = buildParams(
          jsonValue[0],
          oldParam && oldParam.items && oldParam.items.params
        );
      } else {
        param.example = jsonValue;
      }
    } else if (type === 'object') {
      param.params = buildParams(jsonValue, oldParam && oldParam.params);
    } else {
      param.example = jsonValue;
    }
    params.push(param);

    // 保证在页面上呈现一个可填项
    if (params.length === 0) {
      params.push(new Param());
    }
  });
  return params;
};

const buildSchemaFromExample = (
  json,
  oldParams = null,
  statusText = 'status1',
  status = 200
) => {
  const schema = {
    status,
    statusText,
    example: json,
    params: []
  };
  schema.params = buildParams(json, oldParams);
  return schema;
};

export default buildSchemaFromExample;
