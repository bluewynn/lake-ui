<template>
  <page-view title="Home"></page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-home',
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
