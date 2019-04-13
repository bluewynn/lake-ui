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
        ref="instance"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event.target.value)"
      />
      <div class="lake-field-error-text" v-if="error">{{ errorText }}</div>
    </div>
    <slot name="extra"></slot>
  </div>
</template>

<script>
import fieldMixin from '../../mixins/field';

export default {
  name: 'lake-field',
  mixins: [fieldMixin],
  props: {
    align: {
      type: String,
      default: 'left',
      validator(align) {
        return ['left', 'center', 'right'].includes(align);
      },
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-field {
  display: flex;
  position: relative;
  align-items: flex-start;
  padding: 10px 15px;
  background-color: #fff;
  .border-1px-bottom(15px);

  &:last-child {
    .border-1px-hide();
  }
  &-left {
    line-height: 1.5;
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
    padding: 0;
    -webkit-appearance: none;
    background-color: transparent;
    font-size: 17px;
    color: @color-text-primary;
    line-height: 1.5;
    resize: none;
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
  &-error-text {
    font-size: 12px;
    line-height: 1.5;
    margin-top: 6px;
    color: @color-text-error;
  }
  &-count {
    color: @color-text-secondary;
    text-align: right;
  }
  &-count-error {
    color: @color-text-error;
  }
}
</style>
