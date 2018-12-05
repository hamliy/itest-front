<!--
  -- --------------------------------------------------------
  -- @file CSimditor.vue
  -- @description :
  -- @author  hanli
  -- @date 2018-12-04 20:00:42
  -- @last_modified_by hanli <lihan_li@test.com>
  -- @last_modified_date 2018-12-05 11:27:08
  -- @copyright (c) 2018 @itest/itest-front
  -- --------------------------------------------------------
 -->

<template>
  <div class="editor-box">
    <textarea
      :id="id"
      :placeholder="placeholder"
      autofocus></textarea>
  </div>
</template>

<script>
import Simditor from 'simditor';
import $ from 'jquery';

export default {
  name: 'CSimditor',
  props: {
    id: {
      type: String,
      default() {
        const random = Math.ceil(Math.random() * 1000000);
        return `editorId_${random}`;
      }
    },
    toolbar: {
      type: Array,
      default() {
        return ['title', 'bold', 'italic', 'underline', 'strikethrough',
          'fontScale', 'color', 'ol', 'ul', 'blockquote', 'code', 'table',
          'link', 'image', 'hr', 'indent', 'outdent', 'alignment'];
      }
    },

    placeholder: {
      type: String,
      default: '请填写'
    },
    value: {
      type: String,
      default: null
    }
  },
  watch: {
    value(newVal) {
      if (newVal !== this.editor.getValue()) {
        this.editor.setValue(this.value);
      }
    }
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    initEditor() {
      this.editor = new Simditor({
        textarea: $(`#${this.id}`),
        toolbar: this.toolbar
      });
      this.editor.setValue(this.value);
      window.setTimeout(() => this.editor.blur());
      this.editor.on('valuechanged', () => {
        if (this.editor.getValue() !== this.value) {
          this.$emit('change', this.editor.getValue());
        }
      });
    }
  }
};
</script>
<style>
  .editor-box .simditor {
    border: none;
  }

  #desc-editor {
    min-height: 200px;
  }

  .simditor-body p,
  .editor-box .editor-style p,
  .editor-box .simditor {
    margin-bottom: 0;
  }
</style>
