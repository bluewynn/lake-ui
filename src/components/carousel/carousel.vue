<template>
  <div class="lake-carousel" :class="transparentSide ? 'transparent-side' : ''">
    <div class="lake-carousel-wrapper" :style="{ overflow: !transparentSide ? 'hidden' : 'initial' }">
      <div
        class="lake-carousel-inner"
        :style="{
          transform: `translate3d(${currentOffsetX}px, 0, 0)`,
          transition: !dragState.isDragging ? transitionStyle : 'transform 0s ease',
          width: `${carouselWidth}px`,
          height: `${carouselMinHeight}px`,
        }"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
        @transitionend.stop
      >
        <slot></slot>
      </div>
    </div>
    <div class="lake-carousel-indicators" :style="indicatorContainerStyle" v-if="indicate && carouselItemCount > 1">
      <div
        class="lake-carousel-indicator"
        :class="[currentCarouselItemIndex + 1 === n ? 'active' : '']"
        :style="currentCarouselItemIndex + 1 === n ? indicatorItemActiveStyle : indicatorItemStyle"
        v-for="n in carouselItemCount"
        :key="n"
        @click.prevent="moveToPage(n - 1)"
      ></div>
    </div>
  </div>
</template>

<script>
import drag from '../../mixins/drag';
import { once } from '../../utils/event.js';

export default {
  name: 'lake-carousel',
  mixins: [drag],
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    indicate: {
      type: Boolean,
      default: true,
    },
    auto: {
      type: Boolean,
      default: false,
    },
    delay: {
      type: Number,
      default: 3000,
    },
    swipeDistance: {
      type: Number,
      default: 50,
    },
    transparentSide: {
      type: Boolean,
      default: false,
    },
    indicatorContainerStyle: Object,
    indicatorItemStyle: Object,
    indicatorItemActiveStyle: Object,
  },
  data() {
    return {
      containerWidth: 0,
      carouselWidth: 0,
      carouselMinHeight: 0,
      transitionStyle: 'transform .5s ease',
      currentCarouselItemIndex: 0,
      carouselItemCount: 0,
      currentOffsetX: 0,
      currentOffsetY: 0,
      currentStartOffsetX: 0,
      isAnimating: false,
      timerId: null,
    };
  },
  mounted() {
    this.$nextTick().then(() => {
      once(window, 'resize', this.adjustCarouselSize);

      this.adjustCarouselSize();
      this.startInterval();
      this.setActiveCarouselItem(0);
    });
  },
  beforeDestroy() {
    this.stopInterval();
  },
  computed: {
    prevPage() {
      if (this.currentCarouselItemIndex > 0) {
        return this.currentCarouselItemIndex - 1;
      }

      return 0;
    },
    nextPage() {
      if (this.currentCarouselItemIndex < this.carouselItemCount - 1) {
        return this.currentCarouselItemIndex + 1;
      }

      return this.carouselItemCount - 1;
    },
    minOffset() {
      return -this.containerWidth * (this.loop ? this.carouselItemCount : this.carouselItemCount - 1) - 60;
    },
    maxOffset() {
      return this.loop ? 60 + this.containerWidth : 60;
    },
  },
  watch: {
    currentCarouselItemIndex(index) {
      this.setActiveCarouselItem(index);
    },
  },
  methods: {
    startInterval() {
      if (!this.auto) return;

      this.stopInterval();
      this.timerId = setInterval(() => {
        if (this.currentCarouselItemIndex === this.nextPage) {
          this.moveToPage(0);
        } else {
          this.moveToPage(this.nextPage);
        }
      }, this.delay);
    },
    stopInterval() {
      if (this.auto) {
        clearInterval(this.timerId);
      }
    },
    adjustCarouselSize() {
      this.containerWidth = this.width || (this.$el && this.$el.clientWidth) || 'auto';
      this.carouselItemCount =
        (this.$slots &&
          this.$slots.default &&
          this.$slots.default.filter(slot => slot.tag && slot.tag.indexOf('lake-carousel-item') > -1).length) ||
        0;
      this.carouselWidth = this.containerWidth * this.carouselItemCount;
      this.carouselMinHeight = this.height || (this.$el && this.$el.clientHeight) || 0;
    },
    onTouchStart(e) {
      this.dragStart(e);
      this.currentStartOffsetX = this.currentOffsetX;
      this.currentStartOffsetY = this.currentOffsetY;
    },
    onTouchMove(e) {
      this.dragMove(e);

      if (this.dragState.direction !== 'x') return;

      e.preventDefault();

      const currentOffsetX = this.currentStartOffsetX - this.dragState.dragOffsetX;

      if (currentOffsetX > this.maxOffset) {
        this.currentOffsetX = this.maxOffset;
      } else if (currentOffsetX < this.minOffset) {
        this.currentOffsetX = this.minOffset;
      } else {
        this.currentOffsetX = currentOffsetX;
      }
    },
    onTouchEnd(e) {
      this.dragEnd(e);

      if (this.dragState.dragOffsetX > this.swipeDistance) {
        // 左滑
        this.moveToPage(this.nextPage);
      } else if (this.dragState.dragOffsetX < -this.swipeDistance) {
        // 右滑
        this.moveToPage(this.prevPage);
      } else {
        // 复位
        this.moveToPage(this.currentCarouselItemIndex);
      }

      this.startInterval();
    },
    moveToPage(page) {
      this.isAnimating = true;
      this.currentCarouselItemIndex = page;
      this.currentOffsetX = this.currentCarouselItemIndex * this.containerWidth * -1;
      this.$emit('change', this.currentCarouselItemIndex);
    },
    setActiveCarouselItem(index) {
      if (this.$children && this.$children.length) {
        this.$children.forEach(($vm, i) => {
          $vm.active = index === i;
        });
      }
    },
  },
};
</script>

<style lang="less">
.lake-carousel {
  position: relative;
  overflow: hidden;
  &-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  &-inner {
    display: flex;
    height: 100%;
    align-items: flex-start;
    flex-direction: row;
    backface-visibility: hidden;
    touch-action: pan-x;
  }
  &-item {
    position: relative;
    flex: 1;
    align-self: stretch;
    user-select: none;
  }
  &-indicators {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
  &-indicator {
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 100%;
    background-color: #b3b1b1;
    margin: 0 3px;
    &.active {
      background-color: #fff;
    }
  }
  &.transparent-side &-item {
    transition: opacity ease 0.2s;
    opacity: 0.75;
  }
  &.transparent-side &-item.active {
    opacity: 1;
  }
}
</style>
