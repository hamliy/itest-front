<!--
  -- --------------------------------------------------------
  -- @file CInterfaceInfoPreview.vue
  -- @description : 接口基本信息预览页面
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-10-09 17:53:16
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-30 14:40:10
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-row>
    <el-col>
      <c-view-panel-info-card
        :title="'基本信息'">
        <div class="interface-info-preview">
          <el-form
            :label-position="'left'"
            :model="info"
            label-width="90px">
            <el-form-item label="接口名称：">
              <div>{{ info.name }}</div>
            </el-form-item>
            <el-form-item label="接口路径：">
              <div>
                <span class="interface-info-method">
                  {{ info.method }}
                </span>
                {{ info.path }}</div>
            </el-form-item>
            <el-form-item label="接口描述：">
              <div>{{ info.desc }}</div>
            </el-form-item>
          </el-form>
        </div>
      </c-view-panel-info-card>
      <c-view-panel-info-card
        :title="'请求信息'">
        <div class="interface-info-request">
          <div class="interface-info-request-title">Headers:</div>
          <el-table
            :data="info.headers"
            border
            style="width:100%;">
            <el-table-column
              prop="name"
              label="参数名称"
              width="240"/>
            <el-table-column
              prop="value"
              label="参数值"
              width="240"/>
            <el-table-column
              prop="required"
              label="是否必须"
              width="100">
              <template slot-scope="scope">
                <span>{{ scope.row.required ? '是':'否' }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="example"
              label="示例"/>
            <el-table-column
              prop="desc"
              label="备注"/>
          </el-table>
        </div>
        <div class="interface-info-request">
          <div class="interface-info-request-title">
            RequestBody-{{ info.req_body_type }}:</div>
          <el-table
            :data="info.req_body_params"
            border
            style="width:100%;">
            <el-table-column
              prop="name"
              label="参数名称"
              width="240"/>
            <el-table-column
              prop="param_type"
              label="参数类型"
              width="180"/>
            <el-table-column
              prop="required"
              label="是否必须"
              width="100">
              <template slot-scope="scope">
                <span>{{ scope.row.required ? '是':'否' }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="example"
              label="示例"/>
            <el-table-column
              prop="desc"
              label="备注"/>
          </el-table>
          <div class="interface-info-request-title">
            example:</div>
          <p>
            {{ info.req_example }}
          </p>
        </div>
      </c-view-panel-info-card>
      <c-view-panel-info-card
        :title="'响应信息'">
        <div class="interface-info-request">
          <div class="interface-info-request-title">
            RequestBody-{{ info.res_body_type }}:</div>
          <el-table
            :data="info.res_body_params"
            border
            style="width:100%;">
            <el-table-column
              prop="name"
              label="参数名称"
              width="240"/>
            <el-table-column
              prop="param_type"
              label="参数类型"
              width="180"/>
            <el-table-column
              prop="required"
              label="是否必须"
              width="100">
              <template slot-scope="scope">
                <span>{{ scope.row.required ? '是':'否' }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="default"
              label="默认值"/>
            <el-table-column
              prop="desc"
              label="备注"/>
          </el-table>
          <div class="interface-info-request-title">
            example:</div>
          <p>
            {{ info.res_example }}
          </p>
        </div>
      </c-view-panel-info-card>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: 'CInterfaceInfoPreview',
    props: {
      info: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        json: {
          msg: 'test'
        }
      };
    }
  };
</script>

<style lang="scss" >
  .interface-info-preview {
    .el-form-item {
      margin-bottom: 0;

      .el-form-item__label {
        font-size: 14px;
        font-weight: 700;
      }
    }

    .interface-info-method {
      color: rgb(16, 142, 233);
      background-color: rgb(210, 234, 251);
      padding: 4px 6px;
      margin-right: 8px;
      border-radius: 4px;
      vertical-align: middle;
    }
  }

  .interface-info-request {
    .interface-info-request-title {
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 16px;
      padding-top: 5px;
    }
  }

  .json {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #333;
    background: #f8f8f8;
  }
</style>
