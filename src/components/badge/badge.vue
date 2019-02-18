<template>
  <span class="lake-badge">
    <span class="lake-badge-dot" v-if="dot"></span>
    <span class="lake-badge-text" v-else><slot>{{ text }}</slot></span>
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
    }
  },
};
</script>

<style lang="less" scoped>
@import '../../style/themes/default.less';

.lake-badge {
  position: relative;
  text-align: center;
  &-text {
    color: #fff;
    font-size: 12px;
    line-height: 14px;
    padding: 1px 4px;
    background-color: @brand-important;
    border-radius: 8px;
    white-space: nowrap;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  &-dot {
    display: inline-block;
    border-radius: 100%;
    padding: 4px;
    background-color: @brand-important;
  }
}
</style>
