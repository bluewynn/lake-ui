<template>
  <page-view title="Tag">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-tag
          v-for="tag in tags"
          :key="tag.name"
          :selected="tag.selected || false"
          :close="tag.close || false"
          :disabled="tag.disabled || false"
          :size="tag.size || 'normal'"
          @close="onTagClose(tag)"
        >{{ tag.name }}</lake-tag>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-tag',
  components: {
    pageView,
  },
  data() {
    return {
      tags: [
        { name: 'Basic' },
        { name: 'Selected', selected: true },
        { name: 'EnableClose', close: true },
        { name: 'Disable', disabled: true },
        { name: 'Small', size: 'small' },
        { name: 'Small Selected', size: 'small', selected: true },
      ],
    };
  },
  methods: {
    onTagClose(closeTag) {
      this.tags = this.tags.filter(tag => tag.name !== closeTag.name);
    },
  },
};
</script>
