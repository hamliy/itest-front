<!--
  -- --------------------------------------------------------
  -- @file CContent.vue
  -- @description :
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-10-08 10:52:38
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-10 16:35:51
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<!-- 中间主要布局 -->
<template>
  <div class="layout-content">
    <div :class="classObj" class="container">
      <div class="container-left">
        <slot name="left"></slot>
      </div>
      <div class="container-right">
        <div class="content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LContent',
  computed: {
    classObj() {
      return {
        hideSidebar: !this.$store.getters.sidebarOpened
      };
    }
  }
};

</script>

<style lang="scss">
  //sidebar
  $menuBg: #304156;
  $subMenuBg: #1f2d3d;
  $menuHover: #001528;

  .layout-content {
    position: absolute;
    width: 100%;
    background-color: #fafafa;
    top: 50px;
    height: auto;

    .hideSidebar {
      .container-left {
        width: 36px !important;
      }

      .el-submenu {
        overflow: hidden;

        & > .el-submenu__title {
          padding-left: 10px !important;

          .el-submenu__icon-arrow {
            display: none;
          }
        }
      }

      .submenu-title-noDropdown {
        padding-left: 10px !important;
        position: relative;

        .el-tooltip {
          padding: 0 10px !important;
        }
      }

      .el-menu--collapse {
        .el-submenu {
          & > .el-submenu__title {
            & > span {
              height: 0;
              width: 0;
              overflow: hidden;
              visibility: hidden;
              display: inline-block;
            }
          }
        }
      }
    }

    .el-menu--collapse .el-menu .el-submenu {
      min-width: 180px !important;
    }

    .container-left .el-submenu .el-menu-item {
      min-width: 180px !important;
      // background-color: $subMenuBg !important;

      &:hover {
        background-color: $menuHover !important;
      }
    }

    .container {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;

      .container-right {
        flex: 1;
        width: 100%;
        background-color: #eceef1;
        position: relative;

        .content {
          overflow-y: auto;
          width: 100%;
          position: absolute;
          padding: 10px 20px;
          top: 0;
          bottom: 0;
          left: 0;
        }
      }

      .container-left {
        transition: width 0.28s;
        width: 180px;
        height: calc(100vh - 50px);
        //reset element-ui css
        .horizontal-collapse-transition {
          transition: 0s width ease-in-out, 0s padding-left ease-in-out,
            0s padding-right ease-in-out;
        }

        .scrollbar-wrapper {
          height: calc(100% + 15px);

          .el-scrollbar__view {
            height: 100%;
          }
        }

        .is-horizontal {
          display: none;
        }

        a {
          display: inline-block;
          width: 100%;
          overflow: hidden;
        }

        .svg-icon {
          margin-right: 16px;
        }

        .el-menu {
          border: none;
          height: 100%;
          width: 100% !important;
        }

        .nest-menu .el-submenu > .el-submenu__title {
          min-width: 180px !important;
          background-color: $subMenuBg !important;

          &:hover {
            background-color: $menuHover !important;
          }
        }
      }
    }
  }
</style>
