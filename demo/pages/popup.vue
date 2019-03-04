<template>
  <page-view>
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-button @click="isShowPopup = !isShowPopup">Alert</lake-button>
        <lake-popup :show="isShowPopup" @click-mask="isShowPopup = false">
          <div class="popup-content">
            云想衣裳花想容，<br />
            春风拂槛露华浓。<br />
            若非群玉山头见，<br />
            会向瑶台月下逢。
          </div>
        </lake-popup>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-popup',
  components: {
    pageView,
  },
  data() {
    return {
      isShowPopup: false,
    };
  },
};
</script>

<style lang="less" scoped>
.popup-content {
  background-color: #fff;
  padding: 20px;
  width: 200px;
  line-height: 1.5;
  text-align: center;
  font-size: 15px;
}
</style>
