<template>
  <div class="lake-tabs" :class="fixedClass">
    <div class="lake-tabs-wrapper" ref="tab">
      <div class="lake-tabs-inner">
        <div
          class="lake-tabs-list"
          :class="{ drag: isDraging }"
          :style="{ transform: `translate3d(${tabListX}px, 0, 0)` }"
          ref="tabList"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div
            class="lake-tabs-item"
            :class="{ active: activeTabIndex === index }"
            v-for="(tab, index) in tabs"
            :key="index"
            ref="tabItems"
            @click="handleTabClick(tab, index)"
          >
            <div class="lake-tabs-item-name">
              <slot name="tab-item" :tab="tab">{{ tab }}</slot>
            </div>
          </div>
        </div>
        <div class="lake-tabs-gradient bg-sprites"></div>
      </div>
      <div class="lake-tabs-more" @click="handleMoreClick">
        <slot name="tabs-more">
          <span class="bg-sprites icon-more"></span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { on, off } from '../../utils/event.js';

export default {
  name: 'lake-tabs',
  props: {
    tabs: {
      type: Array,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isDraging: false,
    activeTabIndex: 0,
    tabListX: 0,
    dragStart: 0,
    tabDragPos: 0,
    fixedClass: '',
  }),
  mounted() {
    this.onScrollFixed();
  },
  beforeDestroy() {
    if (this.fixed) {
      off(window, 'scroll', this.handleScroll);
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
    handleTabClick(tab, index) {
      this.activeTabIndex = index;
      this.scrollView(index);
      this.$emit('tab-click', { tab, index });
    },
    handleMoreClick() {
      this.$emit('more-click');
    },
    handleTouchStart(e) {
      this.dragStart = e.touches[0].clientX;
      this.tabDragPos = this.tabListX;
    },
    handleTouchMove(e) {
      const moveDistance = e.touches[0].clientX - this.dragStart;

      e.preventDefault();

      this.isDraging = true;
      this.tabListX = this.getSaveShift(this.tabDragPos + moveDistance);
    },
    handleTouchEnd() {
      this.isDraging = false;
    },
    onScrollFixed() {
      if (this.fixed) {
        const { offsetTop } = this.$el;

        on(window, 'scroll', this.handleScroll.bind(this, offsetTop));
      }
    },
    handleScroll(offsetTop) {
      window.requestAnimationFrame(() => {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

        if (scrollTop >= offsetTop) {
          this.fixedClass = window.is_support_css_position_sticky ? 'sticky' : 'fixed';
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
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    will-change: transform;
    &.drag {
      transition: none;
    }
  }
  &-item {
    padding: 0 15px;
    display: inline-block;
    text-align: center;
  }
  &-item-name {
    position: relative;
    font-size: 14px;
    color: @color-text-gray;
    line-height: 20px;
    padding: 10px 0;
    transition: color, font-size 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
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
      left: 0;
      width: 100%;
      border-bottom: 3px solid @brand-primary;
    }
  }
  &-more {
    width: 20px;
    height: 20px;
    padding: 11px;
    line-height: 20px;
    text-align: center;
    overflow: hidden;
    .icon-more {
      background-position: 3px -3864px;
      width: 20px;
      height: 20px;
      display: inline-block;
    }
  }
  &-gradient {
    pointer-events: none;
    position: absolute;
    top: 0;
    display: block;
    width: 12px;
    height: 100%;
    z-index: 1;
    right: 0;
    background-position: -29px -3868px;
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
