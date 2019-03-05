<template>
  <div>
    <lake-mask :show="show" :lock-scroll="true" @click="onCancel" />
    <transition name="lake-slide">
      <div class="lake-actionsheet" v-if="show">
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
            <button class="lake-actionsheet-operation-cancel" @click.prevent.stop="onCancel">
              {{ cancelBtnText }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import lakeMask from '../mask';

export default {
  name: 'lake-actionsheet',
  components: { lakeMask },
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
