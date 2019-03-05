<template>
  <page-view title="Home">
    <div class="component-group" v-for="(group, key) of demoComponents" :key="key">
      <div class="component-group-name" @click="collapse(key)">{{ key }}</div>
      <div class="component-group-items" v-show="collapsesShow[key]">
        <div class="component-group-item" v-for="item in group" :key="item.name">
          <router-link class="component-group-item-link" :to="item.path">{{ item.name }}</router-link>
        </div>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';
import { groupBy } from '../common/util';

export default {
  name: 'page-home',
  components: {
    pageView,
  },
  data() {
    return {
      demoComponents: {},
      collapsesShow: {},
    };
  },
  mounted() {
    const { routes } = this.$router.options;

    this.demoComponents = groupBy(routes, 'meta.group');
    this.collapsesShow = Object.keys(this.demoComponents).reduce((prev, crt) => {
      prev[crt] = true;
      return prev;
    }, {});
  },
  methods: {
    collapse(key) {
      this.collapsesShow[key] = !this.collapsesShow[key];
    },
  },
};
</script>

<style lang="less" scoped>
.component-group {
  background-color: #fff;
  border-radius: 5px;
  margin: 0 10px 20px;
  &-name {
    padding: 20px;
    font-size: 18px;
    font-weight: normal;
    color: #333;
  }
  &-item-link {
    outline: none;
    color: #666;
    font-size: 15px;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    &:active {
      background-color: #e9f5ff;
    }
    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 100%;
      margin-right: 6px;
      display: block;
      background-color: #66b0ff;
    }
  }
}
</style>
