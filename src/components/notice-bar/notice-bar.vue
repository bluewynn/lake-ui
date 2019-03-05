<template>
  <div class="lake-notice-bar" @click="onClick" v-if="isShow">
    <slot name="icon-left">
      <!-- <i class="lake-notice-bar-icon-warn"></i> -->
    </slot>
    <div class="lake-notice-bar-content-wrapper" ref="noticeContentWrapper">
      <div class="lake-notice-bar-content" ref="noticeContent" :style="{ right: `${contentRight}px` }">
        <slot></slot>
      </div>
    </div>
    <slot name="icon-right">
      <i class="lake-notice-bar-icon-close" v-if="enableClose" @click.stop="onClose">x</i>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'lake-notice-bar',
  data() {
    return {
      isShow: true,
      contentRight: 0,
      timerId: 0,
    };
  },
  props: {
    enableClose: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.$nextTick().then(() => {
      const elWidth = this.$refs.noticeContentWrapper.clientWidth;
      const contentWidth = this.$refs.noticeContent.clientWidth;
      const shiftDistance = contentWidth - elWidth;

      if (shiftDistance <= 0) {
        return;
      }

      this.run(shiftDistance);
    });
  },
  beforeDestroy() {
    clearInterval(this.timerId);
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
    onClose() {
      this.isShow = false;
      this.$emit('close');
    },
    run(shiftDistance) {
      this.contentRight = 0;

      clearInterval(this.timerId);
      this.timerId = setInterval(() => {
        if (this.contentRight < shiftDistance) {
          this.contentRight += 1;
        } else {
          clearInterval(this.timerId);

          setTimeout(() => {
            this.run(shiftDistance);
          }, 1000);
        }
      }, 45);
    },
  },
};
</script>
