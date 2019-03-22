<template>
  <page-view :height="900">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-button @click="isShowPopup = !isShowPopup">Basic</lake-button>
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
    <div class="demo-section">
      <header class="header">Define Position</header>
      <div class="body">
        <lake-button @click="isShowPopupBottom = !isShowPopupBottom">Popup bottom</lake-button>
        <lake-popup :show="isShowPopupBottom" position="bottom" @click-mask="isShowPopupBottom = false">
          <div class="popup-content popup-content-bottom">
            古时有关云长全神贯注下象棋刮骨疗毒，今日有我凌凌漆聚精会神看A片挖骨取弹头。
          </div>
        </lake-popup>
        <br />
        <lake-button @click="isShowPopupTop = !isShowPopupTop">Popup top</lake-button>
        <lake-popup :show="isShowPopupTop" position="top" @click-mask="isShowPopupTop = false">
          <div class="popup-content popup-content-message">
            你可以说我是跑龙套的，但是你不可以说我是“臭跑龙套”的！
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
      isShowPopupBottom: false,
      isShowPopupTop: false,
    };
  },
};
</script>

<style lang="less" scoped>
.popup-content {
  background-color: #fff;
  padding: 20px;
  line-height: 1.5;
  text-align: center;
  font-size: 15px;
}
.popup-content-bottom {
  text-align: left;
}
.popup-content-message {
  color: #fff;
  background-color: #464646;
  text-align: left;
}
</style>
