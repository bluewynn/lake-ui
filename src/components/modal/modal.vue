<template>
  <div>
    <lake-mask :show="show" :lock-scroll="lockScroll" @click="onMaskClick" />
    <transition name="zoom-in">
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
