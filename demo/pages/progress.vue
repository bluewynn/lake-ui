<template>
  <page-view>
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body no-side-padding">
        <lake-progress :percent="percent" :fixed="true"></lake-progress>
        <lake-progress :percent="percent"></lake-progress>
        <br>
        <lake-button :inline="true" @click="calculatePercent(10)">+10</lake-button>
        <lake-button :inline="true" @click="calculatePercent(-10)">-10</lake-button>
        <br>
        <lake-progress :percent="percent" :show-text="true"></lake-progress>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-progress',
  components: {
    pageView,
  },
  data() {
    return {
      percent: 50,
    };
  },
  methods: {
    calculatePercent(num) {
      const percent = this.percent + num;

      if (percent >= 100) this.percent = 100;
      else if (percent <= 0) this.percent = 0;
      else this.percent = percent;
    },
  },
};
</script>
