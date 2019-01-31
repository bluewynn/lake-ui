<template>
  <popup @click-mask="onClickMask">
    <div class="lake-popover"></div>
  </popup>
</template>

<script>
import popup from '../popup';

export default {
  name: 'lake-popover',
  components: { popup },
  props: {
    maskClose: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClickMask() {
      if (!this.maskClose) return;

      this.show = !this.show;
    },
  },
};
</script>
