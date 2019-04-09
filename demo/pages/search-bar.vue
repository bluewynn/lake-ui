<template>
  <page-view title="SearchBar" :height="1000">
    <div class="demo-section">
      <header class="header">Basic</header>
      <lake-search-bar v-model="keyword" @submit="onSubmit"></lake-search-bar>
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
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    onSubmit(value) {
      this.$toast(value);
    },
  },
};
</script>
