<!--
  -- --------------------------------------------------------
  -- @file CDialogSimple.vue
  -- @description : 提示窗口模板
  -- @author  hanli
  -- @date 2018-09-27 09:53:55
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-09-27 11:16:59
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <transition name="dialog-fade">
    <div
      v-if="visible"
      class="dialog-simple__wrapper"
      @click.self="close">
      <div
        :style="{ width: width || '70%', minWidth: width || '860px' }"
        class="dialog-simple__ctn">
        <div class="dialog-simple__title">
          <slot name="title"></slot>
        </div>
        <i
          v-show="showClose"
          class="el-icon-close"
          @click="close"></i>
        <div class="dialog-simple__content">
          <slot></slot>
        </div>
        <div
          v-show="showFooter"
          class="dialog-simple__footer">
          <c-btn @click="$emit('confirm')">{{ btnText }}</c-btn>
        </div>
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'CDialogSimple',
    props: {
      btnText: {
        type: String,
        default: '确认'
      },

      // .sync
      visible: {
        type: Boolean,
        required: true
      },
      width: {
        type: [String, Number],
        default: ''
      },
      showClose: {
        type: Boolean,
        default: false
      },
      showFooter: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      close() {
        this.$emit('update:visible', false);
        this.$emit('close');
      }
    }
  };
</script>

<style scoped>
  .dialog-simple__wrapper {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
  }

  .dialog-simple__ctn {
    position: relative;
    padding: 50px 50px 30px;
    border-radius: 30px;
    box-shadow: 0 0 10px 1px #2b87bd;
    background: #fff;
  }

  .el-icon-close {
    position: absolute;
    top: 30px;
    right: 24px;
    font-size: 14px;
    color: #bababa;
    cursor: pointer;
  }

  .dialog-simple__footer {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }

  .dialog-simple__title {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    color: #617abc;
  }
</style>
