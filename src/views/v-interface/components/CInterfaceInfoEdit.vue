<!--
  -- --------------------------------------------------------
  -- @file CInterfaceInfoEdit.vue
  -- @description : 接口基本信息编辑页面
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-10-09 17:53:16
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-26 18:02:33
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-row>
    <el-col>
      <c-view-panel-info-card
        :title="'基本信息设置'">
        <div class="interface-info-edit">
          <el-form
            :label-position="'left'"
            :model="info"
            :rules="formRules"
            label-width="120px">
            <el-form-item label="接口名称：" prop="name">
              <el-input v-model="info.name"/>
            </el-form-item>
            <el-form-item label="接口路径：" prop="path">
              <el-input
                v-model="info.path"
                placeholder="/path"
                class="input-with-select">
                <el-select
                  slot="prepend"
                  v-model="info.method"
                  placeholder="请选择">
                  <el-option
                    v-for="method in methods"
                    :key="method.value"
                    :label="method.label"
                    :value="method.value"/>
                </el-select>
              </el-input>
            </el-form-item>
            <el-form-item label="接口描述：">
              <el-input
                v-model="info.desc"
                type="textarea"/>
            </el-form-item>
          </el-form>
        </div>
      </c-view-panel-info-card>
      <c-view-panel-info-card
        :title="'请求信息设置'">
        <el-tabs type="card">
          <el-tab-pane label="headers">
            <el-button type="primary">新增参数</el-button>
            <div v-for="(name, index) in info.headers" :key="index">
              <input v-model="name.text" type="text">
            </div>
          </el-tab-pane>
          <el-tab-pane label="request">
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
                  width="180"/>
                <el-table-column
                  prop="param_type"
                  label="参数类型"
                  width="180"/>
                <el-table-column
                  prop="required"
                  label="是否必须"/>
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
                {{ json }}
              </p>
            </div>
          </el-tab-pane>
        </el-tabs>
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
              width="180"/>
            <el-table-column
              prop="param_type"
              label="参数类型"
              width="180"/>
            <el-table-column
              prop="required"
              label="是否必须"/>
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
            {{ json }}
          </p>
        </div>
      </c-view-panel-info-card>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: 'CInterfaceInfoEdit',
    props: {
      info: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        formRules: {
          name: [
            { required: true, message: '请输入接口名' }
          ],
          path: [
            { required: true, message: '请输入接口路径' }
          ]
        },
        json: {
          msg: 'test'
        },
        methods: [
          { label: 'GET', value: 'GET' },
          { label: 'POST', value: 'POST' },
          { label: 'PUT', value: 'PUT' },
          { label: 'DELETE', value: 'DELETE' },
          { label: 'HEAD', value: 'HEAD' },
          { label: 'OPTION', value: 'OPTION' },
          { label: 'PATCH', value: 'PATCH' }
        ]
      };
    }
  };
</script>

<style lang="scss" >
  .interface-info-edit {
    .el-form-item {
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
