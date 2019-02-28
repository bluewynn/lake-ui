<template>
  <page-view title="tabbar">
    <lake-tabbar :tabs="tabs" :show="isShowTab" selected="Contact" position="top">
      <lake-tabbar-item v-for="(tab, index) in tabs" :key="index" :text="tab.name"></lake-tabbar-item>
    </lake-tabbar>
    <div class="demo-section">
      <lake-button mode="link" @click="isShowTab = !isShowTab">toggle tabbar display</lake-button>
    </div>
    <lake-tabbar :tabs="tabs" :show="isShowTab">
      <lake-tabbar-item v-for="(tab, index) in tabs" :key="index" :text="tab.name"></lake-tabbar-item>
    </lake-tabbar>
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
      tabs: [{ name: 'Home' }, { name: 'Contact' }, { name: 'Discovery' }, { name: 'Me' }],
      isShowTab: true,
    };
  },
};
</script>

<style lang="less" scoped></style>
