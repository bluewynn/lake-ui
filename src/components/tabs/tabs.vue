<template>
  <div class="lake-tabs">
    <div class="lake-tabs-wrapper" ref="tab">
      <div class="lake-tabs-inner">
        <div
          class="lake-tabs-list"
          :style="{
            width: `${tabListWidth}px`,
            transform: `translate3d(${tabListX}px, 0, 0)`
          }"
          ref="tabList"
        >
          <div
            class="lake-tabs-item"
            :class="{ 'active': activeTabIndex === index }"
            v-for="(tab, index) in tabs"
            :key="index"
            ref="tabItems"
            @click="onTabClick(tab, index)"
          >
            <div class="tab-name">{{ tab.name }}</div>
          </div>
          <div
            class="lake-tabs-item-active"
            :style="{
              width: `${tabItemWidth}px`,
              transform: `translate3d(${activeLineOffsetLeft}px, 0, 0)`,
            }"
          ></div>
        </div>
        <div
          class="lake-tabs-panel-list"
          :style="{
            width: `${tabPanelListWidth}px`,
            transform: `translate3d(${-activePanelOffsetLeft}px, 0, 0)`,
          }"
        >
          <slot></slot>
        </div>
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
    activeTabIndex: 0,
    tabListX: 0,
    tabContainerWidth: 0,
    tabListWidth: 0,
    tabItemWidth: 0,
    tabPanelListWidth: 0,
    activeLineOffsetLeft: 0,
    activePanelOffsetLeft: 0,
  }),
  watch: {
    activeTabIndex: {
      handler(index) {
        this.moveActiveLine(index);
        this.moveTabPanel(index);
        this.$emit('change', this.tabs[index], index);
      },
    },
    tabs: 'adjustTabsSize',
  },
  methods: {
    adjustTabsSize() {
      this.tabContainerWidth = this.$el.clientWidth || document.body.clientWidth;
      this.tabItemWidth = this.tabs.length > 2 ? this.tabContainerWidth / 3 : this.tabContainerWidth / this.tabs.length;
      this.tabListWidth = this.tabItemWidth * this.tabs.length;
      this.tabPanelListWidth = this.tabContainerWidth * this.tabs.length;
    },
    onTabClick(tab, index) {
      this.activeTabIndex = index;
      this.$emit('tab-click', tab, index);
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
    moveActiveLine(index) {
      this.activeLineOffsetLeft = this.tabItemWidth * index;
    },
    moveTabPanel(index) {
      this.activePanelOffsetLeft = this.tabContainerWidth * index;
    },
  },
  mounted() {
    this.adjustTabsSize();
    window.addEventListener('resize', this.adjustTabsSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.adjustTabsSize);
  },
};
</script>

<style lang="less" scoped>
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-tabs {
  &-inner {
    overflow: hidden;
  }
  &-list {
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;

    .border-1px-top();
    .border-1px-bottom();
  }
  &-item {
    flex: 1;
    line-height: 40px;
    padding: 0 10px;
    background-color: #fff;

    &.active {
      color: @color-text-link;
    }
  }
  &-item-active {
    position: absolute;
    left: 0;
    bottom: 0;
    border: 1px solid @color-text-link;
    transition: transform ease 0.3s;
  }
  &-panel-list {
    display: flex;
    transition: transform ease 0.3s;
  }
}
.lake-tab {
  flex: 1;
  background-color: #fff;
  padding: 10px;
  min-height: 100px;
}
</style>
