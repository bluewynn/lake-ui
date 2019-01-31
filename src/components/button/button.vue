<template>
  <button
    type="button"
    class="btn"
    :class="btnClass"
    :disabled="disabled"
    @click="onClick">
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
        return BTN_TYPES.includes(type);
      },
    },
    size: {
      type: String,
      default: 'normal',
      validator(size) {
        return BTN_SIZES.includes(size);
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
      return {
        'btn-inline': this.inline,
        [`btn-${this.mode}`]: true,
        [`btn-${this.size}`]: true,
      };
    }
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
@color-default: #fff;
@color-primary: #007bff;
@color-warning: #dc3545;

.btn-mutate(@backgroundColor) {
  &:active {
    background-color: darken(@backgroundColor, 10%);
    border-color: darken(@backgroundColor, 10%);
  }
  &:disabled {
    background-color: lighten(@backgroundColor, 20%);
    border-color: lighten(@backgroundColor, 20%);
    opacity: .8;
  }
}

.btn {
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
  background-color: @color-default;
  border: 1px solid @color-default;
  border-radius: 5px;
  padding: 0 15px;
  -webkit-tap-highlight-color: transparent;
  .btn-mutate(@color-default);

  &.btn-primary {
    color: #fff;
    background-color: @color-primary;
    border-color: @color-primary;
    .btn-mutate(@color-primary);
  }
  &.btn-warning {
    color: #fff;
    background-color: @color-warning;
    border-color: @color-warning;
    .btn-mutate(@color-warning);
  }
  &.btn-outline {
    color: @color-primary;
    background-color: transparent;
    border-color: @color-primary;
  }
  &.btn-link {
    color: @color-primary;
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
  &.btn-large {
    font-size: 17px;
    height: 45px;
    line-height: 45px;
  }

  &.btn-inline {
    display: inline-block;
    vertical-align: middle;
    width: auto;
  }

  .loading {
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    border: 2px solid #e8e8e8;
    border-top-color: #c5c5c5;
    border-radius: 100%;
    animation: rotation .5s linear 0s infinite;
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
