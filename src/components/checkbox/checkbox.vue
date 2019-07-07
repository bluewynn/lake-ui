<template>
  <div class="lake-checkbox" :class="disabled ? 'lake-checkbox-disabled' : ''">
    <label class="lake-checkbox-label">
      <div class="lake-checkbox-input-icon">
        <div class="lake-checkbox-fake" :class="checked ? 'lake-checkbox-fake-checked' : ''">
          <lake-icon name="check" :width="18" :height="18"></lake-icon>
        </div>
        <input
          type="checkbox"
          class="lake-checkbox-input"
          :disabled="disabled"
          :readonly="readonly"
          :checked="checked"
          @input="$emit('input', $event.target.checked)"
          @change="$emit('change', $event.target.checked)"
        />
      </div>
      <div class="lake-checkbox-content">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
import lakeIcon from '../icon';

export default {
  name: 'lake-checkbox',
  components: {
    lakeIcon,
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    name: {
      type: String,
      default: '',
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
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-checkbox {
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
    border-radius: 2px;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  &-fake-checked {
    background-color: @brand-primary;
    border: 1px solid @brand-primary;
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
}
</style>
