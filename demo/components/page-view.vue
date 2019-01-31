<template>
  <main class="page-view" :style="{ height: `${height === 0 ? 'auto' : `${height}px`}` }">
    <header class="page-view-header">{{ title }}</header>
    <section class="page-view-body">
      <slot></slot>
    </section>
  </main>
</template>

<script>
export default {
  name: 'page-view',
  props: {
    title: {
      type: String,
      default: 'UI',
    },
    height: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="less" scoped>
.page-view {
  .page-view-header {
    padding: 20px 10px;
    font-size: 21px;
    font-weight: bold;
    color: #333;
  }
}
</style>
