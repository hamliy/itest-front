/**
 ** ********************************************************
 ** @file m-dialog-synable.js
 ** @description : 控制弹框显示统一
 ** @author hanli <lihan_li@kingdee.com>
 ** @date 2018-09-27 11:19:42
 ** @last_modified_by hanli <lihan_li@kingdee.com>
 ** @last_modified_date 2018-09-27 11:20:36
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      i_visible: this.visible
    };
  },
  watch: {
    visible(newVal) {
      this.i_visible = newVal;
    },
    i_visible(newVal) {
      this.$emit('update:visible', newVal);
    }
  }
};
