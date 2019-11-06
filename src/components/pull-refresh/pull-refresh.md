基础调用模式

```html
<lake-pull-refresh :loading="isLoading" @refresh="onRefresh">
  <div>hi</div>
</lake-pull-refresh>
```

配合`list`组件使用

```html
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
```
