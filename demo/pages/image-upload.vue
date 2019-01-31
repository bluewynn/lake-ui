<template>
  <page-view title="Image Upload">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-image-upload :multiple="true"></lake-image-upload>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-image-upload',
  components: {
    pageView,
  },
};
</script>
