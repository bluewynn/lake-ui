<template>
  <div class="lake-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'lake-checkbox-group',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    min: {
      type: Number,
      default: -1,
    },
    max: {
      type: Number,
      default: -1,
    },
  },
};
</script>

<style lang="less">
.lake-checkbox-group {
  margin-right: 10px;
  margin-bottom: 10px;
  .lake-checkbox {
    margin-bottom: 10px;
    &:last-child {
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
}
</style>
