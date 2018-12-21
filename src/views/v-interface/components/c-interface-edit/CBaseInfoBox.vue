<!--
  -- --------------------------------------------------------
  -- @file CBaseInfoBox.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 19:59:08
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-19 14:10:28
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->
<template>
  <div class="url-box">
    <el-row>
      <el-col :span="20">
        <el-form label-width="80px">
          <el-form-item label="接口名称" class="required">
            <el-input
              v-model="name"/>
          </el-form-item>
          <el-form-item label="接口信息">
            <el-input
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
        </el-form>
      </el-col>
      <el-col :span="4">
        <el-button
          class="api-save"
          type="primary"
          @click="save()"/>
      </el-col>
    </el-row>
    <!-- <el-row type="flex">
      <el-col :span="12">
        <el-input
          v-model="name"
          label="接口名："/>
        <el-input
          v-model="path"
          placeholder="/path">
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
      </el-col>
      <el-col span="12" class="control">
        <el-button
          class="api-save"
          type="primary"
          @click="save()"/>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import mInterface from 'mixins/m-interface';
import * as iBehavior from 'store/constants/interface';

export default {
  name: 'CBaseInfoBox',
  mixins: [mInterface],
  data() {
    return {
      saveToken: false,
      isShowDialog: false
    };
  },
  computed: {
    api() {
      return this.$store.getters.api;
    },
    method: {
      get() {
        return this.$store.getters.api.method;
      },
      set(value) {
        this.$store.commit(iBehavior.UPDATE_API_PROPS, ['method', value]);
      }
    },
    name: {
      get() {
        return this.$store.getters.api.name;
      },
      set(value) {
        this.$store.commit(iBehavior.UPDATE_API_PROPS, ['name', value]);
      }
    },
    path: {
      get() {
        return this.$store.getters.api.path;
      },
      set(value) {
        this.$store.commit(iBehavior.UPDATE_API_PROPS, ['path', value]);
      }
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
      this[iBehavior.UPDATE_INTERFACE]().then(() => {
        this.saveToken = false;
        this.$message.success('保存成功');
      }).catch(err => {
        this.saveToken = false;
        this.$message.error(`保存失败:${err.msg}`);
      });
    },
    onKeydown(e) {
      if (e.keyCode === 83 && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.save();
      }
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

    // .el-input-group__append {
    //   padding: 0;
    //   overflow: hidden;

    //   & .el-button {
    //     display: inline-block;
    //     vertical-align: middle;
    //     border-right: 1px solid #bfcbd9;
    //     margin: 0;
    //     border-radius: 0;
    //     width: 70px;
    //     text-align: center;
    //   }

    //   & .el-button:last-child {
    //     border-right: 0;
    //   }

    //   & .el-button.is-disabled {
    //     border-color: #bfcbd9;
    //     border-left: none;
    //     background-color: #eef1f6;
    //     color: #bfcbd9;
    //   }

    //   & .el-button:not(.is-disabled):hover {
    //     color: #324057;
    //   }
    // }
  }

  .api-save {
    float: right;
    margin-right: 20px;
    width: 91px;
  }

  .api-save::after {
    content: '保存';
  }

  .api-save:hover::after {
    content: '⌘ + S';
  }
</style>

