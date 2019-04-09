<template>
  <page-view title="Notice-bar">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body no-side-padding">
        <lake-notice-bar>今天的小姐姐真的很可爱，今天的小姐姐真的很可爱，今天的小姐姐真的很可爱！</lake-notice-bar>
        <br />
        <lake-notice-bar :enable-close="false"
          >星期天的云，周一的雨，星期天的云，周一的雨，星期天的云，周一的雨！</lake-notice-bar
        >
        <br />
        <lake-notice-bar>
          <span :style="{ color: 'red' }"
            >今天的小姐姐真的很可爱，今天的小姐姐真的很可爱，今天的小姐姐真的很可爱！</span
          >
        </lake-notice-bar>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-notice-bar',
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
.notice-bar {
  margin-bottom: 10px;
}
</style>
