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
