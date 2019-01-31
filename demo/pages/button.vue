<template>
  <page-view title="Button">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-button>default</lake-button>
        <lake-button :disabled="true">default disabled</lake-button>
        <lake-button mode="primary">primary</lake-button>
        <lake-button mode="primary" :disabled="true">primary disabled</lake-button>
        <lake-button mode="warning">warning</lake-button>
        <lake-button mode="warning" :disabled="true">warning disabled</lake-button>
        <lake-button mode="link">link</lake-button>
        <lake-button mode="link" :disabled="true">link disabled</lake-button>
        <lake-button mode="outline">outline</lake-button>
        <lake-button mode="outline" :disabled="true">outline disabled</lake-button>
        <lake-button :loading="true">loading</lake-button>
        <lake-button :loading="true" :disabled="true">loading disabled</lake-button>

        <lake-button :inline="true" size="small">inline small</lake-button>
        <lake-button :inline="true" size="normal">inline normal</lake-button>
        <lake-button :inline="true" size="large">inline large</lake-button>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-button',
  components: {
    pageView,
  },
};
</script>

<style lang="less" scoped>
.btn {
  margin-bottom: 5px;
}
</style>
