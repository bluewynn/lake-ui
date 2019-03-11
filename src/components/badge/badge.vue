<template>
  <span class="lake-badge">
    <span class="lake-badge-dot" v-if="dot"></span>
    <span class="lake-badge-text" v-else
      ><slot>{{ text }}</slot></span
    >
  </span>
</template>

<script>
export default {
  name: 'lake-badge',
  props: {
    text: {
      type: [Boolean, String],
      default: '',
    },
    dot: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../style/themes/default.less';

.lake-badge {
  text-align: center;
  &-text {
    padding: 1px 4px;
    font-size: 12px;
    line-height: 14px;
    background-color: #f00;
    color: #fff;
    border-radius: 8px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  &-dot {
    display: block;
    width: 8px;
    height: 8px;
    background-color: #f00;
    border-radius: 100%;
  }
}
</style>
