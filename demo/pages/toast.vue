<template>
  <page-view title="Toast">
    <div class="demo-section">
      <lake-button @click="isShowToast = true">basic</lake-button>

      <lake-toast msg="测试一下" mode="success" v-show="isShowToast" @click-mask="isShowToast = false"></lake-toast>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-toast',
  components: {
    pageView,
  },
  data() {
    return {
      isShowToast: false,
    };
  },
};
</script>

<style lang="less" scoped>
.btn {
  margin-bottom: 5px;
}
</style>
