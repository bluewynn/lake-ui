<template>
  <div class="lake-loading">
    <div class="lake-loading-dots" v-if="mode === 'dots'">
      <div class="lake-dot first"></div>
      <div class="lake-dot second"></div>
      <div class="lake-dot third"></div>
    </div>
    <div class="lake-loading-circle" v-else>
      <i class="loading"></i>
    </div>
  </div>
</template>

<script>
const LOADING_TYPES = ['circle', 'dots'];
const LOADING_SIZES = ['small', 'normal', 'large'];

export default {
  name: 'lake-loading',
  props: {
    mode: {
      type: String,
      default: 'circle',
      validator(mode) {
        return LOADING_TYPES.includes(mode);
      },
    },
    size: {
      type: String,
      default: 'normal',
      validator(mode) {
        return LOADING_SIZES.includes(mode);
      },
    },
  },
};
</script>

<style lang="less" scoped>
.lake-loading {
  &-dots {
    padding: 10px 0;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    min-width: 36px;
  }

  &-dot {
    width: 8px;
    height: 8px;
    margin: 0 2px;
    background-color: #ccc;
    border-radius: 100%;
    display: inline-block;
    animation: bounce-delay 1s infinite ease-in-out both;

    &.first {
      animation-delay: -0.32s;
    }
    &.second {
      animation-delay: -0.16s;
    }
  }

  @keyframes bounce-delay {
    0%,
    80%,
    100% {
      transform: scale(0);
    }

    40% {
      transform: scale(1);
    }
  }
}
</style>

