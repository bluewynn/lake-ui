<template>
  <div class="lake-carousel-item" :class="active ? 'active' : ''">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'lake-carousel-item',
  data() {
    return {
      active: false,
    };
  },
};
</script>
