<template>
  <div :class="['lake-icon', size, hoverFill ? 'hover' : '', block ? 'lake-icon-block' : '']" :style="iconStyles">
    <svg :style="{ fill: fill }" :viewBox="icon.viewBox">
      <use :xlink:href="`#${icon.id}`"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'lake-icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'md',
      validator: value => {
        return value === '' || ['sm', 'md', 'lg'].indexOf(value) !== -1;
      },
    },
    width: [Number, String],
    height: [Number, String],
    fill: {
      type: String,
      default: 'currentColor',
    },
    hoverFill: {
      type: String,
      default: '',
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    icon() {
      return require(`../../icons/${this.name}.svg`).default;
    },
    iconStyles() {
      return {
        fill: this.hoverFill || null,
        width: typeof this.width === 'string' ? this.width : `${this.width}px`,
        height: typeof this.height === 'string' ? this.height : `${this.height}px`,
      };
    },
  },
};
</script>

<style lang="less">
.lake-icon {
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  &&-block {
    display: block;
  }
  > svg {
    transition: fill ease 0.1s;
    vertical-align: top;
  }
  &.sm {
    width: 12px;
    height: 12px;
  }
  &.md {
    width: 16px;
    height: 16px;
  }
  &.lg {
    width: 20px;
    height: 20px;
  }
  &.hover:hover > svg {
    fill: inherit !important;
  }
}
</style>
