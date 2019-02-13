<template>
  <div>
    <popup @click-mask="onCancel" v-if="show"></popup>
    <div class="lake-actionsheet">
      <transition name="slide">
        <div class="lake-actionsheet-wrapper" v-if="show">
          <div class="lake-actionsheet-title" v-if="title">
            <slot name="title">{{ title }}</slot>
          </div>
          <section class="lake-actionsheet-body">
            <slot name="body">
              <div
                class="lake-actionsheet-item"
                v-for="(item, index) in items"
                :key="index"
                @click.prevent.stop="onItemSelect(item)"
              >
                <div class="lake-actionsheet-item-name">{{ item.name }}</div>
                <div class="lake-actionsheet-subitem-name" v-if="item.subName">{{ item.subName}}</div>
              </div>
            </slot>
          </section>
          <div class="lake-actionsheet-operation" v-if="showCancelBtn">
            <button
              class="lake-actionsheet-operation-cancel"
              @click.prevent.stop="onCancel"
            >{{ cancelBtnText }}</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import popup from '../popup';

export default {
  name: 'lake-actionsheet',
  components: { popup },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    maskClose: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default() {
        return [];
      },
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
    return {};
  },
  methods: {
    onItemSelect(item) {
      this.$emit('update:show', false);
      this.$emit('select', item);
    },
    onCancel() {
      this.$emit('update:show', false);
      this.$emit('cancel');
    },
  },
};
</script>

<style lang="less" scoped>
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-actionsheet {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  &-wrapper {
    background-color: @color-bg-body;
    overflow: hidden;
  }

  &-title {
    position: relative;
    text-align: center;
    padding: 12px 15px;
    font-weight: bold;
    font-size: 13px;
    color: @color-text-primary;
    .single-line();
    .border-1px-bottom();
  }
  &-body {
    max-height: 300px;
    min-height: 100px;
    overflow-y: auto;
  }
  &-item {
    position: relative;
    padding: 12px 15px;
    background-color: @color-bg-base;
    text-align: center;
    .border-1px-bottom();
  }
  &-item-name {
    font-size: 15px;
    line-height: 1.5;
    color: @color-text-primary;
    .single-line();
  }
  &-subitem-name {
    font-size: 12px;
    line-height: 1.5;
    color: @color-text-secondary;
    .single-line();
  }
  &-operation {
    display: flex;
    position: relative;
    align-items: center;
    margin-top: 6px;
  }
  &-operation-cancel {
    flex: 1;
    position: relative;
    text-align: center;
    border: none;
    outline: none;
    background-color: #fff;
    padding: 12px 10px;
    font-size: 15px;
    color: @color-text-secondary;
    &:active {
      background-color: darken(#fff, 10%);
    }
  }
}

.slide-enter,
.slide-enter-active {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}
.slide-enter-active {
  animation: 0.2s ease slide 0.2s;
}
.slide-leave-active {
  animation: 0.2s ease slide 0.2s reverse;
}

@keyframes slide {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
