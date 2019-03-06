<template>
  <div class="lake-tabbar-item" :class="active ? 'active' : ''" @click="onClick">
    <slot name="icon"></slot>
    <slot>
      <div class="lake-tabbar-item-text">{{ text }}</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'lake-tabbar-item',
  props: {
    text: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
    },
  },
  computed: {
    active() {
      return this.$parent.crtTabIndex === this.index;
    },
  },
  methods: {
    onClick() {
      this.$parent.crtTabIndex = this.index;
      this.$emit('click', this.index);
    },
  },
};
</script>
