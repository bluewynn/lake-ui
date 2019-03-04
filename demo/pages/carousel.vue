<template>
  <page-view title="Carousel">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-carousel class="fake-carousel">
          <lake-carousel-item class="fake-carousel-item" v-for="(item, index) in items" :key="index">
            <div :style="{ backgroundColor: item.bgColor }">{{ index }}</div>
          </lake-carousel-item>
        </lake-carousel>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">With dot</header>
      <div class="body">
        <lake-carousel class="fake-carousel" :indicate="true">
          <lake-carousel-item class="fake-carousel-item" v-for="(item, index) in items" :key="index">
            <div :style="{ backgroundColor: item.bgColor }">{{ index }}</div>
          </lake-carousel-item>
        </lake-carousel>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Auto</header>
      <div class="body">
        <lake-carousel class="fake-carousel" :auto="true">
          <lake-carousel-item class="fake-carousel-item" v-for="(item, index) in items" :key="index">
            <div :style="{ backgroundColor: item.bgColor }">{{ index }}</div>
          </lake-carousel-item>
        </lake-carousel>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Loop</header>
      <div class="body">
        <lake-carousel class="fake-carousel" :loop="true">
          <lake-carousel-item class="fake-carousel-item" v-for="(item, index) in items" :key="index">
            <div :style="{ backgroundColor: item.bgColor }">{{ index }}</div>
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
      items: [{ bgColor: '#FFEB3B' }, { bgColor: '#4CAF50' }, { bgColor: '#FF9800' }, { bgColor: '#00BCD4' }],
    };
  },
};
</script>

<style lang="less" scoped>
.fake-carousel {
  height: 180px;
  &-item {
    font-size: 28px;
    height: 180px;
    line-height: 180px;
    color: #fff;
    text-align: center;
    border: 1px solid #eee;
  }
}
</style>
