<template>
  <transition name="fade">
    <div class="toast">
      <div
        class="mask"
        :class="mask ? 'mask-color' : 'mask-transparent'"
        @touchmove.prevent
        @click="onClickMask"
      >
        <div class="toast-wrapper">
          <div class="toast-inline">
            <div
              class="toast-content"
              :class="[
                  `toast-${position}`,
                  `toast-${mode}`
                ]"
            >
              <slot name="icon"></slot>
              {{ msg }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const TOAST_MODES = ['success', 'info', 'error'];
const TOAST_POSITION = ['top', 'center', 'bottom'];

export default {
  name: 'lake-toast',
  props: {
    msg: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'info',
      validator(mode) {
        return TOAST_MODES.includes(mode);
      }
    },
    mask: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(pos) {
        return TOAST_POSITION.includes(pos);
      }
    }
  },
  methods: {
    onClickMask() {
      this.$emit('click-mask');
    }
  }
};
</script>

<style lang="less">
@import '../../style/themes/default.less';

.toast {
  text-align: center;
  .mask {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    &-color {
      background-color: @color-bg-mask;
    }
    &-transparent {
      background-color: transparent;
    }
  }
  &-inline {
    display: inline-block;
  }
  &-content {
    background-color: #5f5c5c;
    color: #fff;
    border-radius: 15px;
    padding: 6px 15px;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    min-width: 40px;
    margin-top: 20px;
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
  transition: opacity .1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
