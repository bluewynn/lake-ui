<template>
  <div class="lake-carousel">
    <div class="lake-carousel-wrapper">
      <div
        class="lake-carousel-inner"
        :style="{
          transform: `translate3d(${currentOffsetX}px, 0, 0)`,
          transition: isAnimating ? transitionStyle : '',
          width: `${carouselWidth}px`,
          height: `${carouselMinHeight}px`,
        }"
        @transitionend="onTransitionEnd"
      >
        <slot></slot>
      </div>
    </div>
    <div
      class="lake-carousel-indicators"
      :style="indicatorContainerStyle"
      v-if="indicate && carouselItemCount > 1"
    >
      <div
        class="lake-carousel-indicator"
        :class="currentCarouselItemIndex + 1 === n ? 'active' : ''"
        v-for="n in carouselItemCount"
        :key="n"
        @click.prevent="moveToPage(n - 1)"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lake-carousel',
  props: {
    auto: {
      type: Boolean,
      default: false,
    },
    indicate: {
      type: Boolean,
      default: false,
    },
    loop: {
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
    rate: {
      type: Number,
      default: 190 / 375,
    },
    indicatorContainerStyle: Object,
  },
  data() {
    return {
      containerWidth: 0,
      carouselWidth: 0,
      carouselMinHeight: 0,
      transitionStyle: 'transform .5s ease',
      currentCarouselItemIndex: 0,
      carouselItemCount: 0,
      dragOffsetX: 0,
      dragStartX: 0,
      currentOffsetX: 0,
      currentStartOffsetX: 0,
      isDragging: false,
      isAnimating: false,
      timerId: null,
    };
  },
  mounted() {
    this.$nextTick().then(() => {
      window.addEventListener('resize', this.adjustCarouselSize);

      this.$el.addEventListener('touchstart', this.onTouchStart);
      this.$el.addEventListener('touchmove', this.onTouchMove);
      this.$el.addEventListener('touchend', this.onTouchEnd);

      this.adjustCarouselSize();
      this.startInterval();
    });
  },
  destroyed() {
    window.removeEventListener('resize', this.adjustCarouselSize);

    this.$el.removeEventListener('touchstart', this.onTouchStart);
    this.$el.removeEventListener('touchmove', this.onTouchMove);
    this.$el.removeEventListener('touchend', this.onTouchEnd);
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
    currentOffsetX(currentOffsetX) {
      if (currentOffsetX > this.currentStartOffsetX) {
      } else if (currentOffsetX < this.currentStartOffsetX) {
      } else {
      }
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
      this.containerWidth = this.$el.clientWidth || document.body.clientWidth;
      this.carouselItemCount =
        (this.$slots &&
          this.$slots.default &&
          this.$slots.default.filter(slot => slot.tag && slot.tag.indexOf('lake-carousel-item') > -1).length) ||
        0;
      this.carouselWidth = this.containerWidth * this.carouselItemCount;
      this.carouselMinHeight = this.containerWidth * this.rate;
    },
    onTouchStart(e) {
      if (!e.touches) {
        e.preventDefault();
      }
      if (this.isDragging) return;

      this.stopInterval();
      this.isDragging = true;
      this.dragStartX = e.touches[0].clientX;
      this.currentStartOffsetX = this.currentOffsetX;
    },
    onTouchMove(e) {
      if (!this.isDragging) return;

      const { clientX } = e.touches[0];
      const dragOffsetX = this.dragStartX - clientX;
      const currentOffsetX = this.currentStartOffsetX - this.dragOffsetX;

      if (currentOffsetX > this.maxOffset) {
        this.currentOffsetX = this.maxOffset;
      } else if (currentOffsetX < this.minOffset) {
        this.currentOffsetX = this.minOffset;
      } else {
        this.dragOffsetX = dragOffsetX;
        this.currentOffsetX = currentOffsetX;
      }
    },
    onTouchEnd() {
      if (!this.isDragging) return;

      this.isDragging = false;
      this.isAnimating = true;

      if (this.dragOffsetX > this.swipeDistance) {
        this.moveToPage(this.nextPage);
      } else if (this.dragOffsetX < -this.swipeDistance) {
        this.moveToPage(this.prevPage);
      } else {
        this.moveToPage(this.currentCarouselItemIndex);
      }

      this.startInterval();
    },
    onTransitionEnd() {
      this.isAnimating = false;
      this.dragOffsetX = 0;
    },
    moveToPage(page) {
      this.currentCarouselItemIndex = page;
      this.currentOffsetX = this.currentCarouselItemIndex * this.containerWidth * -1;
      this.isAnimating = true;

      this.$emit('change', this.currentCarouselItemIndex);
    },
  },
};
</script>

<style lang="less" scoped>
.lake-carousel {
  position: relative;
  &-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  &-inner {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
  &-item {
    position: relative;
    flex: 1;
    user-select: none;
  }
  &-indicators {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
  &-indicator {
    width: 4px;
    height: 4px;
    display: inline-block;
    border-radius: 100%;
    background-color: rgba(134, 134, 134, 0.8);
    margin: 0 3px;
    border: 1px solid transparent;
    &.active {
      background-color: #fff;
      border: 1px solid rgba(134, 134, 134, 0.8);
    }
  }
}
</style>
