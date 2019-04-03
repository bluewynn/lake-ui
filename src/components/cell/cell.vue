<template>
  <div class="lake-cell" :class="size">
    <div class="lake-cell-bd">
      <slot name="title">
        <div class="lake-cell-title">{{ title }}</div>
      </slot>
    </div>
    <div class="lake-cell-ft">
      <slot name="content">
        <div class="lake-cell-content">{{ content }}</div>
      </slot>
    </div>
  </div>
</template>

<script>
const CELL_SIZES = ['normal', 'large'];

export default {
  name: 'lake-cell',
  props: {
    size: {
      type: String,
      default: '',
      validator(size) {
        return size === '' || CELL_SIZES.includes(size);
      },
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-cell {
  position: relative;
  display: flex;
  align-items: center;
  padding: 14px 15px;
  background-color: #fff;
  .border-1px-bottom(15px, 15px);
  &.large {
    padding: 20px 15px;
  }
  &-bd {
    min-width: 64px;
    min-height: 22px;
    margin-right: 10px;
  }
  &-title {
    color: @color-text-secondary;
    font-size: 16px;
    line-height: 22px;
  }
  &-ft {
    flex: 1;
    min-width: 0;
    margin-left: 10px;
  }
  &-content {
    color: @color-text-primary;
    font-size: 16px;
    line-height: 22px;
  }
}
.lake-cell:last-child {
  .border-1px-hide();
}
</style>
