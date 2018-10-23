/**
 ** ********************************************************
 ** @file store-helper.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-18 20:15:28
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-29 14:45:26
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

import * as loadingBehavior from 'store/constants/loading';

export const basicRoutine = (promiseFactory, ctx, beforeAction) =>
  new Promise(_resolve => {
    ctx.commit(loadingBehavior.SHOW_GLOBAL_LOADING);
    beforeAction && beforeAction(ctx);
    _resolve(promiseFactory());
  }).finally(() => {
    ctx.commit(loadingBehavior.HIDE_GLOBAL_LOADING);
  });
