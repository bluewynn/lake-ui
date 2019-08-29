<template>
  <transition name="lake-slide-right" appear>
    <div class="lake-result" v-if="show">
      <div class="lake-result-wrapper">
        <lake-icon class="lake-result-icon" :name="type" :width="60" :height="60"></lake-icon>
        <div class="lake-result-title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="lake-result-desc" v-if="desc || $slots.desc">
          <slot name="desc">{{ desc }}</slot>
        </div>
      </div>
      <div class="lake-result-btn-group">
        <slot name="btn-group">
          <lake-button
            class="lake-result-btn-confirm"
            type="primary"
            size="large"
            @click="confirm"
            v-if="showConfirmBtn"
            >{{ confirmBtnText }}</lake-button
          >
          <lake-button class="lake-result-btn-cancel" size="large" v-if="showCancelBtn" @click="cancel">{{
            cancelBtnText
          }}</lake-button>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
import lakeButton from '../button';
import lakeIcon from '../icon';

const RESULT_TYPES = ['success', 'fail', 'info'];

export default {
  name: 'lake-result',
  components: {
    lakeButton,
    lakeIcon,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'success',
      validator(type) {
        return type === '' || RESULT_TYPES.includes(type);
      },
    },
    title: {
      type: String,
      default: '操作成功',
    },
    desc: {
      type: String,
    },
    hashRoute: {
      type: Boolean,
      default: true,
    },
    showConfirmBtn: {
      type: Boolean,
      default: true,
    },
    showCancelBtn: {
      type: Boolean,
      default: true,
    },
    confirmBtnText: {
      type: String,
      default: '确定',
    },
    cancelBtnText: {
      type: String,
      default: '取消',
    },
  },
  data() {
    return {
      unwatcher: null,
    };
  },
  computed: {
    hashName() {
      return `result_${this.type}`;
    },
  },
  mounted() {
    if (this.hashRoute && this.$router) {
      this.unwatcher = this.$watch('$route.hash', hash => {
        if (hash.replace('#', '') !== this.hashName) {
          this.$emit('close');
        }
      });
    }
  },
  beforeDestroy() {
    this.unwatcher && this.unwatcher();
    this.$emit('close');
  },
  watch: {
    show(show) {
      if (show && this.hashRoute && this.$router) {
        this.$router.push({ path: this.$route.fullPath, hash: this.hashName });
      }
    },
  },
  methods: {
    confirm() {
      this.$emit('confirm');
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-result {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: @z-index-popup;

  &-wrapper {
    text-align: center;
  }
  &-title {
    color: @color-text-primary;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 25px;
    padding: 20px 30px 0;
  }
  &-desc {
    color: @color-text-secondary;
    font-size: 14px;
    line-height: 20px;
    padding: 20px 30px 0;
    .long-break();
  }
  &-icon {
    margin: 80px auto 0;
  }
  &-btn-group {
    margin-top: 80px;
    padding: 0 30px;
  }
  &-btn-cancel {
    margin-top: 15px;
  }
}
</style>
