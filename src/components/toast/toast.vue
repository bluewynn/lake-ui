<template>
  <div>
    <lake-mask :show="show" :transparent="true" />
    <transition name="lake-fade">
      <div class="lake-toast" v-if="show">
        <div class="lake-toast-wrapper">
          <div class="lake-toast-inline">
            <div class="lake-toast-content" :class="[position, type]">
              <slot name="icon"></slot>
              {{ msg }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import lakeMask from '../mask';

const TOAST_MODES = ['success', 'loading', 'error', 'text'];
const TOAST_POSITION = ['top', 'middle', 'bottom'];

export default {
  name: 'lake-toast',
  components: { lakeMask },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
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
      top: initial;
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

.lake-fade-enter-active,
.lake-fade-leave-active {
  transition: opacity 0.5s ease;
}
.lake-fade-enter,
.lake-fade-leave-active {
  opacity: 0;
}
.lake-fade-leave-active {
  display: none;
}
</style>
