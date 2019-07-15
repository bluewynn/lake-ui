<template>
  <div class="lake-checkbox" :class="[disabled ? 'lake-checkbox-disabled' : '']">
    <label class="lake-checkbox-label">
      <div class="lake-checkbox-input-icon">
        <div class="lake-checkbox-fake" :class="isChecked ? 'lake-checkbox-fake-checked' : ''">
          <lake-icon
            name="check"
            :block="true"
            :width="iconSize.width"
            :height="iconSize.height"
            v-if="isChecked"
          ></lake-icon>
        </div>
        <input
          type="checkbox"
          class="lake-checkbox-input"
          :disabled="disabled"
          :checked="isChecked"
          @click="onClick"
          @change="$emit('change', $event.target.checked)"
        />
      </div>
      <div class="lake-checkbox-content">
        <slot>{{ label }}</slot>
      </div>
    </label>
  </div>
</template>

<script>
import lakeIcon from '../icon';

const CHECKBOX_SIZE = ['small', 'normal', 'large'];

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
      isChild: this.$parent.$options.name === 'lake-checkbox-group',
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

      let { value } = this.$parent;
      const { min, max } = this.$parent;

      if (value.includes(this.label)) {
        if (value.length === min) {
          this.$parent.$emit('minimum', value.length);
          return;
        }

        value = value.filter(item => item !== this.label);
        this.$parent.$emit('input', value);
      } else {
        if (value.length === max) {
          this.$parent.$emit('maximum', value.length);
          return;
        }

        value.push(this.label);
        this.$parent.$emit('input', value);
      }

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
    width: 16px;
    height: 16px;
    transition: background-color 0.2s ease, border 0.2s ease;
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
  &&-disabled {
    .lake-checkbox-fake {
      background-color: @color-disabled;
      border-color: @color-disabled;
    }
    .lake-checkbox-fake-checked {
      background-color: @color-disabled-checked;
      border-color: @color-disabled-checked;
    }
  }
}
</style>
