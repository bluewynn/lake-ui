<template>
  <page-view title="Button">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-checkbox v-model="isBasicCheck">同意</lake-checkbox>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Checkbox Group</header>
      <div class="body">
        <lake-checkbox-group v-model="cxkCheck">
          <lake-checkbox label="唱"></lake-checkbox>
          <lake-checkbox label="跳"></lake-checkbox>
          <lake-checkbox label="Rap"></lake-checkbox>
          <lake-checkbox label="篮球"></lake-checkbox>
        </lake-checkbox-group>
        <div>选中：{{ cxkCheck.join(',') }}</div>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Max and min</header>
      <div class="body">
        <lake-checkbox-group v-model="cxkCheckAgain" :min="1" :max="3">
          <lake-checkbox label="唱"></lake-checkbox>
          <lake-checkbox label="跳"></lake-checkbox>
          <lake-checkbox label="Rap"></lake-checkbox>
          <lake-checkbox label="篮球"></lake-checkbox>
        </lake-checkbox-group>
        <div>max 3 min 1：{{ cxkCheckAgain.join(',') }}</div>
      </div>
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
      isBasicCheck: true,
      cxkCheck: [],
      cxkCheckAgain: [],
    };
  },
};
</script>

<style lang="less" scoped>
.lake-btn {
  margin-bottom: 10px;
}
</style>
