<template>
  <div class="tabs-container">
    <div class="tabs" ref="tab">
      <div class="tab-inner">
        <div
          class="tab-list"
          :class="{ 'drag': isDraging }"
          :style="{ transform: `translate3d(${tabListX}px, 0, 0)` }"
          ref="tabList"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div
            class="tab-item"
            :class="{ 'active': activeTabIndex === index }"
            v-for="(tab, index) in tabs"
            :key="index"
            ref="tabItems"
            @click="handleTabClick(tab, index)"
          >
            <div class="tab-name">{{ tab.name }}</div>
          </div>
        </div>
        <div class="gradient bg-sprites"></div>
      </div>
      <div class="tab-more" @click="handleMoreClick">
        <span class="bg-sprites icon-more"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lake-tabs',
  props: {
    tabs: {
      type: Array,
    },
    animated: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    isDraging: false,
    activeTabIndex: 0,
    tabListX: 0,
    dragStart: 0,
    tabDragPos: 0,
  }),
  watch: {
    activeTabIndex: {
      handler(index) {
        this.$emit('on-tab-change', { tab: this.tabs[index], index });
      },
    },
  },
  methods: {
    handleTabClick(tab, index) {
      this.activeTabIndex = index;
      this.scrollView(index);
      this.$emit('on-tab-click', { tab, index });
    },
    handleMoreClick() {
      this.$emit('on-more-click');
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

<style lang="less" scoped>
.tabs-container {
  width: 100%;
  background-color: white;
  box-shadow: 0 0 0 0 #ffffff;
  transition: box-shadow 5.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: flex;

  .tab-inner {
    position: relative;
    overflow: hidden;
    flex: 1;
  }
  .tab-list {
    width: 100%;
    white-space: nowrap;
    touch-action: pan-x;
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    will-change: transform;
    &.drag {
      transition: none;
    }
  }
  .tab-item {
    padding: 0 10px;
    height: 42px;
    display: inline-block;
    text-align: center;
    line-height: 42px;
    transition: color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    .tab-name {
      position: relative;
    }
    &.active {
      color: #2f8def;
      .tab-name::after {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        content: ' ';
        border-bottom: 2px solid #2f8def;
      }
    }
  }
  .tab-more {
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
  .gradient {
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
