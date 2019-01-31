<template>
  <page-view title="Tab-bar">
    <lake-tab-bar :tabs="tabs" :show="isShowTab" selected="Contact" position="top">
      <lake-tab-bar-item v-for="(tab, index) in tabs" :key="index" :text="tab.name"></lake-tab-bar-item>
    </lake-tab-bar>
    <div class="demo-section">
      <lake-button mode="link" @click="isShowTab = !isShowTab">toggle tab-bar display</lake-button>
    </div>
    <lake-tab-bar :tabs="tabs" :show="isShowTab">
      <lake-tab-bar-item v-for="(tab, index) in tabs" :key="index" :text="tab.name"></lake-tab-bar-item>
    </lake-tab-bar>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-tab-bar',
  components: {
    pageView,
  },
  data() {
    return {
      tabs: [{ name: 'Home' }, { name: 'Contact' }, { name: 'Discovery' }, { name: 'Me' }],
      isShowTab: true,
    };
  },
};
</script>

<style lang="less" scoped>
</style>
