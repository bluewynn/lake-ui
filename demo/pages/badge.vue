<template>
  <page-view title="Badge">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body no-side-padding">
        <lake-tab-bar :tabs="tabs" :show="isShowTab" selected="Contact" position="bottom">
          <lake-tab-bar-item v-for="(tab, index) in tabs" :key="index" :text="tab.name">
            <div :style="{ position: 'relative' }">
              {{ tab.name }}
              <lake-badge class="badge" :dot="true" v-if="tab.name === 'Home'"></lake-badge>
              <lake-badge class="badge" v-if="tab.name === 'Me'">1</lake-badge>
            </div>
          </lake-tab-bar-item>
        </lake-tab-bar>
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
.badge {
  position: absolute;
  right: 0;
  top: -8px;
}
</style>
