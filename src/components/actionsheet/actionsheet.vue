<template>
  <lake-popup :show="show" position="bottom" :lock-scroll="true" @click-mask="onClose">
    <div class="lake-actionsheet">
      <div class="lake-actionsheet-wrapper">
        <div class="lake-actionsheet-title" v-if="title">
          <slot name="title">{{ title }}</slot>
        </div>
        <section class="lake-actionsheet-body">
          <slot name="body">
            <lake-cell
              class="lake-actionsheet-item"
              v-for="(item, index) in items"
              :key="index"
              @click.native.prevent.stop="onItemSelect(item)"
            >
              <template slot="content">
                <div class="lake-actionsheet-item-name">{{ item.name }}</div>
                <div class="lake-actionsheet-subitem-name" v-if="item.subName">{{ item.subName }}</div>
              </template>
            </lake-cell>
          </slot>
        </section>
        <div class="lake-actionsheet-operation" v-if="showCancelBtn">
          <lake-button class="lake-actionsheet-operation-cancel" size="normal" @click="onClose">{{
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
      this.$emit('select', item);
      this.$emit('close');
    },
    onClose() {
      this.$emit('close');
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
    text-align: center;
  }
  &-item-name {
    text-align: center;
    font-size: 15px;
    .single-line();
  }
  &-subitem-name {
    font-size: 12px;
    margin-top: 4px;
    color: @color-text-secondary;
    .single-line();
  }
  &-operation {
    margin-top: 6px;
  }
  &-operation-cancel {
    border: none;
    border-radius: 0;
    color: @color-text-secondary;
  }
}
</style>
