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
import { getScrollTop, getScrollHeight, getScrollParent } from '../../utils/scroll';
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
        if (!document.body.classList.contains('lake-mask-open')) {
          // 防止多个 mask 时，body class 多次绑定 .lake-mask-open 的情况
          document.body.classList.add('lake-mask-open');
        }

        // passive: false 处理 touchmove 无法 preventDefault 的问题
        const eventOption = { capture: false, passive: false };

        on(document, 'touchstart', this.dragStart, eventOption);
        on(document, 'touchmove', this.onTouchMove, eventOption);
        on(document, 'touchend', this.dragEnd, eventOption);
      }
    },
    close() {
      if (this.lockScroll) {
        if (document.body.classList.contains('lake-mask-open')) {
          // 防止多个 mask 时，body class 多次绑定 .lake-mask-open 的情况
          document.body.classList.remove('lake-mask-open');
        }

        off(document, 'touchstart', this.dragStart);
        off(document, 'touchmove', this.onTouchMove);
        off(document, 'touchend', this.dragEnd);
      }
    },
    onTouchMove(e) {
      this.dragMove(e);

      const node = e.target;
      const scrollEl = getScrollParent(node);
      const isRootScroll = scrollEl.tagName === 'HTML' || scrollEl.tagName === 'BODY' || scrollEl === window;
      const direction = this.dragState.dragOffsetY > 0 ? 'down' : 'up';

      if (isRootScroll) {
        // document 滚动的情况，直接 prevent
        e.cancelable && e.preventDefault();
      } else {
        // 非 document 滚动的情况，处理内部滚动容器触顶和触底引发的滚动穿透问题
        const scrollTop = getScrollTop(scrollEl);
        const scrollElHeight = scrollEl.clientHeight;
        const scrollElScrollHeight = getScrollHeight(scrollEl);
        const isBottom = scrollTop + scrollElHeight >= scrollElScrollHeight && direction === 'down';
        const isTop = scrollTop <= 0 && direction === 'up';

        if (isBottom || isTop) {
          e.cancelable && e.preventDefault();
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
