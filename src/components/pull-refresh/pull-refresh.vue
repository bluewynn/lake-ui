<template>
  <div class="lake-pull-refresh">
    <div
      class="lake-pull-refresh-wrapper"
      :style="{
        transition: !isDragging ? transitionStyle : '',
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
      <div class="lake-pull-refresh-content" v-show="pullState !== labels.REFRESHING">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { getScrollTop } from '../../utils.js';

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
      dragStartY: 0,
      dragOffsetY: 0,
      currentOffsetX: 0,
      currentOffsetY: 0,
      currentStartOffsetY: 0,
      isDragging: false,
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

      if (getScrollTop() === 0) {
        this.isDragging = true;
        this.dragStartY = e.touches[0].clientY;
        this.currentStartOffsetY = this.currentOffsetY;
      }
    },
    onTouchMove(e) {
      if (this.disabled || !this.isDragging) return;

      if (getScrollTop() === 0) {
        const { clientX, clientY } = e.touches[0];
        const dragOffsetY = this.dragStartY - clientY;

        this.pullDistance = Math.abs(dragOffsetY) / 3;

        if (this.pullDistance > 0 && dragOffsetY < 0) {
          e.preventDefault();
          this.pullState =
            this.pullDistance >= this.refreshHeight ? this.labels.REFRESH_READY : this.labels.REFRESH_START;
        }
      }
    },
    onTouchEnd() {
      if (this.disabled) return;

      this.isDragging = false;

      if (this.pullState === this.labels.REFRESH_READY) {
        this.pullState = this.labels.REFRESHING;
        this.pullDistance = this.refreshHeight;
        this.$emit('refresh');
      } else {
        this.pullState = this.labels.REFRESH_START;
        this.pullDistance = 0;
      }

      this.dragStartY = 0;
    },
  },
};
</script>

<style lang="less"></style>
