<template>
  <div class="lake-search-bar">
    <form class="lake-search-bar-form" action="#" @submit.prevent="onSubmit">
      <div class="lake-search-bar-box">
        <div class="lake-search-bar-fake-placeholder" v-show="!isFocus" @click.prevent="focus">
          <span class="lake-search-bar-fake-placeholder-text">
            <lake-icon name="search"></lake-icon>
            {{ placeholder }}
          </span>
        </div>
        <div class="lake-search-bar-real-input">
          <lake-icon class="lake-search-bar-search-icon" name="search"></lake-icon>
          <input
            type="search"
            class="lake-search-bar-input"
            :placeholder="placeholder"
            :autocomplete="false"
            :disabled="disabled"
            :value="value"
            ref="searchInput"
            @input="$emit('input', $event.target.value)"
            @change="onChange"
            @focus="onFocus"
            @blur="onBlur"
          />
          <lake-icon class="lake-search-bar-clear-icon" name="clear" @click.native="onClean" v-if="value"></lake-icon>
        </div>
      </div>
    </form>
    <div class="lake-search-bar-cancel" @click.prevent.stop="onCancel" v-show="isFocus">取消</div>
  </div>
</template>

<script>
import lakeIcon from '../icon';

export default {
  name: 'lake-search-bar',
  components: {
    lakeIcon,
  },
  props: {
    value: {
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
    focus() {
      this.$refs.searchInput.focus();
    },
    onClean() {
      this.$emit('input', '');
      this.$emit('clean');
      this.focus();
    },
    onCancel() {
      this.isFocus = false;
      this.$emit('cancel');
    },
    onChange($event) {
      const { value } = $event.target;

      if (value && value.trim()) {
        this.$emit('change', $event.target.value);
      }
    },
    onSubmit() {
      if (this.value.trim()) {
        this.$emit('submit', this.value);
      }
    },
    onFocus() {
      this.isFocus = true;
      this.$emit('focus');
    },
    onBlur() {
      if (!this.value) {
        this.isFocus = false;
      }

      this.$emit('blur');
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-search-bar {
  display: flex;
  align-items: center;
  padding: 6px 9px;
  position: relative;
  background-color: #ececec;
  .border-1px-top();
  .border-1px-bottom();

  &-form {
    flex: 1;
  }
  &-box {
    position: relative;
    display: flex;
    padding: 0 5px;
    height: 30px;
    background-color: #fff;
    align-items: center;
    border-radius: 4px;
    overflow: hidden;
  }
  &-fake-placeholder {
    width: 100%;
    position: absolute;
    z-index: 2;
    left: 0;
    text-align: center;
    background-color: #fff;
    color: @color-text-secondary;
    line-height: 16px;
    padding: 7px 0;
  }
  &-real-input {
    position: relative;
    width: 100%;
  }
  &-input {
    width: 100%;
    padding: 0 26px;
    line-height: 2;
    border: none;
    outline: none;
    &::placeholder {
      text-align: left;
    }
    &::-webkit-search-cancel-button {
      display: none;
    }
  }
  &-search-icon,
  &-clear-icon {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 16px;
    height: 16px;
    padding: 6px 0 6px 6px;
  }
  &-search-icon {
    left: 0;
  }
  &-clear-icon {
    right: 0;
  }
  &-cancel {
    margin-left: 6px;
    font-size: 13px;
    color: @color-text-link;
  }
}
</style>
