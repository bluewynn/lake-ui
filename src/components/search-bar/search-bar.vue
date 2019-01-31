<template>
  <div class="lake-search-bar">
    <form class="lake-search-bar-form" action="#" @submit.prevent="onSubmit">
      <div class="lake-search-bar-box">
        <input
          type="search"
          class="lake-search-bar-input"
          :placeholder="placeholder"
          :autocomplete="false"
          :disabled="disabled"
          v-model.trim="keyword"
          @focus="onFocus"
          @blur="onBlur"
          @change="onChange"
        >
        <i class="lake-search-bar-clean" @click.prevent="onClean" v-show="keyword">x</i>
      </div>
    </form>
    <div class="lake-search-bar-cancel" @click.prevent="onCancel" v-show="isFocus">取消</div>
  </div>
</template>

<script>
export default {
  name: 'lake-search-bar',
  model: {
    prop: 'keyword',
  },
  props: {
    keyword: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '搜索',
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    showCancelBtn: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isFocus: false,
    };
  },
  methods: {
    onClean() {
      this.keyword = '';
      this.$emit('clean');
    },
    onCancel() {
      this.$emit('cancel');
    },
    onSubmit() {
      if (this.keyword.trim()) {
        this.$emit('submit', this.keyword);
      }
    },
    onFocus() {
      this.isFocus = true;
      this.$emit('focus');
    },
    onBlur() {
      this.isFocus = false;
      this.$emit('blur');
    },
    onChange() {
      this.$emit('change', this.keyword);
    },
    onScroll() {},
  },
  mounted() {
    this.$nextTick().then(() => {
      window.addEventListener('scroll', this.onScroll);
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style lang="less" scoped>
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-search-bar {
  display: flex;
  align-items: center;
  padding: 6px;
  position: relative;
  background-color: #ececec;
  .border-1px-top();
  .border-1px-bottom();

  &.lake-search-bar-fixed {
    position: fixed;
    top: 0;
    left: 0;
  }

  &-form {
    flex: 1;
  }
  &-box {
    position: relative;
  }
  &-input {
    width: 100%;
    line-height: 1.8;
    border: none;
    border-radius: 4px;
    outline: none;
    padding: 0 5px;
    &::placeholder {
      text-align: center;
    }
    &::-webkit-search-cancel-button {
      display: none;
    }
  }
  &-clean {
    position: absolute;
    right: 5px;
    top: 4px;
    width: 16px;
    height: 16px;
    background-color: #b5b5b5;
    border-radius: 100%;
    text-align: center;
    color: #fff;
  }
  &-cancel {
    margin: 0 6px;
    font-size: 13px;
    color: @color-text-link;
  }
}
</style>
