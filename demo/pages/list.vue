<template>
  <page-view title="List">
    <div class="demo-section">
      <header class="header">Basic</header>
      <div class="body">
        <lake-pull-refresh :loading="isLoading" @refresh="onRefresh">
          <lake-list
            class="item-list"
            :use-body="true"
            :loading="isLoading"
            :finished="isFinished"
            @load="onLoad"
          >
            <div class="list-item" v-for="item in list" :key="item.id">{{ item.title }}</div>
          </lake-list>
        </lake-pull-refresh>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-list',
  components: {
    pageView,
  },
  data() {
    return {
      list: [],
      isLoading: false,
      isFinished: false,
    };
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      this.isLoading = true;

      setTimeout(() => {
        const data = [];
        for (let index = 0; index < 20; index++) {
          data.push({
            id: `key-${Math.random().toString()}`,
            title: `I am Title ${Math.random().toString()}`,
          });
        }

        this.list = this.list.concat(data);
        this.isLoading = false;

        if (this.list.length >= 80) {
          this.isFinished = true;
        }
      }, 1000);
    },
    onRefresh() {
      this.list = [];
      this.onLoad();
    },
  },
};
</script>

<style lang="less" scoped>
// .item-list {
//   height: 550px;
//   overflow-y: auto;
// }
.list-item {
  background-color: #fff;
  padding: 15px;
  text-align: center;
  margin-bottom: 10px;
}
</style>
