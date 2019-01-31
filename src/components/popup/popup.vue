<template>
  <transition name="fade">
    <div class="popup">
      <div
        class="mask"
        :class="mask ? '' : 'mask-transparent'"
        @touchmove.prevent
        @click="onClickMask"
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'lake-popup',
  props: {
    mask: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClickMask() {
      this.$emit('click-mask');
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';

.popup {
  .mask {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: @color-bg-mask;
    &-transparent {
      background-color: transparent;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
