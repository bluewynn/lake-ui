<template>
  <page-view title="Tabs">
    <div class="demo-section">
      <header class="header">Basic</header>
      <lake-tabs :tabs="tabItems.slice(0, 3)">
        <span slot="tab-item" slot-scope="{ tab }">{{ tab.name }}</span>
      </lake-tabs>
    </div>

    <div class="demo-section">
      <header class="header">Multiple Tabs</header>
      <lake-tabs :tabs="tabItems" :show-more="true">
        <span slot="tab-item" slot-scope="{ tab }">{{ tab.name }}</span>
      </lake-tabs>
    </div>

    <div class="demo-section">
      <header class="header">Selected Tabs</header>
      <lake-tabs :tabs="tabItems" :selected="1" :show-more="true">
        <span slot="tab-item" slot-scope="{ tab }">{{ tab.name }}</span>
      </lake-tabs>
    </div>

    <div class="demo-section">
      <header class="header">Unscroll Tabs</header>
      <lake-tabs :tabs="tabItems.slice(0, 4)" :scroll="false" :show-more="false">
        <span slot="tab-item" slot-scope="{ tab }">{{ tab.name }}</span>
      </lake-tabs>
    </div>

    <div class="demo-section">
      <header class="header">large Tabs</header>
      <lake-tabs :tabs="tabItems.slice(0, 4)" :scroll="false" :show-more="false" size="large">
        <span slot="tab-item" slot-scope="{ tab }">{{ tab.name }}</span>
      </lake-tabs>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-tabs',
  components: {
    pageView,
  },
  data() {
    return {
      tabItems: [
        { name: 'Tab 1' },
        { name: 'Tab 2' },
        { name: 'Tab 3' },
        { name: 'Tab 4' },
        { name: 'Tab 5' },
        { name: 'Tab 6' },
        { name: 'Tab 7' },
        { name: 'Tab 8' },
        { name: 'Tab 9' },
        { name: 'Tab 10' },
        { name: 'Tab 11' },
      ],
    };
  },
};
</script>
