<template>
  <div class="tab-bar" :class="[
      `fixed-${position}`,
    ]" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
const TAB_POSITIONS = ['top', 'bottom'];

export default {
  name: 'lake-tab-bar',
  props: {
    selected: {
      type: String,
      default: '',
    },
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
    show: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: 'bottom',
      validator(pos) {
        return TAB_POSITIONS.includes(pos);
      },
    },
  },
  data() {
    return {
      crtTab: this.selected || this.tabs[0].name,
    };
  },
  watch: {
    crtTab(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
    },
  },
};
</script>

<style lang="less">
@import '../../style/common/mixins.less';

@color-primary: #007bff;

.tab-bar {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  min-height: 45px;
  background-color: #fff;
  .border-1px-top();
  .border-1px-bottom();
  &.popup {
    animation: popup 0.2s;
  }
  &.popin {
    animation: popin 0.2s;
  }

  &.fixed-bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
  }
  &.fixed-top {
    position: relative;
    z-index: 1;
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 13px;
    color: #333;
    transition: color 0.2s;
    &.active {
      color: @color-primary;
    }
  }

  @keyframes popup {
    from {
      transform: translate3d(0, 45px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes popin {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 45px, 0);
    }
  }
}
</style>
