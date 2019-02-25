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
        ref="instance"
        @input="onInput"
        @change="$emit('change', $event.target.value)"
      ></textarea>
      <div class="lake-field-count" v-if="count > 0">
        <span :class="wordLength > count ? 'lake-field-count-error' : ''">{{ wordLength }}</span>
        / {{ count }}
      </div>
      <div class="lake-field-error-text" v-if="error">{{ errorText }}</div>
    </div>
  </div>
</template>

<script>
import fieldMixin from '../../mixins/field';

export default {
  name: 'lake-textarea',
  mixins: [fieldMixin],
  props: {
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
    onInput($event) {
      this.$emit('input', $event.target.value);
      this.autosize && this.adjustSize();
    },
    adjustSize() {
      const { instance } = this.$refs;

      instance.style.height = 'auto';
      instance.style.height = `${instance.scrollHeight}px`;
      instance.style.overflowY = 'hidden';
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
