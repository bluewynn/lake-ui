<template>
  <div class="notice-bar" @click="onClick" v-if="isShow">
    <slot name="icon-left">
      <!-- <i class="icon-warn"></i> -->
    </slot>
    <div class="content-wrapper" ref="noticeContentWrapper">
      <div class="content" ref="noticeContent" :style="{right: `${contentRight}px`}">
        <slot></slot>
      </div>
    </div>
    <slot name="icon-right">
      <i class="icon-close" v-if="enableClose" @click.stop="onClose">x</i>
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

<style lang="less">
.notice-bar {
  background-color: #fffce5;
  color: #707070;
  font-size: 12px;
  line-height: 36px;
  height: 36px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  .content-wrapper {
    flex: 1;
    overflow: hidden;
    .content {
      position: relative;
      right: 297px;
      white-space: nowrap;
      display: inline-block;
      padding: 0 7.5px;
    }
  }
  .icon-warn,
  .icon-close {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
}
</style>
