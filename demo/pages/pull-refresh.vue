<template>
  <page-view title="Pull Refresh">
    <div class="demo-section">
      <header class="header">Basic</header>
    </div>

    <div class="demo-section">
      <header class="header">Simple</header>
      <lake-pagination :current-page="1" :simple="true" :total="300" :per-page="10"></lake-pagination>
    </div>

    <div class="demo-section">
      <header class="header">Basic Small</header>
      <lake-pagination :current-page="1" size="small" :total="300" :per-page="10"></lake-pagination>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-pagination',
  components: {
    pageView,
  },
};
</script>
