<template>
  <page-view title="Button">
    <div class="demo-section">
      <header class="header">Basic Checkbox</header>
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
          <lake-checkbox :disabled="true" label="Rap">Rap[readonly]</lake-checkbox>
          <lake-checkbox :disabled="true" label="篮球">篮球[disabled]</lake-checkbox>
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
    <div class="demo-section">
      <header class="header">Basic Radio</header>
      <div class="body">
        <lake-radio v-model="isBasicRadio">同意</lake-radio>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Basic Radio</header>
      <div class="body">
        <lake-radio v-model="isBasicCheckOnly" :disabled="true">同意</lake-radio>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Radio Group</header>
      <div class="body">
        <lake-radio-group v-model="cxkRadio">
          <lake-radio label="唱" :disabled="true">我会唱[readonly]</lake-radio>
          <lake-radio label="跳">我会跳</lake-radio>
          <lake-radio label="Rap" :disabled="true">我会rap[disabled]</lake-radio>
          <lake-radio label="篮球">我会篮球</lake-radio>
        </lake-radio-group>
        <div>选中：{{ cxkRadio }}</div>
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
      isBasicCheckOnly: true,
      cxkCheck: ['Rap'],
      cxkCheckAgain: [],
      isBasicRadio: false,
      cxkRadio: '跳',
    };
  },
};
</script>
