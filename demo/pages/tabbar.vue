<template>
  <page-view title="tabbar">
    <div class="tabbar-content">
      <lake-tabbar :tabs="tabs" :show="isShowTab" :selected="1" position="top">
        <lake-tabbar-item v-for="(tab, index) in tabs" :key="index" :index="index" :text="tab.name"></lake-tabbar-item>
      </lake-tabbar>
      <div class="demo-section">
        <lake-button mode="link" @click="isShowTab = !isShowTab">toggle tabbar display</lake-button>
      </div>
      <lake-tabbar :tabs="tabs" :show="isShowTab" :selected="1">
        <lake-tabbar-item v-for="(tab, index) in tabs" :key="index" :index="index" :text="tab.name"></lake-tabbar-item>
      </lake-tabbar>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-tabbar',
  components: {
    pageView,
  },
  data() {
    return {
      tabs: [{ name: '首页' }, { name: '通讯录' }, { name: '发现' }, { name: '我' }],
      isShowTab: true,
    };
  },
};
</script>

<style lang="less" scoped>
.tabbar-content {
  overflow: hidden;
}
</style>
