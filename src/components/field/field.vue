<template>
  <div class="lake-field">
    <slot name="label">
      <div class="lake-field-left" v-if="label">
        <label class="lake-field-label" :class="disabled ? 'disabled' : ''" :for="id">{{ label }}</label>
      </div>
    </slot>
    <div class="lake-field-right">
      <input
        :id="id"
        class="lake-field-input"
        :class="[align]"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        ref="input"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event.target.value)"
      >
    </div>
    <slot name="extra"></slot>
  </div>
</template>

<script>
export default {
  name: 'lake-field',
  model: {
    prop: 'value',
  },
  props: {
    value: {
      type: String,
    },
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: 'left',
      validator(align) {
        return ['left', 'center', 'right'].includes(align);
      },
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-field {
  display: flex;
  position: relative;
  align-items: center;
  padding: 10px 15px;
  background-color: #fff;
  .border-1px-bottom(15px);

  &:last-child {
    .border-1px-hide();
  }
  &-right {
    flex: 1;
  }
  &-label {
    display: block;
    font-size: 17px;
    color: @color-text-base;
    width: 85px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 5px;
  }
  &-label.disabled {
    color: @color-text-disabled;
  }
  &-input {
    width: 100%;
    border: 0;
    outline: 0;
    -webkit-appearance: none;
    background-color: transparent;
    font-size: 17px;
    color: @color-text-primary;
    line-height: 1.5;
  }
  &-input.center {
    text-align: center;
  }
  &-input.right {
    text-align: right;
  }
  &-input::placeholder {
    color: @color-text-secondary;
  }
  &-input:disabled::placeholder,
  &-input:disabled {
    color: @color-text-disabled;
  }
}
</style>
