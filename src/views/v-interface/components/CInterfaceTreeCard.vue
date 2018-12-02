<!--
  -- --------------------------------------------------------
  -- @file CInterfaceTreeCard.vue
  -- @description :
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-10-09 17:21:45
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-29 22:35:59
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="box-card">
    <c-view-header title="接口列表">
      <div style="float:right;">
        <el-button
          type="primary"
          round
          @click="$emit('createGroup')">新增分组</el-button>
      </div>
    </c-view-header>
    <el-input
      v-model="filterText"
      placeholder="输入关键字进行过滤"/>
    <el-scrollbar class="live-scrollbar">
      <el-tree
        ref="interfaceTree"
        :data="treeData"
        :props="interfaceProps"
        :filter-node-method="filterNode"
        :expand-on-click-node="false"
        node-key="id"
        highlight-current
        default-expand-all
        class="interface-tree"
        @node-click="handleClick">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>
            <svg-icon
              v-if="node.level == 1"
              color="#ffd880"
              icon-class="theme"/>
            <svg-icon
              v-else-if="node.data.list"
              color="#2395f1"
              icon-class="theme"/>
            <svg-icon
              v-else
              color="#11CD6E"
              icon-class="interface"/>
            {{ node.label }}</span>
          <span class="icons-list">
            <a
              v-if="node.level == 1 ? true : false"
              @click="() => onCreateThemeSub(node)">
              <svg-icon
                color="#2395f1"
                title="新增子分类"
                icon-class="theme_add"/>
            </a>
            <a
              v-if="node.data.list? true : false"
              @click="() => onCreateInterface(node)">
              <svg-icon
                color="#11CD6E"
                title="新增接口"
                icon-class="add"/>
            </a>
            <a @click="() => onRemove(node, data)">
              <svg-icon
                color="#EB4F38"
                title="删除"
                icon-class="delete"/>
            </a>
            <a @click="() => onEdit(node, data)">
              <svg-icon
                color="#409EFF"
                title="编辑"
                icon-class="edit"/>
            </a>
          </span>
        </span>
      </el-tree>
    </el-scrollbar>
  </div>
</template>

<script>

  export default {
    name: 'CInterfaceTreeCard',
    props: {
      treeData: {
        type: Array,
        default: null
      }
    },
    data() {
      return {
        filterText: '',
        formRules: {
          name: [
            { required: true, message: '请输入接口名' }
          ]
        },
        interfaceProps: {
          children: 'list',
          label: 'name'
        }
      };
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    methods: {
      filterNode(value, data) {
        if (!value) {
          return true;
        }
        return data.name.indexOf(value) !== -1;
      },
      onCreateInterface(node) {
        this.$emit('createInterface', node);
      },
      onEdit(node, data) {
        this.$emit('edit', node, data);
      },
      onRemove(node, data) {
        this.$emit('remove', node, data);
      },
      handleClick(data, node) {
        this.$emit('nodeClick', node, data);
      }
    }
  };
</script>

