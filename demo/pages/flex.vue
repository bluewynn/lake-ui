<template>
  <page-view title="FlexBox">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-flex-box>
          <lake-flex-box-item>
            <div class="placeholder">block</div>
          </lake-flex-box-item>
          <lake-flex-box-item>
            <div class="placeholder">block</div>
          </lake-flex-box-item>
          <lake-flex-box-item>
            <div class="placeholder">block</div>
          </lake-flex-box-item>
          <lake-flex-box-item>
            <div class="placeholder">block</div>
          </lake-flex-box-item>
        </lake-flex-box>

        <lake-flex-box>
          <lake-flex-box-item>
            <div class="placeholder">block</div>
          </lake-flex-box-item>
          <lake-flex-box-item>
            <div class="placeholder">block</div>
          </lake-flex-box-item>
          <lake-flex-box-item>
            <div class="placeholder">block</div>
          </lake-flex-box-item>
        </lake-flex-box>

        <lake-flex-box>
          <lake-flex-box-item>
            <div class="placeholder">block</div>
          </lake-flex-box-item>
          <lake-flex-box-item>
            <div class="placeholder">block</div>
          </lake-flex-box-item>
        </lake-flex-box>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Align: `align-items: flex-start`</header>
      <div class="body">
        <lake-flex-box align="flex-start">
          <lake-flex-box-item :flex="2">
            <div class="placeholder-small">block</div>
          </lake-flex-box-item>
          <lake-flex-box-item>
            <div class="placeholder-large">block</div>
          </lake-flex-box-item>
          <lake-flex-box-item>
            <div class="placeholder">block</div>
          </lake-flex-box-item>
        </lake-flex-box>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Direction: `flex-direction: column`</header>
      <div class="body">
        <lake-flex-box align="flex-start" direction="column">
          <lake-flex-box-item>
            <div class="placeholder-small">block</div>
          </lake-flex-box-item>
          <lake-flex-box-item>
            <div class="placeholder-large">block</div>
          </lake-flex-box-item>
          <lake-flex-box-item>
            <div class="placeholder">block</div>
          </lake-flex-box-item>
        </lake-flex-box>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-flex',
  components: {
    pageView,
  },
};
</script>

<style lang="less" scoped>
.placeholder,
.placeholder-small,
.placeholder-large {
  border: 1px solid #eee;
  text-align: center;
  background-color: #fff;
  line-height: 40px;
  min-width: 50px;
}
.placeholder-small {
  line-height: 30px;
}
.placeholder-large {
  line-height: 50px;
}
.lake-lake-flex-box-item {
  margin-right: 10px;
  margin-bottom: 5px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
