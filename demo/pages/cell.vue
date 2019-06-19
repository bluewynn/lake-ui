<template>
  <page-view title="Cell">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body no-side-padding">
        <lake-cell-group>
          <lake-cell title="标题" content="内容"></lake-cell>
          <lake-cell title="标题" content="内容"></lake-cell>
        </lake-cell-group>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Custom</header>
      <div class="body no-side-padding">
        <lake-cell-group>
          <lake-cell>
            <div slot="title" class="custom-title">自定义</div>
            <div slot="content" class="custom-content">
              自定义内容
              <br />
              自定义内容
            </div>
          </lake-cell>
          <lake-cell title="标题" content="内容"></lake-cell>
        </lake-cell-group>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Custom Size</header>
      <div class="body no-side-padding">
        <lake-cell-group>
          <lake-cell title="标题" content="内容" size="large"></lake-cell>
          <lake-cell title="标题" content="内容"></lake-cell>
        </lake-cell-group>
      </div>
    </div>
    <div class="demo-section">
      <header class="header">Router link</header>
      <div class="body no-side-padding">
        <lake-cell-group>
          <lake-cell tag="router-link" to="/" title="标题" content="内容" size="large"></lake-cell>
          <lake-cell tag="router-link" to="/button" title="标题" content="内容"></lake-cell>
        </lake-cell-group>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-cell',
  components: {
    pageView,
  },
};
</script>

<style lang="less">
.custom-title {
  color: #00f;
  font-size: 16px;
}
.custom-content {
  font-size: 16px;
  line-height: 25px;
}
</style>
