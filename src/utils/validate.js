/**
 ** ********************************************************
 ** @file validate.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-25 16:21:14
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-25 16:23:54
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

/* 合法uri */
export const validateURL = textval => {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
};

/* 小写字母 */
export const validateLowerCase = str => {
  const reg = /^[a-z]+$/;
  return reg.test(str);
};

/* 大写字母 */
export const validateUpperCase = str => {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
};

/* 大小写字母 */
export const validatAlphabets = str => {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
};
