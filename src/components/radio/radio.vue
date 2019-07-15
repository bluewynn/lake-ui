<template>
  <div class="lake-radio" :class="disabled ? 'lake-radio-disabled' : ''">
    <label class="lake-radio-label">
      <div class="lake-radio-input-icon">
        <div class="lake-radio-fake" :class="isChecked ? 'lake-radio-fake-checked' : ''">
          <div class="lake-radio-icon"></div>
        </div>
        <input
          type="radio"
          class="lake-radio-input"
          :disabled="disabled"
          :checked="isChecked"
          @click="onClick"
          @change="$emit('change', $event.target.checked)"
        />
      </div>
      <div class="lake-radio-content">
        <slot>{{ label }}</slot>
      </div>
    </label>
  </div>
</template>

<script>
import lakeIcon from '../icon';

const CHECKBOX_SIZE = ['small', 'normal', 'large'];

export default {
  name: 'lake-radio',
  components: {
    lakeIcon,
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    label: {
      type: [String, Number],
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
      validator(size) {
        return size === '' || CHECKBOX_SIZE.includes(size);
      },
    },
  },
  data() {
    return {
      isChild: this.$parent.$options.name === 'lake-radio-group',
    };
  },
  computed: {
    iconSize() {
      return {
        width: 16,
        height: 16,
      };
    },
    isChecked() {
      if (this.isChild) {
        return this.$parent.value.includes(this.label);
      } else {
        return this.checked;
      }
    },
  },
  methods: {
    onClick() {
      if (!this.isChild || this.disabled) return;

      this.$parent.$emit('input', this.label);
      this.$emit('click');
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

@color-disabled: #e6e6e6;
@color-disabled-checked: #ccc;

.lake-radio {
  &-label {
    display: flex;
    align-items: center;
  }
  &-input-icon {
    position: relative;
  }
  &-input {
    position: absolute;
    left: 5px;
    top: 5px;
    z-index: -1;
    outline: 0;
    padding: 0;
    -webkit-appearance: none;
  }
  &-fake {
    border-radius: 100%;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    transition: background-color 0.2s ease, border 0.2s ease;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 0;
      height: 0;
      border-radius: 100%;
      transition: width 0.2s ease, height 0.2s ease;
    }
  }
  &-fake-checked {
    background-color: @brand-primary;
    border: 1px solid @brand-primary;
    &::after {
      width: 8px;
      height: 8px;
      background-color: #fff;
    }
  }
  &-icon {
    width: 18px;
    height: 18px;
  }
  &-content {
    flex: 1;
    font-size: 14px;
    line-height: 20px;
    min-width: 28px;
    color: @color-text-primary;
    letter-spacing: 0;
    margin-left: 11px;
  }
  &&-disabled {
    .lake-radio-fake {
      background-color: @color-disabled;
      border-color: @color-disabled;
    }
    .lake-radio-fake-checked {
      background-color: @color-disabled-checked;
      border-color: @color-disabled-checked;
    }
  }
}
</style>
