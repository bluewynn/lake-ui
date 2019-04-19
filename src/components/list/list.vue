<template>
  <div class="lake-list" ref="list">
    <slot></slot>
    <slot name="loading" v-if="loading">
      <div class="lake-list-loading">
        <div class="lake-list-loading-dots regular">
          <div class="lake-list-dot first"></div>
          <div class="lake-list-dot second"></div>
          <div class="lake-list-dot third"></div>
        </div>
      </div>
    </slot>
    <slot name="finished" v-if="finished">
      <div class="lake-list-finished">没有更多了</div>
    </slot>
  </div>
</template>

<script>
import { on, off } from '../../utils/event.js';
import { getScrollTop, getScrollHeight } from '../../utils/scroll.js';

export default {
  name: 'lake-list',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    finished: {
      type: Boolean,
      default: false,
    },
    loadOffset: {
      // 触发 load 事件的距底部偏移
      type: Number,
      default: 200,
    },
    useBody: {
      // 默认使用 window 作为 scroll 事件绑定对象
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.bindScroll();
  },
  beforeDestroy() {
    this.unbindScroll();
  },
  activated() {
    // 处理 keep-alive 的情况
    if (!this.isBindingScroll) {
      this.bindScroll();
    }
  },
  deactivated() {
    // 处理 keep-alive 的情况
    if (this.isBindingScroll) {
      this.unbindScroll();
    }
  },
  data() {
    return {
      ticking: false,
      $scrollContainer: null,
      isBindingScroll: false,
    };
  },
  methods: {
    bindScroll() {
      this.$nextTick().then(() => {
        this.$scrollContainer = this.useBody ? window : this.$refs.list;
        on(this.$scrollContainer, 'scroll', this.onContainerScroll);
        this.isBindingScroll = true;
      });
    },
    unbindScroll() {
      off(this.$scrollContainer, 'scroll', this.onContainerScroll);
      this.isBindingScroll = false;
    },
    onContainerScroll($event) {
      if (this.finished) return;

      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.onBottomTrigger();
          this.ticking = false;
        });

        this.ticking = true;
      }
    },
    onBottomTrigger() {
      if (this.loading) return;

      const { scrollHeight, scrollTop, clientHeight } = this.getScrollSituation(this.$scrollContainer);

      if (scrollHeight - scrollTop < clientHeight + this.loadOffset) {
        this.$emit('load');
      }
    },
    getScrollSituation(element) {
      if (element.tagName) {
        const { scrollHeight, scrollTop, clientHeight } = this.$scrollContainer;

        return { scrollHeight, scrollTop, clientHeight };
      }

      return {
        scrollTop: getScrollTop(document.body),
        scrollHeight: getScrollHeight(document.body),
        clientHeight: 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight,
      };
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';

.lake-list {
  &-loading-dots {
    padding: 10px 0;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    min-width: 36px;
  }

  &-dot {
    width: 8px;
    height: 8px;
    margin: 0 2px;
    background-color: #ccc;
    border-radius: 100%;
    display: inline-block;
    animation: lake-bounce-delay 1s infinite ease-in-out both;

    &.first {
      animation-delay: -0.32s;
    }
    &.second {
      animation-delay: -0.16s;
    }
  }

  &-finished {
    padding: 10px 0;
    font-size: @size-font-sm;
    text-align: center;
    color: @color-text-secondary;
  }
}
</style>
