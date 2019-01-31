<template>
  <page-view title="FlexBox">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <flex-box>
          <flex-box-item>
            <div class="placeholder">block</div>
          </flex-box-item>
          <flex-box-item>
            <div class="placeholder">block</div>
          </flex-box-item>
          <flex-box-item>
            <div class="placeholder">block</div>
          </flex-box-item>
          <flex-box-item>
            <div class="placeholder">block</div>
          </flex-box-item>
        </flex-box>

        <flex-box>
          <flex-box-item>
            <div class="placeholder">block</div>
          </flex-box-item>
          <flex-box-item>
            <div class="placeholder">block</div>
          </flex-box-item>
          <flex-box-item>
            <div class="placeholder">block</div>
          </flex-box-item>
        </flex-box>

        <flex-box>
          <flex-box-item>
            <div class="placeholder">block</div>
          </flex-box-item>
          <flex-box-item>
            <div class="placeholder">block</div>
          </flex-box-item>
        </flex-box>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Align: `align-items: flex-start`</header>
      <div class="body">
        <flex-box align="flex-start">
          <flex-box-item :flex="2">
            <div class="placeholder-small">block</div>
          </flex-box-item>
          <flex-box-item>
            <div class="placeholder-large">block</div>
          </flex-box-item>
          <flex-box-item>
            <div class="placeholder">block</div>
          </flex-box-item>
        </flex-box>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Direction: `flex-direction: column`</header>
      <div class="body">
        <flex-box align="flex-start" direction="column">
          <flex-box-item>
            <div class="placeholder-small">block</div>
          </flex-box-item>
          <flex-box-item>
            <div class="placeholder-large">block</div>
          </flex-box-item>
          <flex-box-item>
            <div class="placeholder">block</div>
          </flex-box-item>
        </flex-box>
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
.lake-flex-box-item {
  margin-right: 10px;
  margin-bottom: 5px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
