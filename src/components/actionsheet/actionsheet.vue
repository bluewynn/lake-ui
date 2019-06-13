<template>
  <lake-popup :show="show" position="bottom" :lock-scroll="true" @click="onCancel">
    <div class="lake-actionsheet">
      <div class="lake-actionsheet-wrapper">
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
              <div class="lake-actionsheet-subitem-name" v-if="item.subName">{{ item.subName }}</div>
            </div>
          </slot>
        </section>
        <div class="lake-actionsheet-operation" v-if="showCancelBtn">
          <lake-button class="lake-actionsheet-operation-cancel" size="normal" @click="onCancel">{{
            cancelBtnText
          }}</lake-button>
        </div>
      </div>
    </div>
  </lake-popup>
</template>

<script>
import lakePopup from '../popup';
import lakeButton from '../button';
import { cell as lakeCell, cellGroup as lakeCellGroup } from '../cell';

export default {
  name: 'lake-actionsheet',
  components: { lakePopup, lakeCell, lakeCellGroup, lakeButton },
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

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-actionsheet {
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
    border: none;
    border-radius: 0;
    color: @color-text-secondary;
  }
}
</style>
