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
      >
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
