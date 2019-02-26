<template>
  <transition name="fade">
    <div
      :class="['lake-mask', transparent ? 'transparent' : '']"
      v-if="show"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @click="onClick"
    ></div>
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
    onTouchStart($event) {
      $event.preventDefault();
    },
    onTouchMove($event) {
      $event.preventDefault();
    },
    open() {
      if (!document.body.classList.contains('lake-modal-open')) {
        document.body.classList.add('lake-modal-open');
      }

      // if (this.lockScroll) {
      // }
    },
    close() {
      document.body.classList.remove('lake-modal-open');
    },
  },
};
</script>
