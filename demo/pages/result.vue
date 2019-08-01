<template>
  <page-view title="Result">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-button type="primary" @click="isShowResult = !isShowResult">OK</lake-button>
        <lake-result type="info" :show="isShowResult" @close="isShowResult = false"></lake-result>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Custom Text</header>
      <div class="body">
        <lake-button type="primary" @click="isShowCustomResult = !isShowCustomResult">Custom</lake-button>
        <lake-result
          type="success"
          :show="isShowCustomResult"
          title="支付成功"
          desc="点击确定返回"
          :show-cancel-btn="false"
          @confirm="isShowCustomResult = false"
          @close="isShowCustomResult = false"
        ></lake-result>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Custom slot</header>
      <div class="body">
        <lake-button type="primary" @click="isShowCustomSlot = !isShowCustomSlot">Custom Slot</lake-button>
        <lake-result
          type="success"
          :show="isShowCustomSlot"
          :show-cancel-btn="false"
          @confirm="isShowCustomSlot = false"
          @close="isShowCustomSlot = false"
        >
          <div slot="title">Slot Title</div>
          <div slot="desc">Slot Desc</div>
        </lake-result>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-result',
  components: { pageView },
  data() {
    return {
      isShowResult: false,
      isShowCustomResult: false,
      isShowCustomSlot: false,
    };
  },
};
</script>
