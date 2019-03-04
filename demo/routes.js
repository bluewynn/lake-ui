import { upperFirst } from './common/util';

const routes = [
  {
    path: '',
    component: () => import('./pages/home.vue'),
  },
  {
    path: '/flex',
    component: () => import('./pages/flex.vue'),
  },
  {
    path: '/button',
    component: () => import('./pages/button.vue'),
  },
  {
    path: '/tabbar',
    component: () => import('./pages/tabbar.vue'),
  },
  {
    path: '/toast',
    component: () => import('./pages/toast.vue'),
  },
  {
    path: '/notice-bar',
    component: () => import('./pages/notice-bar.vue'),
  },
  {
    path: '/pagination',
    component: () => import('./pages/pagination.vue'),
  },
  {
    path: '/list',
    component: () => import('./pages/list.vue'),
  },
  {
    path: '/carousel',
    component: () => import('./pages/carousel.vue'),
  },
  {
    path: '/modal',
    component: () => import('./pages/modal.vue'),
  },
  {
    path: '/action-sheet',
    component: () => import('./pages/actionsheet.vue'),
  },
  {
    path: '/search-bar',
    component: () => import('./pages/search-bar.vue'),
  },
  {
    path: '/tabs',
    component: () => import('./pages/tabs.vue'),
  },
  {
    path: '/tag',
    component: () => import('./pages/tag.vue'),
  },
  {
    path: '/image-upload',
    component: () => import('./pages/image-upload.vue'),
  },
  {
    path: '/field',
    component: () => import('./pages/field.vue'),
  },
  {
    path: '/badge',
    component: () => import('./pages/badge.vue'),
  },
  {
    path: '/progress',
    component: () => import('./pages/progress.vue'),
  },
  {
    path: '/popup',
    component: () => import('./pages/popup.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

routes.forEach(route => {
  route.meta = {
    title: upperFirst(route.path.replace('/', '')),
  };
});

export default routes;
