<template>
  <div class="lake-notice-bar" @click="onClick" v-if="isShow">
    <slot name="icon-left">
      <lake-icon class="lake-notice-bar-icon-warn" name="error"></lake-icon>
    </slot>
    <div class="lake-notice-bar-content-wrapper" ref="noticeContentWrapper">
      <div class="lake-notice-bar-content" ref="noticeContent" :style="{ right: `${contentRight}px` }">
        <slot></slot>
      </div>
    </div>
    <slot name="icon-right">
      <lake-icon class="lake-notice-bar-icon-close" name="close" v-if="enableClose" @click.stop="onClose"></lake-icon>
    </slot>
  </div>
</template>

<script>
import lakeIcon from '../../components/icon';

export default {
  name: 'lake-notice-bar',
  components: {
    lakeIcon,
  },
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
@import '../../style/themes/default.less';

.lake-notice-bar {
  background-color: #fffce5;
  color: @color-text-secondary;
  font-size: 12px;
  line-height: 36px;
  height: 36px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  &-content-wrapper {
    flex: 1;
    overflow: hidden;
  }
  &-content {
    position: relative;
    right: 297px;
    white-space: nowrap;
    display: inline-block;
    padding: 0 7.5px;
  }
  &-icon-warn,
  &-icon-close {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
  &-icon-close {
    margin-left: 3px;
  }
  &-icon-warn {
    margin-right: 3px;
  }
}
</style>
