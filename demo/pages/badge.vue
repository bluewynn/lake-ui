<template>
  <page-view title="Badge">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body no-side-padding">
        <lake-cell-group>
          <lake-cell size="large">
            <div class="text-badge" slot="content">
              <div class="text">文字模式</div>
              <lake-badge text="new"></lake-badge>
            </div>
          </lake-cell>
          <lake-cell size="large">
            <div class="text-badge" slot="content">
              <div class="text">文字模式</div>
              <lake-badge text="99"></lake-badge>
            </div>
          </lake-cell>
          <lake-cell size="large">
            <div class="dot-badge" slot="content">
              <div class="text">小点点模式</div>
              <lake-badge :dot="true"></lake-badge>
            </div>
          </lake-cell>
        </lake-cell-group>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-badge',
  components: {
    pageView,
  },
  data() {
    return {
      tabs: [{ name: 'Home' }, { name: 'Contact' }, { name: 'Discovery' }, { name: 'Me' }],
      isShowTab: true,
    };
  },
};
</script>

<style lang="less" scoped>
.dot-badge,
.text-badge {
  display: flex;
  align-items: center;
  width: 100%;
  .text {
    flex: 1;
  }
}
</style>
