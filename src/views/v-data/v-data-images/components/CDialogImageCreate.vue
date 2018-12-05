<!--
  -- --------------------------------------------------------
  -- @file CDialogImageCreate.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-10-30 21:38:49
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-11-01 17:47:47
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <c-dialogue
    :visible.sync="i_visible"
    :width="'800px'"
    :btn-msg="'提交'"
    title="新增图片"
    @confirm="onConfirm"
    @close="closeDialog"
    @open="openDialog">
    <el-row>
      <el-col :span="14">
        <el-form
          ref="form"
          :model="formData"
          label-position="left"
          label-width="100px">
          <el-form-item label="图片名">
            <el-input v-model="imageData.image_name"/>
          </el-form-item>
          <el-form-item label="图片类型">
            <el-input
              v-model="formData.image_type"
              placeholder="/path"/>
          </el-form-item>
          <el-form-item label="图片标签">
            <el-input
              v-model="formData.tags"
              placeholder="图片标签"/>
          </el-form-item>
          <el-form-item label="描述">
            <el-input
              v-model="formData.desc"
              type="textarea"/>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="10">
        <el-upload
          ref="upload"
          :limit="5"
          :auto-upload="false"
          :on-exceed="uploadOverrun"
          :http-request="submitUpload"
          :on-change="changeUpload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
          class="upload-image"
          action="">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-col>
    </el-row>
  </c-dialogue>
</template>

<script>
  import mDialogSynable from 'mixins/m-dialog-synable';

  export default {
    name: 'CDialogImageCreate',
    mixins: [mDialogSynable],
    props: {
      title: {
        type: String,
        default: ''
      },
      imageData: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        formData: this.imageData,
        fileList: []
        // formRules: {
        //   image_type: [
        //     { required: true, message: '请输入名' }
        //   ],
        //   usage: [
        //     { required: true, message: '请输入用途' }
        //   ]
        // }
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      uploadOverrun() {
        this.$message({
          type: 'error',
          message: '上传文件个数超出限制!最多上传5张图片!'
        });
      },
      changeUpload(file, fileList) {
        // 预览图片
        this.fileList = fileList;
        this.$nextTick(
          () => {
            const uploadListLi =
              document.getElementsByClassName('el-upload-list')[0].children;
            for (let i = 0; i < uploadListLi.length; i++) {
              const liA = uploadListLi[i].children[0];
              const imgElement = document.createElement('img');
              imgElement.setAttribute('src', fileList[i].url);
              imgElement.setAttribute('style',
                'max-width:50%;padding-left:25%');
              if (liA.lastElementChild &&
                liA.lastElementChild.nodeName !== 'IMG') {
                liA.appendChild(imgElement);
              }
            }
          }
        );
      },
      submitUpload(content) {
        // 自定义的上传图片的方法
        // 1. 创建formData 利用AXIOS传递
        const uploadData = new FormData();
        uploadData.append('file', content.file);
        uploadData.append('test', { test: 'test' });
        // formData.append('request_data', this.imageData);
        const data = this.formData;
        Object.keys(data).forEach(key => {
          uploadData.append(key, data[key]);
        });
        this.$emit('confirm', uploadData);
      },

      onConfirm() {
        this.$refs.form.validate(
          valid => {
            if (!valid) {
              return;
            }
            this.$refs.upload.submit();
          }
        );
      },
      getFormData() {
        return this.formData;
      },
      openDialog() {
        this.formData = this.imageData;
      },

      closeDialog() {
        this.fileList = [];
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
