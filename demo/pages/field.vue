<template>
  <page-view title="Field & Textarea">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body no-side-padding">
        <lake-field v-model="basicField" placeholder="请输入文本"></lake-field>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">With Label</header>
      <div class="body no-side-padding">
        <lake-field v-model="withLabelField" placeholder="请输入文本" label="标题"></lake-field>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Readonly and Disabled</header>
      <div class="body no-side-padding">
        <lake-field v-model="readonlyField" placeholder="控制只读" label="标题"></lake-field>
        <lake-field v-model="readonlyField" placeholder="请输入文本（只读）" label="标题" :readonly="true"></lake-field>
        <lake-field v-model="disabledField" placeholder="请输入文本（禁用）" label="标题" :disabled="true"></lake-field>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Field with error text</header>
      <div class="body no-side-padding">
        <lake-field placeholder="请输入文本" label="标题" :error="true" error-text="标题不能为空"></lake-field>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Textarea</header>
      <div class="body no-side-padding">
        <lake-textarea v-model="textarea" placeholder="请输入文本"></lake-textarea>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Textarea with Label</header>
      <div class="body no-side-padding">
        <lake-textarea v-model="textarea" label="文本" placeholder="请输入文本"></lake-textarea>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Textarea custom count parser</header>
      <div class="body no-side-padding">
        <lake-textarea v-model="textareaCount" placeholder="请输入文本（计数器）" :count="100"></lake-textarea>
        <br>
        <lake-textarea
          v-model="textareaCustomCount"
          placeholder="请输入文本（自定义计数器）"
          :count="140"
          :word-length-parser="wordLengthParser"
        ></lake-textarea>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Textarea with autosize</header>
      <div class="body no-side-padding">
        <lake-textarea v-model="textareaAutosize" :autosize="true" placeholder="请输入文本（高度自适应）"></lake-textarea>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Textarea with error tips</header>
      <div class="body no-side-padding">
        <lake-textarea placeholder="请输入文本" label="标题" :error="true" error-text="标题不能为空"></lake-textarea>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-field',
  components: {
    pageView,
  },
  data() {
    return {
      basicField: '',
      withLabelField: '',
      readonlyField: '',
      disabledField: '',
      textarea: '',
      textareaCount: '',
      textareaCustomCount: '',
      textareaAutosize: '',
      wordLengthParser: value => {
        if (value) {
          const len = value.replace(/[^\x00-\xff]/g, 'aa').length;

          if (this.limit - Math.ceil(len / 2) <= 0) {
            for (let i = this.limit; i < len; i++) {
              if (value.substr(0, i).replace(/[^\x00-\xff]/g, 'aa').length >= this.limit * 2) {
                value = value.substr(0, i);
                return this.limit;
              }
            }
          }
          return Math.ceil(len / 2);
        }
        return 0;
      },
    };
  },
};
</script>
