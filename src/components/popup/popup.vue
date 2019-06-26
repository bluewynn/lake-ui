<template>
  <div>
    <transition name="lake-fade" appear>
      <div
        :class="['lake-mask', transparent ? 'lake-transparent' : '']"
        :style="maskStyle"
        v-if="show"
        @click="onClickMask"
      ></div>
    </transition>
    <transition :name="transitionName" appear>
      <div
        class="lake-popup"
        ref="popup"
        :class="position ? `lake-popup-${position}` : 'lake-popup-center'"
        v-if="show"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import drag from '../../mixins/drag';
import { getScrollTop, getScrollHeight, getScrollParent } from '../../utils/scroll';
import { on, off } from '../../utils/event';

const POPUP_POSITIONS = ['top', 'center', 'bottom', 'full-screen', 'right', 'full-screen-left', 'full-screen-right'];

export default {
  name: 'lake-popup',
  mixins: [drag],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: true,
    },
    transparent: {
      type: Boolean,
      default: false,
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
    lockScroll: {
      type: Boolean,
      default: false,
    },
    animate: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    transitionName() {
      if (!this.animate) return '';

      const transitionMap = {
        top: 'lake-slide-reverse',
        right: 'lake-slide-right',
        center: 'lake-fade',
        bottom: 'lake-slide',
        'full-screen': 'lake-slide',
      };

      return this.position ? transitionMap[this.position] : transitionMap.center;
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
    open() {
      if (this.lockScroll) {
        if (!document.body.classList.contains('lake-mask-open')) {
          document.body.classList.add('lake-mask-open');
        }

        // set passive false to enable preventDefault
        const eventOption = { capture: false, passive: false };

        on(document, 'touchstart', this.dragStart, eventOption);
        on(document, 'touchmove', this.onTouchMove, eventOption);
        on(document, 'touchend', this.dragEnd, eventOption);
      }
    },
    close() {
      if (this.lockScroll) {
        if (document.body.classList.contains('lake-mask-open')) {
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
        // scroll element is document, should prevent scroll
        e.cancelable && e.preventDefault();
      } else {
        // scroll element is not document, e.g. a div with css overflow.
        const scrollTop = getScrollTop(scrollEl);
        const scrollElHeight = scrollEl.clientHeight;
        const scrollElScrollHeight = getScrollHeight(scrollEl);
        const isBottom = scrollTop + scrollElHeight >= scrollElScrollHeight && direction === 'down';
        const isTop = scrollTop <= 0 && direction === 'up';

        if (isBottom || isTop) {
          // should prevent scroll when scroll bar is reach to top or bottom, cause mobile scroll bug
          e.cancelable && e.preventDefault();
        }
      }
    },
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
  min-width: 200px;
  max-height: 100%;
  -webkit-overflow-scrolling: touch;
  z-index: @z-index-popup;
  &&-center {
    transform: translate3d(-50%, -50%, 0);
  }
  &&-top {
    top: 0;
    left: 0;
    transform: translate3d(0, 0, 0);
    width: 100%;
  }
  &&-right {
    left: initial;
    top: 0;
    right: 0;
    bottom: 0;
    transform: translate3d(0, 0, 0);
    width: 200px;
    max-width: 300px;
    height: 100%;
  }
  &&-bottom,
  &&-full-screen {
    top: initial;
    left: 0;
    bottom: 0;
    transform: translate3d(0, 0, 0);
    width: 100%;
  }
  &&-full-screen {
    height: 100vh;
  }
}
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
  &&-transparent {
    background-color: transparent;
  }
}
</style>
