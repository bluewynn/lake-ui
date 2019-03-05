<template>
  <div>
    <lake-mask :show="show" :transparent="false" @click="onClickMask" />
    <transition name="lake-fade">
      <div class="lake-popup" v-if="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import lakeMask from '../mask';

export default {
  name: 'lake-popup',
  components: {
    lakeMask,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClickMask() {
      this.$emit('click-mask');
    },
  },
};
</script>
