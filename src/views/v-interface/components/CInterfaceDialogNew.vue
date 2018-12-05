<!--
  -- --------------------------------------------------------
  -- @file CInterfaceDialogNew.vue
  -- @description : 新增接口窗口
  -- @author  hanli
  -- @date 2018-10-09 14:55:03
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-12-03 13:59:30
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <c-dialogue
    :visible.sync="i_visible"
    :title="title"
    :width="'550px'"
    :btn-msg="'提交'"
    @confirm="onConfirm"
    @close="closeDialog"
    @open="openDialog">
    <el-form
      ref="form"
      :model="form"
      :rules="formRules"
      label-position="left"
      label-width="100px">
      <el-form-item label="接口分组">
        <el-select
          v-model="form.groupId"
          placeholder="请选择">
          <el-option
            v-for="group in groups"
            :key="group.id"
            :label="group.name"
            :value="group.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="接口名称" prop="name">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="接口路径" prop="path">
        <el-input
          v-model="form.path"
          placeholder="/path"
          class="input-with-select">
          <el-select
            slot="prepend"
            v-model="form.method"
            placeholder="请选择">
            <el-option
              v-for="method in methods"
              :key="method.value"
              :label="method.label"
              :value="method.value"/>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item label="接口描述">
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
    name: 'CInterfaceDialogNew',
    mixins: [mDialogSynable],
    props: {
      title: {
        type: String,
        default: ''
      },
      formData: {
        type: Object,
        default: null
      },
      groups: {
        type: Array,
        default: null
      }
    },
    data() {
      return {
        form: this.formData,
        formRules: {
          name: [
            { required: true, message: '请输入接口名' }
          ],
          path: [
            { required: true, message: '请输入接口路径' }
          ]
        },
        methods: [
          { label: 'GET', value: 'GET' },
          { label: 'POST', value: 'POST' }
          // { label: 'PUT', value: 'PUT' },
          // { label: 'DELETE', value: 'DELETE' },
          // { label: 'HEAD', value: 'HEAD' },
          // { label: 'OPTION', value: 'OPTION' },
          // { label: 'PATCH', value: 'PATCH' }
        ]
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

<style lang="scss" scope>
  .el-select .el-input {
    width: 130px;
  }

  .el-input-group__prepend {
    background-color: #fff;
  }
</style>
