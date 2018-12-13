<!--
  -- --------------------------------------------------------
  -- @file CSettingField.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 19:58:29
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-13 14:49:57
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div
    :class="{ fullscreen: fullscreen, expland: expland }"
    class="setting-field">
    <div class="hd">
      {{ title }}
      <slot name="header"></slot>
      <el-button
        size="small"
        @click.native="switchFullscreen">
        {{ fullscreen ? 'Esc' : '全屏' }}
      </el-button>
      <el-button
        size="small"
        @click.native="switchExpland">
        <i
          v-if="expland"
          class="el-icon-minus"></i>
        <i v-else class="el-icon-plus"></i>
      </el-button>
    </div>
    <div class="bd">
      <slot :fullscreen="fullscreen"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSettingField',
  props: {
    title: {
      type: String,
      required: true
    },
    isExpland: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      fullscreen: false,
      expland: this.isExpland
    };
  },
  methods: {
    keyupBehavior(e) {
      // 按Esc键退出全屏
      if (this.fullscreen && e.keyCode === 27) {
        this.fullscreen = false;
      }
    },
    switchExpland() {
      this.expland = !this.expland;
    },
    switchFullscreen() {
      this.fullscreen = !this.fullscreen;
      if (this.fullscreen) {
        document.addEventListener('keyup', this.keyupBehavior);
      } else {
        document.removeEventListener('keyup', this.keyupBehavior);
      }
    }
  }
};
</script>
<style lang="scss">
  .setting-field {
    position: relative;
    margin-top: 20px;
    border: 1px solid #d3dce6;
    border-radius: 5px;
    background-color: #fff;

    & > .bd {
      position: relative;
      height: 0;
      overflow: hidden;
      margin-bottom: -1px;
      transition: height 0.3s ease;
    }

    & > .hd {
      text-align: left;
      border-bottom: 1px solid #d3dce6;
      line-height: 40px;
      font-size: 16px;
      color: #333;
      padding: 0 10px;

      button {
        float: right;
        margin: 8px 10px 0 0;
      }
    }

    &.fullscreen {
      margin-top: 0;
      border-radius: 0;
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 999;

      & > .hd {
        padding: 0 10px;
      }

      & > .bd {
        position: absolute;
        height: auto;
        overflow-y: auto;
        top: 42px;
        bottom: 0;
        left: 0;
        right: 0;

        & > div {
          height: 100%;
          position: relative;
        }
      }
    }

    &.expland {
      & > .bd {
        height: auto;
        margin-bottom: 0;
      }
    }
  }
</style>
