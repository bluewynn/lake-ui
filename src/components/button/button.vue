<template>
  <button type="button" class="lake-btn" :class="btnClass" :disabled="disabled" @click="onClick">
    <i class="loading" v-if="loading"></i>
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
const BTN_TYPES = ['default', 'primary', 'warning', 'outline', 'link'];
const BTN_SIZES = ['small', 'normal', 'large'];

export default {
  name: 'lake-button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
    },
    mode: {
      type: String,
      default: 'default',
      validator(type) {
        return type === '' || BTN_TYPES.includes(type);
      },
    },
    size: {
      type: String,
      default: '',
      validator(size) {
        return size === '' || BTN_SIZES.includes(size);
      },
    },
    inline: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass() {
      return [
        this.inline ? 'btn-inline' : '',
        this.mode ? `btn-${this.mode}` : '',
        this.size ? `btn-${this.size}` : '',
        this.loading ? `btn-loading` : '',
      ];
    },
  },
  methods: {
    onClick($event) {
      if (this.disabled) {
        $event.preventDefault();
        $event.stopPropagation();
        return;
      }

      this.$emit('click');
    },
  },
};
</script>
