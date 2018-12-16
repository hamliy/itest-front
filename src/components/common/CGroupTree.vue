<!--
  -- --------------------------------------------------------
  -- @file CGroupTree.vue
  -- @description : 组 树组件
  -- @author  hanli
  -- @date 2018-10-09 17:21:45
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-12-03 16:01:03
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div>
    <el-input
      v-model="filterText"
      placeholder="输入关键字进行过滤"/>
    <el-scrollbar class="live-scrollbar">
      <el-tree
        ref="interfaceTree"
        :data="groupData"
        :props="prop"
        :filter-node-method="filterNode"
        :expand-on-click-node="false"
        node-key="id"
        highlight-current
        default-expand-all
        class="interface-tree"
        @node-click="handleClick">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>
            <span v-if="node.data.id !== -1">
              <svg-icon
                v-if="node.level == 1"
                color="#ffd880"
                icon-class="theme"/>
              <svg-icon
                v-else-if="node.data.member"
                color="#2395f1"
                icon-class="theme"/>
              <svg-icon
                v-else
                color="#11CD6E"
                icon-class="interface"/>
            </span>
            {{ node.label }}</span>
          <span v-if="node.data.id !== -1" class="icons-list">
            <a
              v-if="node.data.member? true : false"
              @click="() => onCreate(node)">
              <svg-icon
                color="#11CD6E"
                title="新增"
                icon-class="add"/>
            </a>
            <a
              v-if="node.data.member? true : false"
              @click="() => onEdit(node, data)">
              <svg-icon
                color="#409EFF"
                title="编辑"
                icon-class="edit"/>
            </a>
            <a @click="() => onRemove(node, data)">
              <svg-icon
                color="#EB4F38"
                title="删除"
                icon-class="delete"/>
            </a>
          </span>
        </span>
      </el-tree>
    </el-scrollbar>
  </div>
</template>

<script>

  export default {
    name: 'CGroupTree',
    props: {
      groupData: {
        type: Array,
        default: null
      },
      prop: {
        type: Object,
        default: () => Object.assign({},
          {
            children: 'member',
            label: 'name'
          })
      },
      theme: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        filterText: ''
      };
    },
    watch: {
      filterText(val) {
        this.$refs.interfaceTree.filter(val);
      }
    },
    methods: {
      filterNode(value, data) {
        if (!value) {
          return true;
        }
        return data.name.indexOf(value) !== -1;
      },
      onCreate(node) {
        this.$emit('create', node);
      },
      onEdit(node, data) {
        this.$emit('editGroup', node, data);
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

