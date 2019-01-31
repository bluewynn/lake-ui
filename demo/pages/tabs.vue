<template>
  <page-view title="Tabs">
    <div class="demo-section">
      <header class="header">Basic</header>
      <lake-tabs :tabs="tabItems.slice(0, 3)">
        <lake-tab
          v-for="tabItem in tabItems.slice(0, 3)"
          :key="tabItem.name"
        >Content of {{ tabItem.name }}</lake-tab>
      </lake-tabs>
      <br>
      <lake-tabs :tabs="tabItems.slice(0, 2)">
        <lake-tab
          v-for="tabItem in tabItems.slice(0, 2)"
          :key="tabItem.name"
        >Content of {{ tabItem.name }}</lake-tab>
      </lake-tabs>
    </div>

    <div class="demo-section">
      <header class="header">Multiple Tabs</header>
      <lake-tabs :tabs="tabItems">
        <lake-tab v-for="tabItem in tabItems" :key="tabItem.name">Content of {{ tabItem.name }}</lake-tab>
      </lake-tabs>
    </div>

    <div class="demo-section">
      <header class="header">Auto</header>
      <div class="body"></div>
    </div>

    <div class="demo-section">
      <header class="header">Loop</header>
      <div class="body"></div>
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
      ],
    };
  },
};
</script>
