<template>
  <div class="lake-flex-box-item" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'flex-box-item',
  props: {
    flex: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    style() {
      return {
        flex: this.flex,
      };
    },
  },
};
</script>
