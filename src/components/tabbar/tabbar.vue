<template>
  <transition :name="transitionName">
    <div class="lake-tabbar" :class="`fixed-${position}`" v-show="show">
      <div class="lake-tabbar-wrapper">
        <slot></slot>
      </div>
    </div>
  </transition>
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
  computed: {
    transitionName() {
      return this.position === '' || this.position === 'top' ? 'lake-slide-down' : 'lake-slide-up';
    },
  },
  watch: {
    crtTabIndex(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
    },
  },
};
</script>
