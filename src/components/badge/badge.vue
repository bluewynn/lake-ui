<template>
  <div class="lake-badge">
    <div class="lake-badge-dot" v-if="dot"></div>
    <div class="lake-badge-text" v-else>
      <slot>{{ text }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lake-badge',
  props: {
    text: {
      type: [Number, String],
      default: '',
    },
    dot: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';

.lake-badge {
  text-align: center;
  &-text {
    padding: 1px 5px;
    font-size: 12px;
    line-height: 14px;
    background-color: #f00;
    color: #fff;
    border-radius: 8px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  &-dot {
    width: 8px;
    height: 8px;
    background-color: #f00;
    border-radius: 100%;
  }
}
</style>
