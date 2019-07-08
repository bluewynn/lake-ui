<template>
  <div class="lake-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'lake-radio-group',
  props: {
    value: {
      type: [String, Number],
    },
  },
};
</script>

<style lang="less">
.lake-radio-group {
  margin-right: 10px;
  margin-bottom: 10px;
  .lake-radio {
    margin-bottom: 10px;
    &:last-child {
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
}
</style>
