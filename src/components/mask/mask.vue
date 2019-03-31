<template>
  <transition name="lake-fade">
    <div
      :class="['lake-mask', transparent ? 'transparent' : '']"
      :style="customStyle"
      v-if="show"
      @click="onClick"
    ></div>
  </transition>
</template>

<script>
import drag from '../../mixins/drag';
import { getScrollTop, getScrollParent } from '../../utils/scroll';
import { on, off } from '../../utils/event';

export default {
  name: 'lake-mask',
  mixins: [drag],
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    lockScroll: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.show && this.open();
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
      if (this.lockScroll) {
        document.body.classList.add('lake-mask-open');
        on(document.body, 'touchstart', this.dragStart, { capture: false, passive: false });
        on(document.body, 'touchmove', this.onTouchMove, { capture: false, passive: false });
        on(document.body, 'touchend', this.dragEnd, { capture: false, passive: false });
      }
    },
    close() {
      if (this.lockScroll) {
        document.body.classList.remove('lake-mask-open');
        off(document.body, 'touchstart', this.dragStart);
        off(document.body, 'touchmove', this.onTouchMove);
        off(document.body, 'touchend', this.dragEnd);
      }
    },
    onTouchMove(e) {
      this.dragMove(e);

      const node = e.target;
      const scrollEl = getScrollParent(node);
      const isRootScroll = scrollEl.tagName === 'HTML' || scrollEl.tagName === 'BODY' || scrollEl === window;
      const direction = this.dragState.dragOffsetY > 0 ? 'down' : 'up';

      if (
        isRootScroll ||
        (!isRootScroll && getScrollTop(scrollEl) === 0 && direction === 'up') ||
        (!isRootScroll &&
          getScrollTop(scrollEl) === scrollEl.scrollHeight - scrollEl.offsetHeight &&
          direction === 'down')
      ) {
        if (e.cancelable) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
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
