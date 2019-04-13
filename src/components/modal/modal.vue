<template>
  <div>
    <lake-mask :show="show" :lock-scroll="lockScroll" @click="onMaskClick" />
    <transition name="lake-zoom-in">
      <div class="lake-modal" v-if="show">
        <div class="lake-modal-wrapper">
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
              <button class="lake-modal-operation-confirm" @click.prevent.stop="onConfirm" v-if="showConfirmBtn">
                {{ confirmBtnText }}
              </button>
              <button class="lake-modal-operation-cancel" @click.prevent.stop="onCancel" v-if="showCancelBtn">
                {{ cancelBtnText }}
              </button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import lakeMask from '../mask';

export default {
  name: 'lake-modal',
  components: { lakeMask },
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
    lockScroll: {
      type: Boolean,
      default: true,
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
      this.$emit('update:show', false);
    },
    onCancel() {
      this.$emit('cancel');
      this.$emit('update:show', false);
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-modal {
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: @z-index-popup;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(1px);
  -webkit-overflow-scrolling: touch;
  &-wrapper {
    background-color: @color-bg-base;
    max-width: 300px;
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
</style>
