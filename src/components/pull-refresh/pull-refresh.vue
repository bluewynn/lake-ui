<template>
  <div class="pull-down-container">
    <div
      class="pull-down-wrapper"
      :style="pullDown.animationStyle"
      @transitionend="onTransitionEnd"
    >
      <div class="pull-down-header">
        <div class="pull-down-content" ref="pull-down-content">
          <span v-if="labels[pullDown.state]">{{ labels[pullDown.state] }}</span>
        </div>
      </div>

      <transition name="fade">
        <div class="refresh-content" v-show="pullDown.state !== 'REFRESHING'">
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { getScrollTop } from '../../utils.js';

// 刷新状态
const types = {
  REFRESH_START: 'REFRESH_START',
  REFRESH_READY: 'REFRESH_READY',
  REFRESHING: 'REFRESHING',
  REFRESH_END: 'REFRESH_END',
};

export default {
  name: 'lake-pull-refresh',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    refreshHeight: {
      type: Number,
      default: 60,
    },
    refreshStartText: {
      type: String,
      default: '下拉刷新',
    },
    refreshReadyText: {
      type: String,
      default: '释放刷新',
    },
    refreshingText: {
      type: String,
      default: '正在加载...',
    },
    refreshEndText: {
      type: String,
      default: '加载完成',
    },
  },
  data() {
    return {
      touchPosition: {
        start: 0,
      },
      pullDown: {
        state: types.REFRESH_START,
        height: 0,
        animationStyle: {
          transition: '',
          transform: 'translate3d(0, 0, 0)',
        },
      },
    };
  },
  computed: {
    labels() {
      return {
        REFRESH_START: this.refreshStartText,
        REFRESH_READY: this.refreshReadyText,
        REFRESHING: this.refreshingText,
        REFRESH_END: this.refreshEndText,
      };
    },
  },
  watch: {
    loading(loading) {
      if (!loading) {
        // 刷新结束，重置状态
        this.pullDown = {
          state: types.REFRESH_END,
          height: 0,
          animationStyle: {
            transition: 'transform .4s',
            transform: 'translate3d(0, 0, 0)',
          },
        };
      }
    },
  },
  mounted() {
    if (!this.disabled) {
      this.$el.addEventListener('touchstart', this.onTouchStart);
      this.$el.addEventListener('touchmove', this.onTouchMove);
      this.$el.addEventListener('touchend', this.onTouchEnd);
    }
  },
  beforeDestroy() {
    if (!this.disabled) {
      this.$el.removeEventListener('touchstart', this.onTouchStart);
      this.$el.removeEventListener('touchmove', this.onTouchMove);
      this.$el.removeEventListener('touchend', this.onTouchEnd);
    }
  },
  methods: {
    onTouchStart($event) {
      if (getScrollTop() === 0) {
        this.touchPosition.start = $event.touches.item(0).pageY;
      }
    },
    onTouchMove($event) {
      // 记录下拉距离
      let distance = $event.touches.item(0).pageY - this.touchPosition.start;

      if (distance > 0 && getScrollTop() === 0 && this.pullDown.state !== types.REFRESHING) {
        $event.preventDefault();

        distance /= 3;

        this.pullDown.height = distance;
        this.pullDown.animationStyle.transform = `translate3d(0, ${distance}px, 0)`;

        if (distance >= this.refreshHeight) {
          // ready to refresh
          this.pullDown.state = types.REFRESH_READY;
        } else {
          // no ready
          this.pullDown.state = types.REFRESH_START;
        }
      }
    },
    onTouchEnd() {
      if (getScrollTop() === 0) {
        this.pullDown.animationStyle.transition = 'transform .4s';

        if (this.pullDown.state === types.REFRESH_READY) {
          // now refresh
          this.pullDown.state = types.REFRESHING;
          this.pullDown.height = this.refreshHeight;
          this.pullDown.animationStyle.transform = `translate3d(0, ${this.refreshHeight}px, 0)`;

          this.$emit('refresh');
        } else {
          // reset
          this.pullDown.state = types.REFRESH_START;
          this.pullDown.height = 0;
          this.pullDown.animationStyle.transform = 'translate3d(0, 0, 0)';
        }

        this.touchPosition.distance = 0;
        this.touchPosition.start = 0;
      }
    },
    onTransitionEnd() {
      this.pullDown.animationStyle.transition = '';

      // 刷新动画结束重置状态
      if (this.pullDown.state === types.REFRESH_END) {
        this.pullDown.state = types.REFRESH_START;
      }
    },
  },
};
</script>
