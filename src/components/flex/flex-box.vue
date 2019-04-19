<template>
  <div class="lake-flex-box" :class="flexClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'lake-flex-box',
  props: {
    /**
     * flex-direction: row | row-reverse | column | column-reverse;
     */
    direction: {
      type: String,
    },
    /**
     * flex-wrap: nowrap | wrap | wrap-reverse;
     */
    wrap: {
      type: String,
    },
    /**
     * justify-content: flex-start | flex-end | center | space-between | space-around;
     */
    justify: {
      type: String,
    },
    /**
     * align-items: flex-start | flex-end | center | baseline | stretch;
     */
    align: {
      type: String,
    },
    /**
     * align-content: flex-start | flex-end | center | space-between | space-around | stretch;
     */
    alignContent: {
      type: String,
    },
  },
  computed: {
    flexClass() {
      return [
        this.direction ? `flex-direction-${this.direction}` : '',
        this.wrap ? `flex-wrap-${this.wrap}` : '',
        this.justify ? `justify-content-${this.justify}` : '',
        this.align ? `align-items-${this.align}` : '',
        this.alignContent ? `align-content-${this.alignContent}` : '',
      ];
    },
  },
};
</script>

<style lang="less">
.lake-flex-box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;

  &.flex-direction-row {
    flex-direction: row;
  }
  &.flex-direction-row-reverse {
    flex-direction: row-reverse;
  }
  &.flex-direction-column {
    flex-direction: column;
  }
  &.flex-direction-column-reverse {
    flex-direction: column-reverse;
  }

  &.flex-wrap-nowrap {
    flex-wrap: nowrap;
  }
  &.flex-wrap-wrap {
    flex-wrap: wrap;
  }
  &.flex-wrap-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  &.justify-content-flex-start {
    justify-content: flex-start;
  }
  &.justify-content-flex-end {
    justify-content: flex-end;
  }
  &.justify-content-center {
    justify-content: center;
  }
  &.justify-content-space-between {
    justify-content: space-between;
  }
  &.justify-content-space-around {
    justify-content: space-around;
  }

  &.align-items-flex-start {
    align-items: flex-start;
  }
  &.align-items-flex-end {
    align-items: flex-end;
  }
  &.align-items-center {
    align-items: center;
  }
  &.align-items-baseline {
    align-items: baseline;
  }
  &.align-items-stretch {
    align-items: stretch;
  }

  &.align-content-flex-start {
    align-content: flex-start;
  }
  &.align-content-flex-end {
    align-content: flex-end;
  }
  &.align-content-center {
    align-content: center;
  }
  &.align-content-space-between {
    align-content: space-between;
  }
  &.align-content-space-around {
    align-content: space-around;
  }
  &.align-content-stretch {
    align-content: stretch;
  }

  .lake-flex-box-item {
    flex: 1;
  }
}
</style>
