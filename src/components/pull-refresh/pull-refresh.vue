<template>
  <div class="lake-pull-refresh">
    <div
      class="lake-pull-refresh-wrapper"
      :style="{
        transition: !dragState.isDragging ? transitionStyle : 'transform 0s',
        transform: `translate3d(0, ${pullDistance}px, 0)`,
      }"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      @transitionend.stop
    >
      <div class="lake-pull-refresh-header">
        <div class="lake-pull-refresh-state">
          <span v-if="pullState">{{ pullState }}</span>
        </div>
      </div>
      <div
        class="lake-pull-refresh-content"
        :style="{ minHeight: `${refreshMinHeight}px` }"
        v-show="pullState !== labels.REFRESHING"
      >
        <!-- @slot 可自定义下拉刷新的内容 -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { getScrollTop } from '../../utils/scroll';
import drag from '../../mixins/drag';

/**
 * @version 1.0.1
 * 通过触发，立刻重新加载内容。
 */
export default {
  name: 'lake-pull-refresh',
  mixins: [drag],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    refreshDistance: {
      // 触发刷新的拉动距离
      type: Number,
      default: 60,
    },
    refreshMinHeight: {
      // 可触发下拉的容器高度
      type: Number,
      default: 400,
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
      transitionStyle: 'transform .5s',
      pullDistance: 0,
      pullState: '',
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
        this.pullState = this.labels.REFRESH_END;
        this.pullDistance = 0;
      }
    },
  },
  methods: {
    onTouchStart(e) {
      if (this.disabled) return;

      if (getScrollTop(window) === 0) {
        this.dragStart(e);
      }
    },
    onTouchMove(e) {
      if (this.disabled) return;

      if (getScrollTop(window) === 0 && this.dragState.dragOffsetY <= 0) {
        this.dragMove(e);
        this.pullDistance = Math.abs(this.dragState.dragOffsetY) / 3;

        if (this.pullDistance > 0 && this.dragState.dragOffsetY < 0) {
          e.cancelable && e.preventDefault();
          this.pullState =
            this.pullDistance >= this.refreshDistance ? this.labels.REFRESH_READY : this.labels.REFRESH_START;
        }
      }
    },
    onTouchEnd(e) {
      if (this.disabled) return;

      this.dragEnd(e);

      if (this.pullState === this.labels.REFRESH_READY) {
        this.pullState = this.labels.REFRESHING;
        this.pullDistance = this.refreshDistance;
        /**
         * 刷新回调函数
         *
         * @event refresh
         * @type {undefined}}
         */
        this.$emit('refresh');
      } else {
        this.pullState = this.labels.REFRESH_START;
        this.pullDistance = 0;
      }
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';

.lake-pull-refresh {
  min-height: 400px;
  overflow: hidden;
  &-wrapper {
    will-change: transform;
  }
  &-header {
    width: 100%;
    height: 60px;
    margin-top: -60px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  &-state {
    position: absolute;
    max-width: 90%;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    height: 30px;
    color: @color-text-primary;
    text-align: center;
    font-size: @size-font-md;
  }
}
</style>
