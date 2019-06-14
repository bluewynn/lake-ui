<template>
  <page-view>
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-button @click="isShow = true">test</lake-button>
        <lake-toast :show="isShow" msg="世界真美好世界真美好世界真美好世界真美好世界真美好"></lake-toast>
        <br />
        <lake-button @click="showText">basic</lake-button>
        <br />
        <lake-button @click="showTextResolve">resolve</lake-button>
        <br />
        <lake-button @click="showTextWithPos('top')">top</lake-button>
        <br />
        <lake-button @click="showTextWithPos('bottom')">bottom</lake-button>
      </div>
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
      isShow: false,
      isShowToast: false,
    };
  },
  methods: {
    showText() {
      this.$toast('滥用Toast是懒惰的做法');
    },
    showTextResolve() {
      this.$toast('设计师完全有其他形式代替Toast，达到更优雅的用户体验。').then(() => {
        this.$toast('没错');
      });
    },
    showTextWithPos(position) {
      this.$toast({ msg: '顶部信息', position: position });
    },
  },
};
</script>
