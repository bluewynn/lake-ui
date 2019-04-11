<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="less">
@import '~normalize.css/normalize.css';

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  background-color: #f5f5f5;
  font-size: 14px;
  font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
}
.demo-section {
  .header {
    font-size: 15px;
    color: #666;
    padding: 10px;
  }
  .body {
    padding: 10px;
    &.no-side-padding {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
