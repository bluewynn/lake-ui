<template>
  <div class="lake-tabbar-item" :class="active ? 'active' : ''" @click="onClick">
    <div class="lake-tabbar-item-icon"><slot name="icon"></slot></div>
    <div class="lake-tabbar-item-text">
      <slot>{{ text }}</slot>
    </div>
    <div class="lake-tabbar-item-info" v-if="info">{{ info > 99 ? '99+' : info }}</div>
    <div class="lake-tabbar-item-dot" v-else-if="dot"></div>
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
    dot: {
      type: Boolean,
      default: false,
    },
    info: {
      type: [Number, String],
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
