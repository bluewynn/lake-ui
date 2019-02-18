<template>
  <div class="lake-field">
    <slot name="label">
      <div class="lake-field-left" v-if="label">
        <label class="lake-field-label" :class="disabled ? 'disabled' : ''" :for="id">{{ label }}</label>
      </div>
    </slot>
    <div class="lake-field-right">
      <textarea
        :id="id"
        class="lake-field-input"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :rows="rows"
        ref="textarea"
        @input="onInput"
        @change="$emit('change', $event.target.value)"
      ></textarea>
      <div class="lake-field-count" v-if="count > 0">
        <span :class="wordLength > count ? 'lake-field-count-error' : ''">{{ wordLength }}</span>
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
  mounted() {
    this.autosize && this.$nextTick().then(() => this.adjustSize());
  },
  methods: {
    focus() {
      this.$refs.textarea.focus();
    },
    blur() {
      this.$refs.textarea.blur();
    },
    onInput($event) {
      this.$emit('input', $event.target.value);
      this.autosize && this.adjustSize();
    },
    adjustSize() {
      const { textarea } = this.$refs;

      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
      textarea.style.overflowY = 'hidden';
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
