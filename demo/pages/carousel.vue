<template>
  <page-view title="Carousel">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-carousel>
          <lake-carousel-item v-for="(item, index) in items" :key="index">
            <div class="fake-carousel-item" :style="{ backgroundColor: item.bgColor }">{{ index }}</div>
          </lake-carousel-item>
        </lake-carousel>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">With dot</header>
      <div class="body">
        <lake-carousel :indicate="true">
          <lake-carousel-item v-for="(item, index) in items" :key="index">
            <div class="fake-carousel-item" :style="{ backgroundColor: item.bgColor }">{{ index }}</div>
          </lake-carousel-item>
        </lake-carousel>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Auto</header>
      <div class="body">
        <lake-carousel :auto="true">
          <lake-carousel-item v-for="(item, index) in items" :key="index">
            <div class="fake-carousel-item" :style="{ backgroundColor: item.bgColor }">{{ index }}</div>
          </lake-carousel-item>
        </lake-carousel>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Loop</header>
      <div class="body">
        <lake-carousel :loop="true">
          <lake-carousel-item v-for="(item, index) in items" :key="index">
            <div class="fake-carousel-item" :style="{ backgroundColor: item.bgColor }">{{ index }}</div>
          </lake-carousel-item>
        </lake-carousel>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-carousel',
  components: {
    pageView,
  },
  data() {
    return {
      items: [{ bgColor: '#eee' }, { bgColor: '#eee' }, { bgColor: '#eee' }, { bgColor: '#eee' }],
    };
  },
};
</script>

<style lang="less" scoped>
.fake-carousel-item {
  height: 180px;
  font-size: 28px;
  line-height: 180px;
  color: #fff;
  text-align: center;
  border: 1px solid #eee;
}
</style>
