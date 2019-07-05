<template>
  <page-view title="Actionsheet">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-button @click="isShowBasicActionsheet = !isShowBasicActionsheet">
          Basic
        </lake-button>
        <lake-actionsheet
          :show="isShowBasicActionsheet"
          :items="items"
          @close="isShowBasicActionsheet = false"
        ></lake-actionsheet>
        <br />
        <lake-button @click="isShowTitleActionsheet = !isShowTitleActionsheet">With Title</lake-button>
        <lake-actionsheet
          title="请选择正确的选项"
          :show="isShowTitleActionsheet"
          @close="isShowTitleActionsheet = false"
          :items="items"
        ></lake-actionsheet>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Custom</header>
      <div class="body">
        <lake-button @click="isShowCustomActionsheet = !isShowCustomActionsheet">Custom</lake-button>
        <lake-actionsheet
          title="请选择正确的选项"
          :show="isShowCustomActionsheet"
          @close="isShowCustomActionsheet = false"
        >
          <div slot="body">自定义内容</div>
        </lake-actionsheet>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-actionsheet',
  components: {
    pageView,
  },
  data() {
    return {
      isShowBasicActionsheet: false,
      isShowTitleActionsheet: false,
      isShowCustomActionsheet: false,
      items: [
        { name: '这是一个选项' },
        { name: '这是一个选项', subName: '这是选项的副标题' },
        { name: '这是一个选项' },
        { name: '这是一个选项' },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
