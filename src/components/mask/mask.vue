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

      document.body.style.overflow = 'hidden';
    },
    close() {
      if (!this.lockScroll) return;

      document.body.style.overflow = 'initial';
    },
  },
};
</script>

<style lang="less">
.lake-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  &.transparent {
    background-color: transparent;
  }
}

.lake-fade-enter-active,
.lake-fade-leave-active {
  transition: opacity 0.3s;
}
.lake-fade-enter,
.lake-fade-leave-to {
  opacity: 0;
}
</style>
