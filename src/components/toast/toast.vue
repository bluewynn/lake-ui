<template>
  <div>
    <lake-mask :show="show" :transparent="true" />
    <transition name="lake-fade">
      <div class="lake-toast" v-if="show">
        <div class="lake-toast-wrapper">
          <div class="lake-toast-inline">
            <div class="lake-toast-content" :class="[position, type]">
              <slot name="icon"></slot>
              {{ msg }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import lakeMask from '../mask';

const TOAST_MODES = ['success', 'loading', 'error', 'text'];
const TOAST_POSITION = ['top', 'middle', 'bottom'];

export default {
  name: 'lake-toast',
  components: { lakeMask },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    msg: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
      validator(mode) {
        return mode === '' || TOAST_MODES.includes(mode);
      },
    },
    mask: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'middle',
      validator(pos) {
        return TOAST_POSITION.includes(pos);
      },
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
};
</script>
