<template>
  <div class="lake-flex-box" :class="flexClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'flex-box',
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
