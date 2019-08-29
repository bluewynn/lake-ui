<script>
const CELL_SIZES = ['normal', 'large'];

export default {
  name: 'lake-cell',
  props: {
    tagName: {
      type: String,
      default: 'div',
    },
    size: {
      type: String,
      default: '',
      validator(size) {
        return size === '' || CELL_SIZES.includes(size);
      },
    },
    hover: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
  render(h) {
    const CustomTag = `${this.tagName}`;

    return (
      <CustomTag
        class={['lake-cell', this.size ? `lake-cell-${this.size}` : '', this.hover ? 'lake-cell-hover' : '']}
        {...{ attrs: this.$attrs }}
      >
        {this.title || this.$slots.title ? (
          <div class="lake-cell-bd">
            {this.$slots.title ? this.$slots.title : <div class="lake-cell-title">{this.title}</div>}
          </div>
        ) : null}
        <div class={['lake-cell-ft', this.title || this.$slots.title ? 'lake-cell-has-bd' : '']}>
          {this.$slots.content ? this.$slots.content : <div class="lake-cell-content">{this.content}</div>}
        </div>
      </CustomTag>
    );
  },
};
</script>

<style lang="less">
@import '../../style/themes/default.less';
@import '../../style/common/mixins.less';

.lake-cell {
  position: relative;
  display: flex;
  align-items: center;
  padding: 14px 15px;
  background-color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;
  .border-1px-bottom(15px, 15px);
  &&-hover:active {
    background-color: #ececec;
  }
  &&-large {
    padding: 20px 15px;
  }
  &-bd {
    min-width: 64px;
    min-height: 22px;
    margin-right: 10px;
  }
  &-title {
    color: @color-text-secondary;
    font-size: 16px;
    line-height: 22px;
  }
  &-ft {
    flex: 1;
    min-width: 0;
  }
  &-has-bd {
    margin-left: 10px;
  }
  &-content {
    color: @color-text-primary;
    font-size: 16px;
    line-height: 22px;
  }
}
.lake-cell:last-child {
  .border-1px-hide();
}
</style>
