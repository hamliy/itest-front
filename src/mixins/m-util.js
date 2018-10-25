/**
 ** ********************************************************
 ** @file m-util.js
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-19 17:44:55
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-27 16:43:45
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

export default {
  methods: {
    $_mUtil_toastError(error) {
      if (error instanceof Error) {
        this.$toast(error.message);
      } else if (error.errorCode) {
        this.$toast(error.error);
      } else if (error.code === 'ECONNABORTED') {
        this.$toast('请求超时，请重试！');
      } else {
        this.$toast(JSON.stringify(error.data.error));
      }
    },
    $_mUtil_messageError(error) {
      if (error instanceof Error) {
        this.$message({
          showClose: true,
          message: error.message,
          type: 'error'
        });
      } else if (error.errorCode) {
        this.$message({
          showClose: true,
          message: error.error,
          type: 'error'
        });
      } else if (error.code === 'ECONNABORTED') {
        this.$message({
          showClose: true,
          message: '请求超时，请重试！',
          type: 'error'
        });
      } else {
        this.$message({
          showClose: true,
          message: JSON.stringify(error.data.error),
          type: 'error'
        });
      }
    }
  }
};