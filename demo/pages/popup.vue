<template>
  <page-view :height="900">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-button @click="isShowPopup = !isShowPopup">Basic</lake-button>
        <lake-popup :show="isShowPopup" @click-mask="isShowPopup = false">
          <div class="popup-content">
            云想衣裳花想容，
            <br />春风拂槛露华浓。 <br />若非群玉山头见， <br />会向瑶台月下逢。
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
          <div class="popup-content popup-content-message">你可以说我是跑龙套的，但是你不可以说我是“臭跑龙套”的！</div>
        </lake-popup>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Full Screen</header>
      <div class="body">
        <lake-button @click="isShowFullScreen = !isShowFullScreen">Popup Full Screen</lake-button>
        <lake-popup
          :show="isShowFullScreen"
          position="full-screen"
          :lock-scroll="true"
          @click-mask="isShowFullScreen = false"
        >
          <div class="popup-content popup-full-screen">
            <lake-button type="primary" @click="isShowFullScreen = false">close</lake-button>
            <br />古时有关云长全神贯注下象棋刮骨疗毒，今日有我凌凌漆聚精会神看A片挖骨取弹头。
          </div>
        </lake-popup>
        <br />
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Lock Scroll</header>
      <div class="body">
        <lake-button @click="isShowLockScroll = !isShowLockScroll">Lock Scroll</lake-button>
        <lake-popup :show="isShowLockScroll" :lock-scroll="true" @click-mask="isShowLockScroll = false">
          <div class="popup-content popup-lock-scroll">
            你以为躲在这里就找不到你吗？没用的，你那样出色的男人无论在哪，都像黑夜星仔里的莹火虫那样的鲜明、那样的出众，你那忧郁的眼神，稀嘘的胡渣子，神乎其技的刀法，还有那杯Drymartine，都深深的迷住了我。
            <br />
            他高傲，但是宅心仁厚，他低调，但是受万人景仰，他可以把神赐给人类的火，运用的出神入化，烧出堪称火之艺术的超级菜式，他究竟是神仙的化身？还是地狱的使者？没人知道，但是可以肯定，每个人都给他一个称号——食神！
          </div>
        </lake-popup>
        <br />
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
      isShowFullScreen: false,
      isShowLockScroll: false,
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
.popup-full-screen {
  background-color: #fff;
  text-align: left;
  height: 100%;
}
.popup-lock-scroll {
  height: 200px;
  overflow: scroll;
}
</style>
