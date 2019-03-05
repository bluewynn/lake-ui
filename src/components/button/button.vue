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

<style lang="less">
@import '../../style/themes/default.less';

/**
 * get backgroundColor active status and disabled status
 */
.btn-mutate(@backgroundColor) {
  &:active {
    background-color: darken(@backgroundColor, 10%);
    border-color: darken(@backgroundColor, 10%);
  }
  &:disabled {
    background-color: lighten(@backgroundColor, 20%);
    border-color: lighten(@backgroundColor, 20%);
    opacity: 0.8;
  }
}

.lake-btn {
  display: block;
  outline: 0 none;
  box-sizing: border-box;
  padding: 0;
  text-align: center;
  font-size: 18px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
  color: #333;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  padding: 0 15px;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  .btn-mutate(#fff);

  &.btn-primary {
    color: #fff;
    background-color: @brand-primary;
    border-color: @brand-primary;
    .btn-mutate(@brand-primary);
  }
  &.btn-warning {
    color: #fff;
    background-color: @brand-error;
    border-color: @brand-error;
    .btn-mutate(@brand-error);
  }
  &.btn-outline {
    color: @brand-primary;
    background-color: transparent;
    border-color: @brand-primary;
  }
  &.btn-link {
    color: @brand-primary;
    background-color: transparent;
    border-color: transparent;
  }
  &.btn-small {
    font-size: 13px;
    height: 30px;
    line-height: 30px;
  }
  &.btn-normal {
    font-size: 15px;
    height: 38px;
    line-height: 38px;
  }

  &.btn-inline {
    display: inline-block;
    vertical-align: middle;
    width: auto;
  }
  &.btn-loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading {
    display: block;
    width: 12px;
    height: 12px;
    margin-right: 6px;
    border: 2px solid #e8e8e8;
    border-top-color: #c5c5c5;
    border-radius: 100%;
    animation: rotation 0.5s linear 0s infinite;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
}
</style>
