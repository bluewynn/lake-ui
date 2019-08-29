<template>
  <div class="lake-tabs" :class="[fixedClass, size ? `lake-tabs-${size}` : '', !scroll ? 'lake-tabs-noscroll' : '']">
    <div class="lake-tabs-wrapper" ref="tab">
      <div class="lake-tabs-inner">
        <div
          class="lake-tabs-list"
          :style="{
            transform: `translate3d(${tabListX}px, 0, 0)`,
            transition: !dragState.isDragging ? 'transform .5s ease' : 'transform 0 ease',
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
            :class="{ 'lake-tabs-item-active': activeTabIndex === index }"
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
        <div class="lake-tabs-gradient" @click.prevent.stop="onMoreClick" v-if="scroll"></div>
      </div>
      <div class="lake-tabs-more" @click.prevent.stop="onMoreClick" v-if="showMore">
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

const TAB_SIZES = ['normal', 'large'];

export default {
  name: 'lake-tabs',
  mixins: [drag],
  components: { lakeIcon },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: Number,
      default: 0,
    },
    sticky: {
      // 是否支持粘性置顶
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
      validator: value => value === '' || TAB_SIZES.includes(value),
    },
    scroll: {
      type: Boolean,
      default: true,
    },
    showMore: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      activeTabIndex: this.selected,
      tabListX: 0,
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
    selected(selected) {
      this.activeTabIndex = selected;
      this.scrollView(this.activeTabIndex);
    },
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
      if (!this.scroll) return;

      this.dragStart(e);
      this.tabDragPos = this.tabListX;
    },
    onTouchMove(e) {
      if (!this.scroll) return;

      this.dragMove(e);

      if (this.dragState.direction !== 'x') return;

      e.cancelable && e.preventDefault();

      const moveDistance = -this.dragState.dragOffsetX;

      this.tabListX = this.tabDragPos + moveDistance;
    },
    onTouchEnd(e) {
      if (!this.scroll) return;

      this.dragEnd(e);

      const moveDistance = -this.dragState.dragOffsetX;

      this.tabListX = this.getSaveShift(this.tabDragPos + moveDistance);
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
          this.fixedClass = isSupportPositionSticky() ? 'lake-tabs-sticky' : 'lake-tabs-fixed';
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

@tabsPrefixClass: lake-tabs;

.@{tabsPrefixClass} {
  width: 100%;
  height: 40px;
  background-color: white;
  &-wrapper {
    display: flex;
    align-items: flex-start;
    flex-flow: row nowrap;
    height: 100%;
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
    transition: color 0.1s linear;
    .single-line();
    &::after {
      content: ' ';
      width: 0;
      transition: width 0.1s linear;
    }
  }
  &-item-active {
    .@{tabsPrefixClass}-item-name {
      color: @color-text-primary;
      font-weight: bold;
      font-size: 16px;
    }
    .@{tabsPrefixClass}-item-name::after {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 3px;
      transform: translate(-50%, 12px);
      border-radius: 1px;
      background-color: @brand-primary;
    }
  }
  &-more {
    min-width: 30px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    overflow: hidden;
  }
  &-gradient {
    position: absolute;
    top: 0;
    bottom: 0;
    display: block;
    width: 20px;
    z-index: 1;
    right: -1px;
    background: linear-gradient(-90deg, #ffffff 12%, rgba(255, 255, 255, 0) 100%);
  }
  &-fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 -1px 8px 1px rgba(119, 119, 119, 0.6);
  }
  &-sticky {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 -1px 8px 1px rgba(119, 119, 119, 0.6);
  }
  &&-large {
    height: 52px;
    .@{tabsPrefixClass}-item {
      padding: 0 15px;
    }
    .@{tabsPrefixClass}-item-name {
      line-height: 22px;
      padding: 15px 0;
      max-width: 150px;
    }
  }
  &&-noscroll {
    .@{tabsPrefixClass}-list {
      display: flex;
      align-items: center;
    }
    .@{tabsPrefixClass}-item {
      flex: 1;
    }
    .@{tabsPrefixClass}-item-name {
      font-size: 16px;
    }
  }
}
</style>
