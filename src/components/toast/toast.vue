<template>
  <popup :mask="false">
    <div class="lake-toast">
      <div class="lake-toast-wrapper">
        <div class="lake-toast-inline">
          <div class="lake-toast-content" :class="[position, type]">
            <slot name="icon"></slot>
            {{ msg }}
          </div>
        </div>
      </div>
    </div>
  </popup>
</template>

<script>
import popup from '../popup';

const TOAST_MODES = ['success', 'loading', 'error', 'text'];
const TOAST_POSITION = ['top', 'middle', 'bottom'];

export default {
  name: 'lake-toast',
  components: { popup },
  props: {
    msg: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator(mode) {
        return TOAST_MODES.includes(mode);
      },
    },
    mask: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'middle',
      validator(pos) {
        return TOAST_POSITION.includes(pos);
      },
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';

.lake-toast {
  text-align: center;
  &-inline {
    display: inline-block;
  }
  &-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: #5f5c5c;
    color: #fff;
    border-radius: 3px;
    padding: 6px 15px;
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
    min-width: 40px;
    max-width: 230px;
    &.top {
      top: 10%;
    }
    &.bottom {
      bottom: 10%;
    }
  }
  &-success {
    background-color: @brand-success;
  }
  &-error {
    background-color: @brand-error;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
