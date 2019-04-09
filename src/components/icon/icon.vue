<template>
  <i class="lake-icon">
    <img class="lake-icon-instance" :src="icon" alt />
  </i>
</template>

<script>
const ICON_SIZES = ['small', 'normal', 'large'];

export default {
  name: 'lake-icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    size: {
      type: String,
      default: '',
      validator: size => size === '' || ICON_SIZES.includes(size),
    },
  },
  computed: {
    icon() {
      return require(`../../icons/${this.name}.svg`);
    },
  },
};
</script>

<style lang="less">
.lake-icon {
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 16px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &-instance {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
  &.small {
  }
  &.large {
  }
}
</style>
