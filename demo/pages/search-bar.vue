<template>
  <page-view title="SearchBar" :height="1000">
    <div class="demo-section">
      <header class="header">Basic</header>
      <lake-search-bar></lake-search-bar>
    </div>

    <div class="demo-section no-side-padding">
      <header class="header">Auto Fixed</header>
      <lake-search-bar :fixed="true"></lake-search-bar>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-search-bar',
  components: {
    pageView,
  },
};
</script>
