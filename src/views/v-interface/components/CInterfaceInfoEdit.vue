<!--
  -- --------------------------------------------------------
  -- @file CInterfaceInfoEdit.vue
  -- @description : 接口基本信息编辑页面
  -- @author hanli <lihan_li@kingdee.com>
  -- @date 2018-10-09 17:53:16
  -- @last_modified_by hanli <lihan_li@kingdee.com>
  -- @last_modified_date 2018-10-30 13:43:29
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <el-row>
    <el-col>
      <c-view-panel-info-card
        :title="'基本信息设置'">
        <div class="interface-info-edit">
          <el-button
            type="primary"
            size="small"
            round
            @click="handleBasicSave">更新数据</el-button>
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
        <el-tabs type="border-card">
          <el-tab-pane label="Headers">
            <el-row>
              <el-col>
                <div class="interface-info-request-button">
                  <el-button
                    type="primary"
                    size="small"
                    round
                    @click="handleNewHeaderLine">新增一行</el-button>
                  <el-button
                    type="success"
                    size="small"
                    round
                    @click="handleHeaderSave">保存</el-button>
                </div>
              </el-col>
              <el-col>
                <c-table-expand
                  :data-set="info.headers"
                  :columns ="headers_columns"/>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="Request">
            <div class="interface-info-request">
              <el-row>
                <el-col>
                  <div class="interface-info-request-button">
                    <el-button
                      type="primary"
                      size="small"
                      round
                      @click="handleNewRequestLine">新增一行</el-button>
                    <el-button
                      type="success"
                      size="small"
                      round
                      @click="handleRequestSave">保存</el-button>
                  </div>
                </el-col>
                <el-col>
                  <div class="interface-info-request-label">请求类型：</div>
                  <el-radio-group
                    v-model="info.req_body_type"
                    class="interface-info-request-label">
                    <el-radio label="form-data"/>
                    <el-radio label="x-www-form-urlencoded"/>
                    <el-radio label="raw"/>
                  </el-radio-group>
                </el-col>
                <el-col>
                  <c-table-expand
                    :data-set="info.req_body_params"
                    :columns ="request_columns"/>
                </el-col>
                <el-col>
                  <div class="interface-info-request-label">请求示例：</div>
                  <el-input
                    :rows="2"
                    v-model="info.req_example"
                    type="textarea"
                    class="interface-info-example"
                    placeholder="请求示例"/>
                </el-col>
              </el-row>
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
      sourceInfo: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        info: {
        },
        formRules: {
          name: [
            { required: true, message: '请输入接口名' }
          ],
          path: [
            { required: true, message: '请输入接口路径' }
          ]
        },
        headers_columns: [
          {
            prop: 'name',
            label: '参数名称',
            width: '280',
            edit: true,
            field: 'input'
          },
          {
            prop: 'value',
            label: '参数值',
            width: '180',
            edit: true,
            field: 'input'
          },
          {
            prop: 'required',
            label: '是否必须',
            width: '120',
            edit: true,
            field: 'switch'
          },
          {
            prop: 'example',
            label: '示例',
            edit: true,
            field: 'input'
          },
          {
            prop: 'desc',
            label: '备注',
            edit: true,
            field: 'input'
          }
        ],
        request_columns: [
          {
            prop: 'name',
            label: '参数名称',
            width: '280',
            edit: true,
            field: 'input'
          },
          {
            prop: 'param_type',
            label: '参数类型',
            width: '180',
            edit: true,
            field: 'select',
            options: [{
              value: 'text',
              label: '文本'
            }, {
              value: 'file',
              label: '文件'
            }]
          },
          {
            prop: 'required',
            label: '是否必须',
            width: '120',
            edit: true,
            field: 'switch'
          },
          {
            prop: 'example',
            label: '示例',
            edit: true,
            field: 'input'
          },
          {
            prop: 'desc',
            label: '备注',
            edit: true,
            field: 'input'
          }
        ],
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
    },
    watch: {
      sourceInfo() {
        this.info = Object.assign({}, this.sourceInfo);
      }
    },
    created() {
      console.log(this.sourceInfo);
      this.info = Object.assign({}, this.sourceInfo);
      console.log(this.info);
    },
    methods: {
      handleBasicSave() {
        this.$emit('updateInfo', 'basicInfo', this.info);
      },
      handleNewHeaderLine() {
        this.info.headers.push({
          name: '',
          value: '',
          required: false,
          example: '',
          desc: ''
        });
      },
      handleHeaderSave() {
        this.$emit('updateInfo', 'headers', this.info);
      },
      handleNewRequestLine() {
        this.info.req_body_params.push({
          name: '',
          param_type: '',
          required: false,
          example: '',
          desc: ''
        });
      },
      handleRequestSave() {
        this.$emit('updateInfo', 'request', this.info);
      },
      getEditInfo() {
        const editInfo = Object.assign({}, this.sourceInfo);
        if (Object.keys(editInfo).length !== 0) {
          console.log(editInfo);
          editInfo.req_body_params.push({
            name: '',
            param_type: '',
            required: false,
            example: '',
            desc: ''
          });
          editInfo.res_body_params.push({
            name: '',
            param_type: '',
            required: false,
            default: '',
            desc: ''
          });
          editInfo.headers.push({
            name: '',
            value: '',
            required: false,
            example: '',
            desc: ''
          });
        }

        return editInfo;
      }
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

  .interface-info-request-button {
    float: right;
    margin: 10px 0;
  }

  .interface-info-request-label {
    float: left;
    padding: 10px;
  }

  .json {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #333;
    background: #f8f8f8;
  }
</style>
