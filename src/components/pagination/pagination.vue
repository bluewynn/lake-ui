<template>
  <div class="lake-pagi" :class="`lake-pagi-${size}`" v-show="isShow">
    <div v-if="!simple" class="lake-pagi-pager" :class="current === 1 ? 'lake-pagi-pager-disabled' : ''" @click="first">
      首页
    </div>
    <div class="lake-pagi-pager" :class="current === 1 ? 'lake-pagi-pager-disabled' : ''" @click="prev">
      上页
    </div>
    <div class="lake-pagi-pager lake-pagi-pager-select">
      {{ `${current}/${totalPage}` }}
      <select v-model="current">
        <option :value="page" v-for="page in totalPage" :key="page">{{ `第${page}页` }}</option>
      </select>
    </div>
    <div class="lake-pagi-pager" :class="current === totalPage ? 'lake-pagi-pager-disabled' : ''" @click="next">
      下页
    </div>
    <div
      v-if="!simple"
      class="lake-pagi-pager"
      :class="current === totalPage ? 'lake-pagi-pager-disabled' : ''"
      @click="last"
    >
      末页
    </div>
  </div>
</template>

<script>
const PAGINATION_SIZES = ['small', 'normal'];

export default {
  name: 'lake-pagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'normal',
      validator(size) {
        return PAGINATION_SIZES.includes(size);
      },
    },
  },
  data() {
    return {
      current: this.currentPage,
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.perPage);
    },
    isShow() {
      return this.current <= this.totalPage && this.totalPage > 1;
    },
  },
  watch: {
    current(currentPage, prevPage) {
      this.$emit('change', currentPage, prevPage);
    },
  },
  methods: {
    prev() {
      if (this.current === 1) return;

      this.current--;
    },
    next() {
      if (this.current === this.totalPage) return;

      this.current++;
    },
    first() {
      if (this.current === 1) return;

      this.current = 1;
    },
    last() {
      if (this.current === this.totalPage) return;

      this.current = this.totalPage;
    },
  },
};
</script>

<style lang="less">
.lake-pagi {
  display: flex;
  align-items: center;
  align-content: center;

  &&-small {
    padding: 0 20px;
    .pagination-pager {
      line-height: 30px;
    }
  }

  &-pager {
    @background-color: #f2f3f6;
    flex: 1;
    margin: 4px;
    text-align: center;
    background-color: @background-color;
    color: #333;
    line-height: 40px;
    border: 1px solid #efefef;
    transition: background-color 0.3s;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &:active {
      background-color: darken(@background-color, 10%);
    }
  }

  &-pager-disabled {
    background-color: #f8f9fa;
    color: #bcbcbc;
    &:active {
      background-color: #f8f9fa;
    }
  }

  &-pager-select {
    position: relative;
    background-color: white;

    > select {
      cursor: pointer;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      width: 100%;
      height: 100%;

      option {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
