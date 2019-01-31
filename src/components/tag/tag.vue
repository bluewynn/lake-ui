<template>
  <div
    class="lake-tag"
    :class="[
      selected ? 'selected' : '',
      disabled ? 'disabled' : '',
      size ? size : '',
    ]"
    @click.prevent.stop="onClick"
  >
    <i class="lake-tag-close" @click.prevent.stop="onClose" v-if="close">x</i>
    <slot></slot>
  </div>
</template>

<script>
const TAG_SIZES = ['small', 'normal'];

export default {
  name: 'lake-tag',
  model: {
    prop: 'selected',
  },
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'normal',
      validator(size) {
        return TAG_SIZES.includes(size);
      },
    },
  },
  methods: {
    onClick() {
      if (this.disabled) return;

      this.selected = !this.selected;
      this.$emit('click');
    },
    onClose() {
      if (this.disabled) return;

      this.$emit('close');
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../style/themes/default.less';

.lake-tag {
  display: inline-block;
  position: relative;
  border-radius: 3px;
  padding: 0 9px;
  font-size: 13px;
  line-height: 20px;
  color: #abaaaa;
  border: 1px solid #abaaaa;
  background-color: #fff;
  margin: 0 8px 8px 0;
  min-width: 25px;
  &.selected {
    border: 1px solid #279bec;
    color: #279bec;
  }
  &.disabled {
    border: 1px solid lighten(#abaaaa, 10%);
    color: #abaaaa;
    background-color: darken(#fff, 10%);
  }
  &.small {
    font-size: 12px;
    line-height: 16px;
    padding: 0 7px;
  }
  &-close {
    position: absolute;
    top: -7px;
    right: -7px;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: #e8e8e8;
    text-align: center;
  }
}
</style>
