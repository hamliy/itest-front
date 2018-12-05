<!--
  -- --------------------------------------------------------
  -- @file CDataImagesDetail.vue
  -- @description : 图片详情页面
  -- @author  hanli
  -- @date 2018-10-30 17:41:06
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-10-30 19:44:39
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <c-view-panel-info-card
    :title="'图片信息'">
    <el-button
      v-if="!isEdit"
      type="success"
      size="small"
      round
      @click="handleEditInfo">编辑</el-button>
    <el-button
      v-if="isEdit"
      type="success"
      size="small"
      round
      @click="handleCancelInfo">取消</el-button>
    <el-button
      v-if="isEdit"
      type="success"
      size="small"
      round
      @click="handleSaveInfo">保存</el-button>
    <div class="data-images-detail">
      <el-form
        :label-position="'left'"
        :model="info"
        :inline="true"
        label-width="90px">
        <el-form-item label="图片名：">
          <el-input
            v-if="isEdit"
            v-model="info.image_name"/>
          <div v-else>{{ info.image_name }}</div>
        </el-form-item>
        <el-form-item label="类型：">
          <el-input
            v-if="isEdit"
            v-model="info.image_type"/>
          <div v-else>{{ info.image_type }}</div>
        </el-form-item>
        <el-form-item label="标签">
          <el-input
            v-if="isEdit"
            v-model="info.tags"/>
          <div v-else>{{ info.tags }}</div>
        </el-form-item>
        <el-form-item label="用途">
          <el-input
            v-if="isEdit"
            v-model="info.usage"/>
          <div v-else>{{ info.usage }}</div>
        </el-form-item>
        <el-form-item label="数据：">
          <el-input
            v-if="isEdit"
            v-model="info.data"/>
          <div>{{ info.data }}</div>
        </el-form-item>
        <el-form-item label="描述：">
          <el-input
            v-if="isEdit"
            v-model="info.desc"/>
          <div>{{ info.desc }}</div>
        </el-form-item>
      </el-form>
    </div>
  </c-view-panel-info-card>
</template>

<script>
  export default {
    name: 'CDataImagesDetail',
    props: {
      info: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        isEdit: false
      };
    },
    methods: {
      handleEditInfo() {
        this.isEdit = true;
      },
      handleCancelInfo() {
        this.isEdit = false;
      },
      handleSaveInfo() {
        this.$emit('updateInfo');
      }
    }
  };
</script>
