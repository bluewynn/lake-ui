<template>
  <button type="button" class="lake-btn" :class="btnClass" :disabled="disabled" @click="onClick">
    <i class="lake-loading" v-if="loading"></i>
    <!-- @slot 自定义按钮的图标 -->
    <slot name="icon"></slot>
    <!-- @slot 自定义按钮里的内容 -->
    <slot></slot>
  </button>
</template>

<script>
const BTN_TYPES = ['default', 'primary', 'warning', 'outline'];
const BTN_SIZES = ['small', 'normal', 'large'];

/**
 * 按钮用于开始一个即时操作。
 */
export default {
  name: 'lake-button',
  props: {
    /**
     * 按钮失效状态
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 设置按钮类型，可选值为 ['default', 'primary', 'warning', 'outline'] 或者不设
     */
    type: {
      type: String,
      default: 'default',
      validator(type) {
        return type === '' || BTN_TYPES.includes(type);
      },
    },
    /**
     * 设置按钮大小，可选值为 ['small', 'normal', 'large'] 或者不设
     */
    size: {
      type: String,
      default: '',
      validator(size) {
        return size === '' || BTN_SIZES.includes(size);
      },
    },
    /**
     * 按钮是否为行内元素
     */
    inline: {
      type: Boolean,
      default: false,
    },
    /**
     * 设置按钮载入状态
     */
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass() {
      return [
        this.inline ? 'lake-btn-inline' : '',
        this.type ? `lake-btn-${this.type}` : '',
        this.size ? `lake-btn-${this.size}` : '',
        this.loading ? `lake-btn-loading` : '',
      ];
    },
  },
  methods: {
    /**
     * 手动触发按钮的点击事件
     *
     * @param {object} $event
     * @public
     */
    onClick($event) {
      if (this.disabled) {
        $event.preventDefault();
        $event.stopPropagation();
        return;
      }

      /**
       * 点击按钮时的回调
       *
       * @event click
       * @type {event}
       * @property {DOMEvent} $event
       */
      this.$emit('click', $event);
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';
@btnPrefixClass: lake-btn;
/**
 * get backgroundColor active status and disabled status
 */
.btn-mutate(@backgroundColor) {
  @level: 7;

  &.@{btnPrefixClass}-loading,
  &:active {
    color: rgba(255, 255, 255, 0.6);
    background-color: .hsv-color(@backgroundColor, @level) [ @result];
    border-color: .hsv-color(@backgroundColor, @level) [ @result];
  }
  &:disabled {
    color: #fff;
    background-color: #d8dee6;
    border-color: #d8dee6;
  }
}
.btn-mutate-white(@backgroundColor) {
  &.@{btnPrefixClass}-loading,
  &:active {
    color: rgba(51, 51, 51, 0.6);
    background-color: #f5f7fa;
    border-color: #d8dee6;
  }
  &:disabled {
    color: rgba(51, 51, 51, 0.3);
    background-color: #ffffff;
    border-color: #d8dee6;
  }
}

.@{btnPrefixClass} {
  display: block;
  outline: 0 none;
  box-sizing: border-box;
  padding: 13px 15px;
  text-align: center;
  font-size: 16px;
  width: 100%;
  min-width: 64px;
  height: 48px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
  color: #333;
  background-color: #fff;
  border: 1px solid #d8dee6;
  border-radius: 4px;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  .btn-mutate-white(#fff);

  &-primary {
    color: #fff;
    background-color: @brand-primary;
    border-color: @brand-primary;
    .btn-mutate(@brand-primary);
  }
  &-warning {
    color: #fff;
    background-color: @brand-error;
    border-color: @brand-error;
    .btn-mutate(@brand-error);
  }
  &-outline {
    color: @brand-primary;
    background-color: #fff;
    border-color: #008dfc;
  }
  &-small {
    font-size: 14px;
    height: 32px;
    line-height: 20px;
    padding: 5px 10px;
  }
  &-normal {
    font-size: 16px;
    height: 40px;
    line-height: 22px;
    padding: 8px 15px;
  }

  &-inline {
    display: inline-block;
    vertical-align: top;
    width: auto;
  }
  &-loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lake-loading {
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
