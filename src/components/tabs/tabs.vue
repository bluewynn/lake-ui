<template>
  <div class="lake-tabs" :class="fixedClass">
    <div class="lake-tabs-wrapper" ref="tab">
      <div class="lake-tabs-inner">
        <div
          class="lake-tabs-list"
          :style="{
            transform: `translate3d(${tabListX}px, 0, 0)`,
            transition: !dragState.isDragging
              ? 'transform .5s cubic-bezier(0.075, 0.82, 0.165, 1)'
              : 'transform 0s ease',
          }"
          ref="tabList"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
          @touchcancel="onTouchEnd"
          @transitionend.stop
        >
          <div
            class="lake-tabs-item"
            :class="{ active: activeTabIndex === index }"
            v-for="(tab, index) in tabs"
            :key="index"
            ref="tabItems"
            @click="onTabClick(tab, index)"
          >
            <div class="lake-tabs-item-name">
              <slot name="tab-item" :tab="tab">{{ tab }}</slot>
            </div>
          </div>
        </div>
        <div class="lake-tabs-gradient" @click.prevent.stop="onMoreClick"></div>
      </div>
      <div class="lake-tabs-more" @click.prevent.stop="onMoreClick">
        <slot name="tabs-more">
          <lake-icon name="sort" size="md" fill="#B3B3B3"></lake-icon>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { on, off } from '../../utils/event.js';
import { getScrollTop } from '../../utils/scroll.js';
import { isSupportPositionSticky } from '../../utils/browser-ability.js';
import drag from '../../mixins/drag';
import lakeIcon from '../icon';

export default {
  name: 'lake-tabs',
  components: { lakeIcon },
  mixins: [drag],
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    sticky: {
      // 是否支持粘性置顶
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeTabIndex: 0,
      tabListX: 0,
      dd: 0,
      tabDragPos: 0,
      fixedClass: '',
    };
  },
  mounted() {
    this.onScrollFixed();
  },
  beforeDestroy() {
    if (this.sticky) {
      off(window, 'scroll', this.onScroll);
    }
  },
  watch: {
    activeTabIndex: {
      handler(index) {
        this.$emit('change', { tab: this.tabs[index], index });
      },
    },
  },
  methods: {
    onTabClick(tab, index) {
      this.activeTabIndex = index;
      this.scrollView(index);
      this.$emit('tab-click', { tab, index });
    },
    onMoreClick() {
      this.$emit('more-click');
    },
    onTouchStart(e) {
      this.dragStart(e);
      this.tabDragPos = this.tabListX;
    },
    onTouchMove(e) {
      this.dragMove(e);

      if (this.dragState.direction !== 'x') return;

      e.preventDefault();

      const moveDistance = -this.dragState.dragOffsetX;

      this.tabListX = this.getSaveShift(this.tabDragPos + moveDistance);
    },
    onTouchEnd(e) {
      this.dragEnd(e);
    },
    onScrollFixed() {
      if (this.sticky) {
        const { offsetTop } = this.$el;

        on(window, 'scroll', this.onScroll.bind(this, offsetTop));
      }
    },
    onScroll(offsetTop) {
      window.requestAnimationFrame(() => {
        const scrollTop = getScrollTop(window);

        if (scrollTop >= offsetTop) {
          this.fixedClass = isSupportPositionSticky() ? 'sticky' : 'fixed';
        } else {
          this.fixedClass = '';
        }
      });
    },
    scrollView(index) {
      const { tabList: $tabList, tabItems: $tabItems } = this.$refs;
      const { offsetWidth: curTabItemWidth, offsetLeft: curTabItemLeft } = $tabItems[index];
      const to = this.tabListX + curTabItemLeft;
      const from = this.tabListX + ($tabList.offsetWidth - curTabItemWidth) / 2;
      const shift = from - to;

      this.tabListX = this.getSaveShift(shift);
    },
    getSaveShift(shift) {
      const { tabList: $tabList, tabItems: $tabItems } = this.$refs;
      let maxShift = $tabItems.reduce((acc, cur) => acc + cur.offsetWidth, 0) - $tabList.offsetWidth;
      let saveShift = 0;

      maxShift = maxShift < 0 ? 0 : maxShift;
      saveShift = shift > 0 ? 0 : shift;
      saveShift = saveShift < -maxShift ? -maxShift : saveShift;

      return saveShift;
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-tabs {
  width: 100%;
  background-color: white;
  &-wrapper {
    display: flex;
    align-items: flex-start;
    flex-flow: row nowrap;
  }
  &-inner {
    position: relative;
    overflow: hidden;
    flex: 1;
  }
  &-list {
    width: 100%;
    white-space: nowrap;
    touch-action: pan-x;
    will-change: transform;
  }
  &-item {
    padding: 0 15px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
  }
  &-item-name {
    position: relative;
    font-size: 14px;
    color: @color-text-gray;
    line-height: 20px;
    padding: 10px 0;
    max-width: 150px;
    overflow: hidden;
    transition: color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    .single-line();
  }
  &-item.active {
    .lake-tabs-item-name {
      color: @color-text-primary;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      padding: 10px 0;
    }
    .lake-tabs-item-name::after {
      content: ' ';
      display: block;
      position: absolute;
      bottom: 2px;
      left: 50%;
      width: 20px;
      height: 3px;
      transform: translateX(-50%);
      border-radius: 1px;
      background-color: @brand-primary;
    }
  }
  &-more {
    position: relative;
    padding: 12px 15px 12px 0;
    display: flex;
    align-items: center;
    text-align: center;
    overflow: hidden;
  }
  &-gradient {
    position: absolute;
    top: 0;
    display: block;
    width: 20px;
    height: 40px;
    z-index: 1;
    right: -1px;
    background: linear-gradient(-90deg, #ffffff 12%, rgba(255, 255, 255, 0) 100%);
  }
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 -1px 8px 1px rgba(119, 119, 119, 0.6);
  }
  &.sticky {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 -1px 8px 1px rgba(119, 119, 119, 0.6);
  }
}
</style>
