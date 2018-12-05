<!--
  -- --------------------------------------------------------
  -- @file VDataImages.vue
  -- @description : 数据集-图片数据视图
  -- @author  hanli
  -- @date 2018-10-30 15:36:00
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-11-29 16:44:43
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="10">
        <c-view-header title="图片列表">
          <div style="float:right;">
            <el-button
              type="primary"
              round
              @click="handleCreateImage">新增图片</el-button>
          </div>
        </c-view-header>
        <c-data-images-list
          ref="imagesList"
          :list="list"
          :list-query="listQuery"
          :list-loading="listLoading"
          :total="total"
          @fetchData="fetchData"
          @showImage="showImage"/>
      </el-col>
      <el-col :span="14">
        <el-row>
          <el-col :span="24">
            <c-data-images-detail
              :info="selectedRow"/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <c-data-images-viewer
              :images="images"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <c-dialog-image-create
      :visible.sync="dialogCreateImageVisible"
      :image-data="imageData"
      @confirm="createImage"/>
  </div>
</template>

<script>

  import { getSelectedProjectId } from 'utils/local-storage';
  import * as cImage from 'store/constants/image';
  import mImage from 'mixins/m-image';
  import mUtil from 'mixins/m-util';
  import CDataImagesDetail from './components/CDataImagesDetail';
  import CDataImagesViewer from './components/CDataImagesViewer';
  import CDataImagesList from './components/CDataImagesList';
  import CDialogImageCreate from './components/CDialogImageCreate';

  export default {
    name: 'VDataImages',
    components: {
      CDataImagesDetail,
      CDataImagesViewer,
      CDataImagesList,
      CDialogImageCreate
    },
    mixins: [mImage, mUtil],
    data() {
      return {
        list: null,
        listLoading: true,
        listQuery: {
          page: 1,
          page_size: 20,
          image_name: undefined
        },
        total: 0,
        selectedRow: {
          _id: '',
          image_name: '',
          image_type: 0,
          tags: [],
          data: {},
          usage: ''
        },
        images: [],
        dialogCreateImageVisible: false,
        imageData: {
          image_name: '',
          image_type: 0,
          tags: '',
          desc: ''
        }
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this[cImage.SEARCH_IMAGE](this.listQuery)
        .then(res => {
          this.list = res.data.data;
          this.total = res.data.total;
          if (this.list.length > 0) {
            this.setCurrent(this.list[0]);
          }
          this.listLoading = false;
        })
        .catch(err => {
          this.$_mUtil_messageError(err);
        });
      },
      setCurrent(row) {
        this.$refs.imagesList.$refs.imagesTable.setCurrentRow(row);
      },
      showImage(row) {
        this.selectedRow = row;
        this[cImage.GET_IMAGE]({
          image_id: row._id
        })
        .then(res => {
          const imageBase = res.data;
          this.images = [`data:image/jpeg;base64,${imageBase}`];
        })
        .catch(err => {
          this.$_mUtil_messageError(err);
        });
      },
      createImage(formData) {
        const projectId = getSelectedProjectId();
        formData.append('project_id', projectId);
        this[cImage.CREATE_IMAGE](formData)
        .then(() => {
          this.dialogCreateImageVisible = false;
          this.$message({
            showClose: true,
            message: '上传成功。',
            type: 'success'
          });
        })
        .catch(err => {
          this.$_mUtil_messageError(err);
        });
      },
      handleCreateImage() {
        this.dialogCreateImageVisible = true;
        this.imageData = {
          image_name: '',
          image_type: 0,
          tags: '',
          desc: ''
        };
      }
    }

  };
</script>

<style lang="scss" scoped>
  .layout-test {
    text-align: center;
    padding: 16px;

    span {
      font-size: 18px;
    }

    ul {
      padding-top: 20px;
    }

    li {
      text-align: left;
    }

    .fixed-top {
      position: fixed;
      margin: 0 auto;
    }
  }
</style>
