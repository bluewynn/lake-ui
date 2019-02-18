<template>
  <page-view title="Modal">
    <div class="demo-section">
      <header class="header">Alert</header>
      <div class="body">
        <lake-button @click="isShowAlertModal = !isShowAlertModal">Alert</lake-button>
        <lake-modal
          title="Alert"
          msg="This is a danger operation"
          :show.sync="isShowAlertModal"
          @confirm="isShowAlertModal = false"
        ></lake-modal>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Confirm</header>
      <div class="body">
        <lake-button @click="isShowConfirmModal = !isShowConfirmModal">Confirm</lake-button>
        <lake-modal
          title="Confirm"
          msg="This is your choose This is your choose This is your choose This is your choose"
          :show.sync="isShowConfirmModal"
          :show-cancel-btn="true"
          @confirm="isShowConfirmModal = false"
          @cancel="isShowConfirmModal = false"
        ></lake-modal>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Without Title</header>
      <div class="body">
        <lake-button @click="isShowWithoutTitleModal = !isShowWithoutTitleModal">Without Title</lake-button>
        <lake-modal
          msg="No Title"
          :show.sync="isShowWithoutTitleModal"
          @confirm="isShowWithoutTitleModal = false"
          @cancel="isShowWithoutTitleModal = false"
        ></lake-modal>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Custom</header>
      <div class="body">
        <lake-button @click="isShowCustomModal = !isShowCustomModal">Custom</lake-button>
        <lake-modal
          msg="No Title"
          :show.sync="isShowCustomModal"
          @confirm="isShowCustomModal = false"
          @cancel="isShowCustomModal = false"
        >
          <lake-list
            class="item-list"
            slot="body"
            :loading="isLoading"
            :finished="isFinished"
            @load="onLoad"
          >
            <div class="list-item" v-for="item in list" :key="item.id">{{ item.title }}</div>
          </lake-list>
        </lake-modal>
      </div>
    </div>

    <div class="demo-section">
      <header class="header">Function</header>
      <div class="body">
        <lake-button :inline="true" @click="callAlert">this.$alert()</lake-button>
        <lake-button :inline="true" @click="callConfirm">this.$confirm()</lake-button>
      </div>
    </div>
  </page-view>
</template>

<script>
import pageView from '../components/page-view.vue';

export default {
  name: 'page-modal',
  components: {
    pageView,
  },
  data() {
    return {
      isShowAlertModal: false,
      isShowConfirmModal: false,
      isShowWithoutTitleModal: false,
      isShowCustomModal: false,
      isLoading: false,
      isFinished: false,
      list: [],
    };
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
    callAlert() {
      this.$alert({
        title: '确认',
        msg: '确认文字',
      }).then(() => {
        // this.$toast('resolve');
      });
    },
    callConfirm() {
      this.$confirm({
        title: '确认',
        msg: '确认文字',
      }).then(isConfirm => {
        // this.$toast(`resolve: ${isConfirm : 'true' : 'false'}`);
      });
    },
  },
  mounted() {
    this.onLoad();
  },
};
</script>

<style lang="less" scoped>
.item-list {
  min-height: 400px;
  background-color: #eee;
  padding: 10px;
  .list-item {
    padding: 10px;
    text-align: left;
    margin-bottom: 10px;
    background-color: #fff;
    font-size: 12px;
  }
}
</style>
