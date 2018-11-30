<!--
  -- --------------------------------------------------------
  -- @file CDialogPorjectCreate.vue
  -- @description :
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-27 10:35:43
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-11-30 16:52:28
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <c-dialogue
    :visible.sync="i_visible"
    :title="title"
    :width="'450px'"
    :btn-msg="title === '查看项目' ? '确认' :'提交'"
    @confirm="onConfirm"
    @close="closeDialog"
    @open="openDialog">
    <el-form
      ref="form"
      :model="form"
      :rules="formRules"
      :disabled="title === '查看项目'"
      label-position="left"
      label-width="100px">
      <el-form-item label="项目名" prop="name">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="项目类型">
        <el-select v-model="form.projectType" placeholder="请选择类型">
          <el-option label="WEB" value="web"/>
          <el-option label="APP" value="app"/>
          <el-option label="其他" value="other"/>
        </el-select>
      </el-form-item>
      <el-form-item label="项目版本" prop="version">
        <el-input v-model="form.version"/>
      </el-form-item>
      <el-form-item label="项目描述">
        <el-input
          v-model="form.desc"
          type="textarea"/>
      </el-form-item>
    </el-form>
  </c-dialogue>
</template>

<script>
  import mDialogSynable from 'mixins/m-dialog-synable';

  export default {
    name: 'CProjectDialogOperate',
    mixins: [mDialogSynable],
    props: {
      title: {
        type: String,
        default: ''
      },
      formData: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        form: this.formData,
        formRules: {
          name: [
            { required: true, message: '请输入项目名' }
          ],
          version: [
            { required: true, message: '请输入项目版本' }
          ]
        }
      };
    },
    methods: {
      onConfirm() {
        this.$refs.form.validate(
          valid => {
            if (!valid) {
              return;
            }
            this.$emit('confirm', this.getFormData());
          }
        );
      },
      getFormData() {
        return this.form;
      },
      openDialog() {
        this.form = this.formData;
      },

      closeDialog() {
        this.$refs.form.resetFields();
      }
    }
  };
</script>

