<template>
  <div class="lake-textarea">
    <slot name="label">
      <div class="lake-textarea-left" v-if="label">
        <label class="lake-textarea-label" :class="disabled ? 'disabled' : ''" :for="id">{{ label }}</label>
      </div>
    </slot>
    <div class="lake-textarea-right">
      <textarea
        :id="id"
        class="lake-textarea-instance"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :rows="rows"
        ref="textarea"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event.target.value)"
      ></textarea>
      <div class="lake-textarea-count" v-if="count > 0">
        <span :class="wordLength > count ? 'lake-textarea-count-error' : ''">{{ wordLength }}</span>
        / {{ count }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lake-textarea',
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
    autosize: {
      type: Boolean,
      default: true,
    },
    count: {
      type: Number,
      default: 0,
    },
    rows: {
      type: Number,
      default: 4,
    },
    wordLengthParser: {
      type: Function,
    },
  },
  computed: {
    wordLength() {
      return this.wordLengthParser ? this.wordLengthParser(this.value) : this.value.length;
    },
  },
  methods: {
    focus() {
      this.$refs.textarea.focus();
    },
    blur() {
      this.$refs.textarea.blur();
    },
  },
  watch: {
    wordLength(wordLength) {
      if (wordLength > this.count) {
        this.$emit('limit');
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-textarea {
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
  &-instance {
    width: 100%;
    border: 0;
    outline: 0;
    -webkit-appearance: none;
    background-color: transparent;
    font-size: 17px;
    color: @color-text-primary;
    line-height: 1.5;
  }
  &-instance::placeholder {
    color: @color-text-secondary;
  }
  &-instance:disabled::placeholder,
  &-instance:disabled {
    color: @color-text-disabled;
  }
  &-count {
    text-align: right;
  }
  &-count-error {
    color: @color-text-error;
  }
}
</style>
