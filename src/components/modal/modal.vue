<template>
  <div>
    <popup @click-mask="onMaskClick" v-if="show"></popup>
    <div class="lake-modal">
      <transition name="zoom-in">
        <div class="lake-modal-wrapper" v-if="show">
          <div class="lake-modal-title" v-if="title">
            <slot name="title">{{ title }}</slot>
          </div>
          <section class="lake-modal-body">
            <slot name="body">
              <div class="lake-modal-body-msg">{{ msg }}</div>
            </slot>
          </section>
          <div class="lake-modal-operation" v-if="showConfirmBtn || showCancelBtn">
            <slot name="operation">
              <button
                class="lake-modal-operation-confirm"
                @click.prevent.stop="onConfirm"
                v-if="showConfirmBtn"
              >{{ confirmBtnText }}</button>
              <button
                class="lake-modal-operation-cancel"
                @click.prevent.stop="onCancel"
                v-if="showCancelBtn"
              >{{ cancelBtnText }}</button>
            </slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import popup from '../popup';

export default {
  name: 'lake-modal',
  components: { popup },
  model: {
    prop: 'show',
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    msg: {
      type: String,
      default: '',
    },
    showConfirmBtn: {
      type: Boolean,
      default: true,
    },
    showCancelBtn: {
      type: Boolean,
      default: false,
    },
    confirmBtnText: {
      type: String,
      default: '确认',
    },
    cancelBtnText: {
      type: String,
      default: '取消',
    },
  },
  methods: {
    onMaskClick() {
      this.$emit('click-mask');
    },
    onConfirm() {
      this.$emit('confirm');
    },
    onCancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-modal {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  &-wrapper {
    background-color: @color-bg-base;
    min-width: 280px;
    border-radius: 6px;
    overflow: hidden;
  }

  &-title {
    text-align: center;
    padding: 20px 15px 5px;
    font-weight: bold;
    font-size: 15px;
    color: @color-text-base;
    .single-line();
  }
  &-body {
    max-height: 300px;
    overflow-y: auto;
  }
  &-body-msg {
    padding: 15px;
    font-size: 13px;
    line-height: 1.5;
    color: @color-text-primary;
  }
  &-operation {
    display: flex;
    position: relative;
    align-items: center;
    .border-1px-top();
  }
  &-operation-confirm,
  &-operation-cancel {
    flex: 1;
    position: relative;
    text-align: center;
    border: none;
    outline: none;
    background-color: #fff;
    padding: 12px 10px;
    font-size: 15px;
    &:active {
      background-color: darken(#fff, 10%);
    }
  }
  &-operation-confirm {
    color: @color-text-link;
    .border-1px-right();
  }
  &-operation-cancel {
    color: @color-text-secondary;
  }
}

.zoom-in-enter-active {
  animation: zoomIn 0.2s;
}
.zoom-in-leave-active {
  animation: zoomIn 0.2s reverse;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8);
  }

  50% {
    opacity: 1;
  }
}
</style>
