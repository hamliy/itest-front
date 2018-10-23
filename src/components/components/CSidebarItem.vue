<!--
  -- --------------------------------------------------------
  -- @file CSidebarItems.vue
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-17 10:39:38
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-09-26 09:52:31
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div v-if="!item.hidden&&item.children" class="menu-wrapper">

    <template
      v-if="hasOneShowingChild(item.children,item)
        && (!onlyOneChild.children||onlyOneChild.noShowingChildren)
      &&!item.alwaysShow">
      <a
        :href="onlyOneChild.path"
        target="_blank"
        @click="clickLink(onlyOneChild.path,$event)">
        <el-tooltip
          :disabled="$store.getters.sidebarOpened"
          :content="onlyOneChild.meta.title"
          placement="right">
          <el-menu-item
            :index="resolvePath(onlyOneChild.path)"
            :class="{'submenu-title-noDropdown':!isNest}">
            <c-sidebar-item-node
              v-if="onlyOneChild.meta"
              :icon="onlyOneChild.meta.icon||item.meta.icon"
              :title="onlyOneChild.meta.title"/>
          </el-menu-item>
        </el-tooltip>
      </a>
    </template>

    <el-submenu v-else :index="item.name||item.path">
      <template slot="title">
        <c-sidebar-item-node
          v-if="item.meta"
          :icon="item.meta.icon"
          :title="item.meta.title"/>
      </template>

      <template v-for="child in item.children" v-if="!child.hidden">
        <c-sidebar-item
          v-if="child.children&&child.children.length>0"
          :is-nest="true"
          :item="child"
          :key="child.path"
          :base-path="resolvePath(child.path)"
          class="nest-menu"/>

        <a
          v-else
          :href="child.path"
          :key="child.name"
          target="_blank"
          @click="clickLink(child.path,$event)">
          <el-menu-item :index="resolvePath(child.path)">
            <c-sidebar-item-node
              v-if="child.meta"
              :icon="child.meta.icon"
              :title="child.meta.title"/>
          </el-menu-item>
        </a>
      </template>
    </el-submenu>

  </div>
</template>

<script>
import path from 'path';
import { validateURL } from 'utils/validate';
import CSidebarItemNode from './CSidebarItemNode';

export default {
  name: 'CSidebarItem',
  components: { CSidebarItemNode },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      onlyOneChild: null
    };
  },
  methods: {
    hasOneShowingChild(children, parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        }
          // Temp set(will be used if only has one showing child)
        this.onlyOneChild = item;
        return true;
      });
      // When there is only one child router,
      // the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }
      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    },
    isExternalLink(routePath) {
      return validateURL(routePath);
    },
    clickLink(routePath, e) {
      if (!this.isExternalLink(routePath)) {
        e.preventDefault();
        const path1 = this.resolvePath(routePath);
        this.$router.push(path1);
      }
    }
  }
};
</script>
