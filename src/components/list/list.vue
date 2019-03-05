<template>
  <div class="lake-list" ref="list">
    <slot></slot>
    <slot name="lake-list-loading" v-if="loading">
      <div class="lake-list-loading">
        <div class="lake-list-loading-dots regular">
          <div class="lake-list-dot first"></div>
          <div class="lake-list-dot second"></div>
          <div class="lake-list-dot third"></div>
        </div>
      </div>
    </slot>
    <slot name="lake-list-finished" v-if="finished">
      <div class="lake-list-finished">没有更多了</div>
    </slot>
  </div>
</template>

<script>
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
      type: Number,
      default: 50,
    },
    useBody: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$nextTick().then(() => {
      this.$scrollContainer = this.useBody ? window : this.$refs.list;
      this.$scrollContainer.addEventListener('scroll', this.onContainerScroll);
    });
  },
  beforeDestroy() {
    this.$scrollContainer.removeEventListener('scroll', this.onContainerScroll);
  },
  data() {
    return {
      ticking: false,
      $scrollContainer: null,
    };
  },
  methods: {
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
        scrollTop: (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop,
        scrollHeight: (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight,
        clientHeight: 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight,
      };
    },
  },
};
</script>
