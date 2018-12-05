<!--
  -- --------------------------------------------------------
  -- @file CParamsItemSet.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 21:26:22
  -- @last_modified_by  hanli
  -- @last_modified_date 2018-12-05 10:27:40
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div
    :class="name"
    class="param set">
    <el-row type="flex" class="row-bg">
      <el-col class="key">
        <el-input
          v-model="param.key"
          placeholder="key"
          @change="lazyUpdate"/>
      </el-col>
      <el-col class="config">
        <el-cascader
          v-if="name !== 'headers'"
          :options="tpyeList"
          v-model="apiType"
          popper-class="type-cascader"
          @change="changeParamType"/>
        <el-checkbox v-model="param.required" @change="update">必填</el-checkbox>
      </el-col>
      <el-col class="comment">
        <el-input
          v-model="param.comment"
          placeholder="备注"
          @change="lazyUpdate"/>
      </el-col>
      <el-col class="example">
        <el-input
          v-model="example"
          placeholder="example"
          @change="lazyUpdate"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { debounce } from 'utils/debounce';

export default {
  name: 'CParamsItemSet',
  props: {
    param: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      default: '',
      required: false
    }
  },
  data() {
    return {
      selectedOptions: [],
      lazyUpdate: debounce(this.update, 300)
    };
  },
  computed: {
    example: {
      get() {
        return typeof this.param.example === 'string' ?
          this.param.example : JSON.stringify(this.param.example);
      },
      set(value) {
        if (this.param.type === 'string') {
          this.param.example = value;
        } else {
          try {
            this.param.example = JSON.parse(value);
          } catch (err) {
            this.param.example = value;
          }
        }
      }
    },
    apiType() {
      const type = [this.param.type];
      if (this.param.type === 'array') {
        type.push(this.param.items.type);
      }
      return type;
    },
    tpyeList() {
      return this.getTypeList();
    }
  },
  methods: {
    lazy(fn) {
      return debounce(fn, 300);
    },
    changeParamType(val) {
      this.$set(this.param, 'type', val[0]);
      if (val[0] === 'object') {
        if (!this.param.params) {
          this.$set(this.param, 'params', [{
            key: null,
            type: 'string',
            required: true
          }]);
        }
        this.$emit('buildObject', this.param);
      } else if (val[0] === 'array') {
        this.setArrayType(val[1]);
      }
      this.update();
    },
    setArrayType(type) {
      this.$set(this.param, 'items', {
        type
      });
      if (type === 'object' && !this.param.items.params) {
        this.$set(this.param.items, 'params', [{
          key: null,
          type: 'string',
          required: true
        }]);
        this.$emit('buildObject', this.param);
      }
    },
    update() {
      this.$emit('change', this.param);
    },
    getDefaultType() {
      const type = [this.param.type];
      if (this.param.type === 'array') {
        type.push(this.param.items.type);
      }
      return type;
    },
    getTypeList() {
      const types = [];
      if (this.name === 'query' || this.name === 'path') {
        types.push('String', 'Number', 'Boolean');
      } else {
        types.push('String', 'Number', 'Boolean', 'Object', 'Array');
        if (this.name === 'body') {
          types.push('File');
        }
      }
      return types.map(t => {
        const type = {
          value: t.toLowerCase(),
          label: t
        };
        if (t === 'Array') {
          type.children = ['String', 'Number', 'Boolean', 'Object'].map(b => ({
            value: b.toLowerCase(),
            label: b
          }));
        }
        return type;
      });
    }
  }
};
</script>
<style lang="scss">
  .type-cascader .el-cascader-menu {
    height: auto;
  }

  .param.set .el-checkbox {
    height: 36px;
    line-height: 35px;
  }

  .params-box {
    .config {
      min-width: 220px;
      max-width: 220px;
    }

    .headers .config {
      min-width: 80px;
      max-width: 80px;
      text-align: center;
    }

    .example {
      min-width: 145px;
      max-width: 220px;
    }

    .comment {
      margin-right: 20px;
      min-width: 145px;
      max-width: 240px;
    }

    .key {
      min-width: 100px;
    }

    .el-input__inner {
      border: none;
      border-radius: 0;
      border-bottom: 1px solid #eff2f7;
      font-family: monospace;
    }

    .el-input-number {
      width: 100%;
    }

    .el-select {
      margin-right: 20px;
    }
  }
</style>
