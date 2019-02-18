<template>
  <div class="tab-bar-item" :class="{ 'active': active }" @click="onClick">
    <slot name="icon"></slot>
    <slot>
      <div>{{ text }}</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'lake-tab-bar-item',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    active() {
      return this.$parent.crtTab === this.text;
    },
  },
  methods: {
    onClick() {
      this.$parent.crtTab = this.text;
      this.$emit('click', this.text);
    },
  },
};
</script>
