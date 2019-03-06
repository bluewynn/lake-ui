<template>
  <div class="lake-tabbar" :class="`fixed-${position}`" v-show="show">
    <div class="lake-tabbar-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const TAB_POSITIONS = ['top', 'bottom'];

export default {
  name: 'lake-tabbar',
  props: {
    selected: {
      type: Number,
      default: 0,
    },
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
    show: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: 'bottom',
      validator(pos) {
        return pos === '' || TAB_POSITIONS.includes(pos);
      },
    },
  },
  data() {
    return {
      crtTabIndex: this.selected,
    };
  },
  watch: {
    crtTabIndex(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
    },
  },
};
</script>
