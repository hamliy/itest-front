<!--
  -- --------------------------------------------------------
  -- @file CApiUseCaseInfoBox.vue
  -- @description : 用例基本信息
  -- @author hanli <lihan_li@test.com>
  -- @date 2018-12-19 14:17:35
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-24 17:41:06
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->
<template>
  <div class="url-box">
    <el-row>
      <el-col :span="18">
        <el-form label-width="80px">
          <el-form-item label="用例名称" class="required">
            <el-input
              v-model="name"/>
          </el-form-item>
          <el-row>
            <el-col :span="10">
              <el-form-item label="测试接口" prop="interfaceIds">
                <el-cascader
                  :options="options"
                  :props="interfaceProps"
                  :show-all-levels="false"
                  v-model="interfaceIds"
                  placeholder="可搜索接口"
                  filterable
                  @change="changeInterface"/>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="接口路径">
                <el-input
                  :disabled="true"
                  v-model="path"
                  placeholder="\path"
                  class="input-with-select">
                  <el-select
                    slot="prepend"
                    v-model="method"
                    placeholder="请选择">
                    <el-option label="GET" value="get"/>
                    <el-option label="POST" value="post"/>
                    <el-option label="PUT" value="put"/>
                    <el-option label="PATCH" value="patch"/>
                    <el-option label="DELETE" value="delete"/>
                  </el-select>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="用例分组" prop="groupId">
                <el-select
                  v-model="groupId"
                  placeholder="请选择">
                  <el-option
                    v-for="group in useCaseGroups"
                    v-if="group.id !== -1"
                    :key="group.id"
                    :label="group.name"
                    :value="group.id"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="用例级别" prop="level">
                <el-select
                  v-model="level"
                  placeholder="请选择">
                  <el-option
                    v-for="level in levels"
                    :key="level.value"
                    :label="level.label"
                    :value="level.value"/>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="用例详情" class="required">
            <el-input
              v-model="detail"
              type="textarea"/>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col :span="24">
            <el-button
              class="api-save api-button"
              type="primary"
              @click="save()"/>
          </el-col>
          <el-col :span="24">
            <label>环境</label>
            <el-select
              v-model="debugEnv"
              placeholder="请选择">
              <el-option
                v-for="env in allEnv"
                :key="env.id"
                :label="env.name"
                :value="env.id"/>
            </el-select>
            <el-button
              class="api-button"
              type="success"
              @click="debug()">测试</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mInterfaceUseCase from 'mixins/m-interface-use-case';
import mInterface from 'mixins/m-interface';
import * as uBehavior from 'store/constants/interface-use-case';
import * as iBehavior from 'store/constants/interface';

export default {
  name: 'CApiUseCaseInfoBox',
  mixins: [mInterfaceUseCase, mInterface],
  data() {
    return {
      saveToken: false,
      debugToken: false,
      isShowDialog: false,
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
    groupId: {
      get() {
        return this.$store.getters.apiUseCase.groupId;
      },
      set(value) {
        this.$store.commit(uBehavior.UPDATE_API_USE_CASE_PROPS,
          ['groupId', value]);
      }
    },
    interfaceIds: {
      get() {
        return [this.apiGroupObj[this.$store.getters.apiUseCase.interfaceId],
          this.$store.getters.apiUseCase.interfaceId];
      },
      set(value) {
        this.$store.commit(uBehavior.UPDATE_API_USE_CASE_PROPS,
          ['interfaceId', value[1]]);
      }
    },
    method: {
      get() {
        return this.$store.getters.apiUseCase.options.method;
      },
      set(value) {
        this.$store.commit(uBehavior.UPDATE_API_USE_CASE_PROPS,
          ['options.method', value]);
      }
    },
    name: {
      get() {
        return this.$store.getters.apiUseCase.name;
      },
      set(value) {
        this.$store.commit(uBehavior.UPDATE_API_USE_CASE_PROPS,
          ['name', value]);
      }
    },
    path: {
      get() {
        return this.$store.getters.apiUseCase.options.path;
      },
      set(value) {
        this.$store.commit(uBehavior.UPDATE_API_USE_CASE_PROPS,
          ['options.path', value]);
      }
    },
    detail: {
      get() {
        return this.$store.getters.apiUseCase.desc;
      },
      set(value) {
        this.$store.commit(uBehavior.UPDATE_API_USE_CASE_PROPS,
          ['desc', value]);
      }
    },
    level: {
      get() {
        return this.$store.getters.apiUseCase.level;
      },
      set(value) {
        this.$store.commit(uBehavior.UPDATE_API_USE_CASE_PROPS,
          ['level', value]);
      }
    },
    debugEnv: {
      get() {
        let defaultId = '';
        if (this.allEnv.length > 0) {
          defaultId = this.allEnv[0].id;
          this.allEnv.forEach(env => {
            if (env.isDefault) {
              defaultId = env.id;
            }
          });
        }
        return defaultId;
      }
    },
    useCaseGroups() {
      return this.$store.getters.apiUseCaseGroup;
    },
    // 用例分组信息
    options() {
      return this.$store.getters.apiGroup;
    },
    // 环境信息
    allEnv() {
      return this.$store.getters.allEnv;
    },
    // 接口list对象 方便选择接口
    apiGroupObj() {
      const obj = {};
      this.options.forEach(group => {
        const groupId = group.id;
        group.member.forEach(item => {
          obj[item.id] = groupId;
        });
      });
      return obj;
    }
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeydown);
  },
  mounted() {
    document.addEventListener('keydown', this.onKeydown);
  },
  methods: {
    save() {
      if (this.saveToken) {
        return;
      }
      this.saveToken = true;
      this[uBehavior.UPDATE_INTERFACE_USE_CASE]().then(() => {
        this.saveToken = false;
        this.$message.success('保存成功');
      }).catch(err => {
        this.saveToken = false;
        this.$message.error(`保存失败:${err.msg}`);
      });
    },
    debug() {
      if (this.debugToken) {
        return;
      }
      this.debugToken = true;
      this[uBehavior.EXECUTE_INTERFACE_USE_CASE]().then(() => {
        this.debugToken = false;
        this.$message.success('保存成功');
      }).catch(err => {
        this.debugToken = false;
        this.$message.error(`保存失败:${err.msg}`);
      });
    },
    onKeydown(e) {
      if (e.keyCode === 83 && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.save();
      }
    },
    changeInterface(val) {
      this[iBehavior.GET_INTERFACE_INFO]({ interfaceId: val[1] }).then(res => {
        this.path = res.data.path;
        this.method = res.data.method;
      }).catch(err => {
        this.$message.error(`获取接口信息失败:${err.msg}`);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  .url-box {
    .el-input__inner {
      &:hover,
      &:focus {
        border-color: #bfcbd9;
      }
    }

    .input-with-select .el-select {
      width: 104px;
    }

    .control {
      width: 134px;
      text-align: right;
    }
  }

  .api-button {
    float: right;
    margin: 0 20px 20px 0;
    width: 91px;
  }

  .api-save::after {
    content: '保存';
  }

  .api-save:hover::after {
    content: '⌘ + S';
  }
</style>
