<template>
  <div class="lake-tabbar" :class="`fixed-${position}`" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
const TAB_POSITIONS = ['top', 'bottom'];

export default {
  name: 'lake-tabbar',
  props: {
    selected: {
      type: String,
      default: '',
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
      crtTab: this.selected || this.tabs[0].name,
    };
  },
  watch: {
    crtTab(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
    },
  },
};
</script>
