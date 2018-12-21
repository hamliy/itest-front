<!--
  -- --------------------------------------------------------
  -- @file CApiUseCaseDialog.vue
  -- @description : 新增组窗口
  -- @author  hanli
  -- @date 2018-10-09 14:55:03
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-19 09:33:40
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
      <el-form-item label="测试接口" prop="interfaceIds">
        <el-cascader
          :options="options"
          :props="interfaceProps"
          :show-all-levels="false"
          v-model="form.interfaceIds"
          placeholder="可搜索接口"
          filterable/>
      </el-form-item>
      <el-form-item label="用例分组" prop="groupId">
        <el-select
          v-model="form.groupId"
          placeholder="请选择">
          <el-option
            v-for="group in useCaseGroups"
            v-if="group.id !== -1"
            :key="group.id"
            :label="group.name"
            :value="group.id"/>
        </el-select>
      </el-form-item>
      <el-form-item label="用例级别" prop="level">
        <el-select
          v-model="form.level"
          placeholder="请选择">
          <el-option
            v-for="level in levels"
            :key="level.value"
            :label="level.label"
            :value="level.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="用例名称" prop="name">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="用例描述">
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
    name: 'CApiUseCaseDialog',
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
            { required: true, message: '请输入用例名' }
          ],
          groupId: [
            { required: true, message: '请选择用例分组' }
          ],
          interfaceIds: [
            { required: true, message: '请选择测试接口' }
          ],
          level: [
            { required: true, message: '请选择用例级别' }
          ]
        },
        levels: [
          { label: '未设置', value: 0 },
          { label: '一级', value: 1 },
          { label: '二级', value: 2 },
          { label: '三级', value: 3 }
        ],
        interfaceProps: {
          value: 'id',
          label: 'name',
          children: 'member'
        }
      };
    },
    computed: {
      useCaseGroups() {
        return this.$store.getters.apiUseCaseGroup;
      },
      options() {
        return this.$store.getters.apiGroup;
      }

    },
    methods: {
      getInterfaceId() {
        if (this.form.interfaceIds.length === 2) {
          return this.form.interfaceIds[1];
        }
        return '';
      },
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
        this.form.interfaceId = this.getInterfaceId();
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

<style lang="scss" scoped>
  .el-select,
  .el-cascader {
    display: block;
  }

  .el-input-group__prepend {
    background-color: #fff;
  }
</style>
