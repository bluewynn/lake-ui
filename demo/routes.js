import home from './pages/home.vue';
import flex from './pages/flex.vue';
import button from './pages/button.vue';
import tabBar from './pages/tab-bar.vue';
import toast from './pages/toast.vue';
import noticeBar from './pages/notice-bar.vue';
import pagination from './pages/pagination.vue';
import list from './pages/list.vue';
import carousel from './pages/carousel.vue';
import modal from './pages/modal.vue';
import actionSheet from './pages/actionsheet.vue';
import searchBar from './pages/search-bar.vue';
import tabs from './pages/tabs.vue';
import tag from './pages/tag.vue';
import popover from './pages/popover.vue';
import imageUpload from './pages/image-upload.vue';

export default [
  {
    path: '',
    component: home,
  },
  {
    path: '/flex',
    component: flex,
  },
  {
    path: '/button',
    component: button,
  },
  {
    path: '/tab-bar',
    component: tabBar,
  },
  {
    path: '/toast',
    component: toast,
  },
  {
    path: '/notice-bar',
    component: noticeBar,
  },
  {
    path: '/pagination',
    component: pagination,
  },
  {
    path: '/list',
    component: list,
  },
  {
    path: '/carousel',
    component: carousel,
  },
  {
    path: '/modal',
    component: modal,
  },
  {
    path: '/action-sheet',
    component: actionSheet,
  },
  {
    path: '/search-bar',
    component: searchBar,
  },
  {
    path: '/tabs',
    component: tabs,
  },
  {
    path: '/tag',
    component: tag,
  },
  {
    path: '/popover',
    component: popover,
  },
  {
    path: '/image-upload',
    component: imageUpload,
  },
  {
    path: '*',
    component: home,
  },
];
