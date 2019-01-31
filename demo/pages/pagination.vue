<template>
  <page-view title="Pagination">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-pagination :current-page="1" :total="300" :per-page="10"></lake-pagination>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Simple</header>
      <div class="body">
        <lake-pagination :current-page="1" :simple="true" :total="300" :per-page="10"></lake-pagination>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Basic Small</header>
      <div class="body">
        <lake-pagination :current-page="1" size="small" :total="300" :per-page="10"></lake-pagination>
      </div>
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
