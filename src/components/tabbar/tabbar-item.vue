<template>
  <div class="lake-tabbar-item" :class="active ? 'active' : ''" @click="onClick">
    <div class="lake-tabbar-item-icon"><slot name="icon"></slot></div>
    <div class="lake-tabbar-item-text">
      <slot>{{ text }}</slot>
    </div>
    <lake-badge class="lake-tabbar-item-badge" :dot="false" v-if="info">{{ info > 99 ? '99+' : info }}</lake-badge>
    <lake-badge class="lake-tabbar-item-badge" :dot="true" v-else-if="dot" />
  </div>
</template>

<script>
import lakeBadge from '../badge';

export default {
  name: 'lake-tabbar-item',
  components: { lakeBadge },
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
