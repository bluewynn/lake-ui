<template>
  <div
    class="lake-progress"
    :class="fixed ? 'fixed' : ''"
    :style="{ backgroundColor: backgroundColor || null }"
  >
    <div class="lake-progress-wrapper">
      <div
        class="lake-progress-bar"
        :style="{ width: `${percent}%`, backgroundColor: color || null }"
      ></div>
    </div>

    <div class="lake-progress-text" v-if="showText || $slots.text">
      <slot name="text">{{ percent }}%</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lake-progress',
  props: {
    percent: {
      type: Number,
      default: 0,
      validator: percent => percent >= 0 && percent <= 100,
    },
    showText: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../style/themes/default.less';

.lake-progress {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: @color-bg-body;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
  }
  &-wrapper {
    flex: 1;
    height: 2px;
  }
  &-bar {
    height: 100%;
    max-width: 100%;
    background-color: @brand-primary;
    transition: width linear 0.2s;
  }
  &-text {
    margin-left: 10px;
    font-size: 13px;
  }
}
</style>
