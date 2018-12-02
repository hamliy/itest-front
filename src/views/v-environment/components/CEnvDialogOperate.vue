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
    :title="'新增环境'"
    :width="'650px'"
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
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="环境地址" prop="ip">
        <el-input
          v-model="form.ip"
          placeholder="ip"
          class="input-with-select">
          <el-select slot="prepend" v-model="form.protocol">
            <el-option label="http" value="http"/>
            <el-option label="https" value="https"/>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item label="端口号">
        <el-input v-model="form.port"/>
      </el-form-item>
      <el-form-item label="描述">
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
    name: 'CEnvDialogOperate',
    mixins: [mDialogSynable],
    props: {
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
          protocol: [
            { required: true, message: '请选择协议' }
          ],
          ip: [
            { required: true, message: '请输入ip' }
          ]
        },
        protocols: [
          { label: 'http', value: 'http' },
          { label: 'https', value: 'https' }
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
    width: 100px;
  }

  .el-input-group__prepend {
    background-color: #fff;
  }
</style>
