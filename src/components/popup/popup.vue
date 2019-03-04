<template>
  <div>
    <lake-mask :show="show" :transparent="false" @click="onClickMask" />
    <transition name="lake-fade">
      <div class="lake-popup" v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import lakeMask from '../mask';

export default {
  name: 'lake-popup',
  components: {
    lakeMask,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
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

<style lang="less" scoped>
.lake-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  max-height: 100%;
  transition: 0.3s ease-out;
  -webkit-overflow-scrolling: touch;
  z-index: 1000;
  transform: translate3d(-50%, -50%, 0);
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
