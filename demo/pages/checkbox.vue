<template>
  <page-view title="Button">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-checkbox v-model="isBasicCheck">同意</lake-checkbox>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Disabled</header>
      <div class="body"></div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-checkbox-radio',
  components: {
    pageView,
  },
  data() {
    return {
      isBasicCheck: false,
    };
  },
};
</script>

<style lang="less" scoped>
.lake-btn {
  margin-bottom: 10px;
}
</style>
