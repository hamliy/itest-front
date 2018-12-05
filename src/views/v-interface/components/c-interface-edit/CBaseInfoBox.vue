<!--
  -- --------------------------------------------------------
  -- @file CBaseInfoBox.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 19:59:08
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-12-05 10:27:31
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->
<template>
  <div class="url-box">
    <el-row type="flex">
      <el-col :span="24">
        <el-input
          v-model="name"/>
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
      <el-col class="control">
        <el-button
          v-if="mode === 'edit'"
          id="saveAct"
          type="info"
          @click="save()"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CBaseInfoBox',
  data() {
    return {
      saveToken: false,
      isShowDialog: false,
      testMode: 'mock',
      testModes: ['mock', 'prod', 'dev']
    };
  },
  computed: {
    api() {
      return this.$store.state.api;
    },
    method: {
      get() {
        return this.$store.state.api.option.method;
      },
      set(value) {
        this.$store.commit('UPDATE_API_PROPS', ['option.method', value]);
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
    ...mapActions([
      'saveApi',
      'testApi'
    ]),
    save() {
      if (this.saveToken) {
        return;
      }
      this.saveToken = true;
      this.saveApi().then(() => {
        this.saveToken = false;
        if (this.$route.name === 'Create' && this.api._id) {
          this.$router.push({
            name: 'Edit',
            params: {
              groupId: this.api.group,
              apiId: this.api._id
            }
          });
        }
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
<style lang="scss">
  .url-box {
    .el-col.mode {
      width: 150px;
      text-align: right;
    }

    .el-input__inner {
      &:hover,
      &:focus {
        border-color: #bfcbd9;
      }
    }

    .el-select .el-input__inner {
      width: 104px;
    }

    .control {
      width: 134px;
      text-align: right;
    }

    .el-input-group__append {
      padding: 0;
      overflow: hidden;

      & .el-button {
        display: inline-block;
        vertical-align: middle;
        border-right: 1px solid #bfcbd9;
        margin: 0;
        border-radius: 0;
        width: 70px;
        text-align: center;
      }

      & .el-button:last-child {
        border-right: 0;
      }

      & .el-button.is-disabled {
        border-color: #bfcbd9;
        border-left: none;
        background-color: #eef1f6;
        color: #bfcbd9;
      }

      & .el-button:not(.is-disabled):hover {
        color: #324057;
      }
    }
  }

  #editAct,
  #saveAct {
    width: 91px;
  }

  #saveAct ::after {
    content: '保存';
  }

  #saveAct :hover ::after {
    content: '⌘ + S';
  }

  .el-select-dropdown__item.is-disabled.doc {
    cursor: pointer;
    color: #48576a;
  }

  .el-select-dropdown__item.is-disabled.doc:hover {
    /* background-color: #58B7FF; */
    color: #58b7ff;
  }
</style>

