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

<style lang="less"></style>
