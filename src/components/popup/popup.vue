<template>
  <div>
    <lake-mask :show="show" :transparent="false" @click="onClickMask" />
    <transition :name="transitionName">
      <div class="lake-popup" :class="position ? `${position}` : 'center'" v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import lakeMask from '../mask';

const POPUP_POSITIONS = ['top', 'center', 'bottom', 'full-screen'];

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
    maskStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    position: {
      type: String,
      default: 'center',
      validator: pos => pos === '' || POPUP_POSITIONS.includes(pos),
    },
  },
  computed: {
    transitionName() {
      const transitionMap = {
        top: 'lake-slide-reverse',
        center: 'lake-fade',
        bottom: 'lake-slide',
        'full-screen': 'lake-slide',
      };

      return this.position ? transitionMap[this.position] : transitionMap.center;
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

.lake-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  max-height: 100%;
  -webkit-overflow-scrolling: touch;
  z-index: @z-index-popup;
  &.center {
    transform: translate3d(-50%, -50%, 0);
  }
  &.top {
    top: 0;
    left: 0;
    transform: translate3d(0, 0, 0);
    width: 100%;
  }
  &.bottom,
  &.full-screen {
    top: initial;
    left: 0;
    bottom: 0;
    transform: translate3d(0, 0, 0);
    width: 100%;
  }
  &.full-screen {
    height: 100vh;
  }
}
</style>
