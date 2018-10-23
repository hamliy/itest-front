<!--
  -- --------------------------------------------------------
  -- @file CEnvDialogOperate.vue
  -- @description :
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-09-29 17:16:34
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-09-29 17:36:34
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
      label-position="left"
      label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="url" prop="value">
        <el-input v-model="form.value"/>
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          v-model="form.description"
          type="textarea"/>
      </el-form-item>
    </el-form>
  </c-dialogue>
</template>

<script>
  import mDialogSynable from 'mixins/m-dialog-synable';

  export default {
    name: 'CEnvDialogOperate',
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
            { required: true, message: '请输入名称' }
          ],
          value: [
            { required: true, message: '请输入url' }
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
