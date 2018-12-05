/**
 ** ********************************************************
 ** @file debounce.js
 ** @description :
 ** @author  hanli
 ** @date 2018-12-05 09:50:36
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-12-05 10:26:55
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

export const debounce = function(fun, interval) {
  let timer = -1;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fun(args), interval);
  };
};
