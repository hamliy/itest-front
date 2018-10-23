<!--
  -- --------------------------------------------------------
  -- @file CDialogue.vue
  -- @description : 操作窗口模板
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-27 11:16:29
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-09 15:23:44
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-dialog
    :title="title"
    :show-close="showClose"
    :visible.sync="i_visible"
    :modal="modal"
    :width="width"
    @close="$emit('close')"
    @open="$emit('open')">
    <slot></slot>
    <div slot="footer" class="dialog-footer">
      <el-button
        class="sub-btn"
        @click="$emit('confirm')">
        {{ btnMsg }}
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
  import mDialogSynable from 'mixins/m-dialog-synable';

  export default {
    name: 'CDialogue',
    mixins: [mDialogSynable],
    props: {
      title: {
        type: String,
        required: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      btnMsg: {
        type: String,
        default: '确定'
      },
      modal: {
        type: Boolean,
        default: true
      },
      width: {
        type: String,
        default: '680px'
      }
    }
  };
</script>

<style scoped>
  .dialog-footer {
    text-align: center;
  }

  .sub-btn {
    width: 220px;
    color: #fff;
    background-image: linear-gradient(-180deg, #0d68d3 3%, #0063ff 100%);
    border-radius: 30px;
  }

  .sub-btn:hover,
  .sub-btn:active,
  .sub-btn:focus {
    background: #909cd2;
    color: #fff;
  }
</style>
