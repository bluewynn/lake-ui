<template>
  <lake-popup :show="show" :lock-scroll="true" :transparent="true">
    <div class="lake-toast">
      <div class="lake-toast-wrapper">
        <div class="lake-toast-inline">
          <div class="lake-toast-content" :class="[position, type]">
            <slot name="icon"></slot>
            {{ msg }}
          </div>
        </div>
      </div>
    </div>
  </lake-popup>
</template>

<script>
import lakePopup from '../popup';

const TOAST_MODES = ['success', 'loading', 'error', 'text'];
const TOAST_POSITION = ['top', 'middle', 'bottom'];

export default {
  name: 'lake-toast',
  components: { lakePopup },
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
    position: {
      type: String,
      default: 'middle',
      validator(pos) {
        return TOAST_POSITION.includes(pos);
      },
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-toast {
  text-align: center;
  &-inline {
    display: inline-block;
  }
  &-content {
    background-color: #5f5c5c;
    color: #fff;
    border-radius: 3px;
    padding: 6px 15px;
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
    min-width: 40px;
    max-width: 230px;
    .long-break();
    &.top {
      top: 10%;
    }
    &.bottom {
      top: initial;
      bottom: 10%;
    }
  }
  &-success {
    background-color: @brand-success;
  }
  &-error {
    background-color: @brand-error;
  }
}
</style>
