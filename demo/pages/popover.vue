<template>
  <page-view title="Popover">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-button @click="isShowPopover = !isShowPopover">Click Me</lake-button>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-button',
  components: {
    pageView,
  },
  data() {
    return {
      isShowPopover: false,
    };
  },
};
</script>
