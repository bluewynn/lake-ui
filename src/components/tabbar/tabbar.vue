<template>
  <transition :name="transitionName">
    <div class="lake-tabbar" :class="`fixed-${position}`" v-show="show">
      <div class="lake-tabbar-wrapper">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
const TAB_POSITIONS = ['top', 'bottom'];

export default {
  name: 'lake-tabbar',
  props: {
    selected: {
      type: Number,
      default: 0,
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
        return pos === '' || TAB_POSITIONS.includes(pos);
      },
    },
  },
  data() {
    return {
      crtTabIndex: this.selected,
    };
  },
  computed: {
    transitionName() {
      return this.position === '' || this.position === 'top' ? 'lake-slide-down' : 'lake-slide-up';
    },
  },
  watch: {
    selected(newVal) {
      this.crtTabIndex = newVal;
    },
    crtTabIndex(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
    },
  },
};
</script>

<style lang="less">
@import '../../style/common/mixins.less';

.lake-tabbar {
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #f9f9f9;
  .border-1px-top();
  .border-1px-bottom();
  &-wrapper {
    width: 100%;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-item {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    min-height: 50px;
    color: @color-text-secondary;
    transition: color 0.2s;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    &.active {
      color: @color-text-link;
    }
  }
  &-item-text {
    line-height: 1.5;
  }
  &-item-badge {
    position: absolute;
    top: 5px;
    left: 50%;
    margin-left: 3px;
  }
  &.fixed-bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: @z-index-navigation;
  }
  &.fixed-bottom &-wrapper {
    .iphonex-padding-bottom(#f9f9f9);
  }
}

@keyframes lake-slide-up {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
}
@keyframes lake-slide-down {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, -100%, 0);
    opacity: 0;
  }
}

.lake-slide-up-enter-active {
  animation: lake-slide-up reverse 0.3s;
}
.lake-slide-up-leave-active {
  animation: lake-slide-up 0.3s;
}
.lake-slide-down-enter-active {
  animation: lake-slide-down reverse 0.3s;
}
.lake-slide-down-leave-active {
  animation: lake-slide-down 0.3s;
}
</style>
