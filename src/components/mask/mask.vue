<template>
  <transition name="lake-fade">
    <div :class="['lake-mask', transparent ? 'transparent' : '']" v-if="show" @click="onClick"></div>
  </transition>
</template>

<script>
export default {
  name: 'lake-mask',
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
  },
  beforeDestroy() {
    this.close();
  },
  deactivated() {
    this.close();
  },
  watch: {
    show(show) {
      if (show) this.open();
      else this.close();
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
    open() {
      if (!this.lockScroll) return;

      document.body.classList.add('lake-mask-open');
    },
    close() {
      if (!this.lockScroll) return;

      document.body.classList.remove('lake-mask-open');
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';

.lake-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: @z-index-mask;
  background-color: @color-bg-mask;
  &.transparent {
    background-color: transparent;
  }
}
</style>
