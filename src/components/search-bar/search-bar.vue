<template>
  <div class="lake-search-bar">
    <form class="lake-search-bar-form" action="#" @submit.prevent="onSubmit">
      <div class="lake-search-bar-box">
        <div class="lake-search-bar-fake-placeholder" v-show="!isFocus && !value" @click.prevent="focus">
          <lake-icon class="lake-search-bar-icon" name="search" size="md" fill="#B3B3B3"> </lake-icon>
          {{ placeholder }}
        </div>
        <div class="lake-search-bar-real-input">
          <lake-icon class="lake-search-bar-icon lake-search-bar-search-icon" name="search" size="md" fill="#B3B3B3">
          </lake-icon>
          <input
            type="search"
            class="lake-search-bar-input"
            :placeholder="placeholder"
            :autocomplete="autocomplete ? 'on' : 'off'"
            :disabled="disabled"
            :value="value"
            ref="searchInput"
            @input="$emit('input', $event.target.value)"
            @change="onChange"
            @focus="onFocus"
            @blur="onBlur"
          />
          <lake-icon
            class="lake-search-bar-icon lake-search-bar-clear-icon"
            name="clear"
            fill="#B3B3B3"
            @click.native="onClean"
            v-if="value"
          >
          </lake-icon>
        </div>
      </div>
    </form>
    <div class="lake-search-bar-cancel" @click.prevent.stop="onCancel" v-show="isFocus || value">
      {{ cancelBtnText }}
    </div>
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
      required: true,
    },
    placeholder: {
      type: String,
      default: '搜索',
    },
    autocomplete: {
      type: Boolean,
      default: false,
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
    cancelBtnText: {
      type: String,
      default: '取消',
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
    reset() {
      this.isFocus = false;
      this.$emit('input', '');
    },
    onClean() {
      this.$emit('input', '');
      this.$emit('clean');
      this.focus();
    },
    onCancel() {
      this.reset();
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
      this.$emit('blur');
    },
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

@input-bg-color: #f5f5f5;

.lake-search-bar {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  position: relative;
  background-color: #fff;

  &-form {
    flex: 1;
  }
  &-box {
    position: relative;
    display: flex;
    padding: 0 5px;
    height: 32px;
    background-color: @input-bg-color;
    align-items: center;
    border-radius: 4px;
    overflow: hidden;
    font-size: 14px;
  }
  &-fake-placeholder {
    width: 100%;
    position: absolute;
    z-index: 2;
    left: 0;
    text-align: center;
    background-color: @input-bg-color;
    color: @color-text-info;
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
    line-height: 20px;
    font-size: 14px;
    border: none;
    outline: none;
    color: @color-text-primary;
    background-color: @input-bg-color;
    &::placeholder {
      text-align: left;
      color: @color-text-info;
    }
    &::-webkit-search-cancel-button {
      display: none;
    }
  }
  &-icon {
    width: 16px;
    height: 16px;
    vertical-align: top !important;
  }
  &-search-icon,
  &-clear-icon {
    position: absolute;
    top: 0;
    z-index: 1;
    padding: 2px 0 2px 6px;
  }
  &-search-icon {
    left: 0;
  }
  &-clear-icon {
    right: 0;
  }
  &-cancel {
    margin-left: 15px;
    font-size: 16px;
    line-height: 22px;
    color: @brand-primary;
  }
}
</style>
