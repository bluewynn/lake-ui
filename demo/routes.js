import { upperFirst, camelCase } from './common/util';

const routes = [
  {
    path: '',
    component: () => import('./pages/home.vue'),
  },

  /* Basic */
  {
    path: '/flex',
    component: () => import('./pages/flex.vue'),
    meta: { group: 'Basic' },
  },
  {
    path: '/button',
    component: () => import('./pages/button.vue'),
    meta: { group: 'Basic' },
  },
  {
    path: '/popup',
    component: () => import('./pages/popup.vue'),
    meta: { group: 'Basic' },
  },

  /* Form */
  {
    path: '/field',
    component: () => import('./pages/field.vue'),
    meta: { group: 'Form' },
  },
  {
    path: '/image-upload',
    component: () => import('./pages/image-upload.vue'),
    meta: { group: 'Form' },
  },

  /* Display */
  {
    path: '/carousel',
    component: () => import('./pages/carousel.vue'),
    meta: { group: 'Display' },
  },
  {
    path: '/list',
    component: () => import('./pages/list.vue'),
    meta: { group: 'Display' },
  },
  {
    path: '/notice-bar',
    component: () => import('./pages/notice-bar.vue'),
    meta: { group: 'Display' },
  },
  {
    path: '/badge',
    component: () => import('./pages/badge.vue'),
    meta: { group: 'Display' },
  },
  {
    path: '/search-bar',
    component: () => import('./pages/search-bar.vue'),
    meta: { group: 'Display' },
  },
  {
    path: '/tag',
    component: () => import('./pages/tag.vue'),
    meta: { group: 'Display' },
  },

  /* Feedback */
  {
    path: '/toast',
    component: () => import('./pages/toast.vue'),
    meta: { group: 'Feedback' },
  },
  {
    path: '/modal',
    component: () => import('./pages/modal.vue'),
    meta: { group: 'Feedback' },
  },
  {
    path: '/actionsheet',
    component: () => import('./pages/actionsheet.vue'),
    meta: { group: 'Feedback' },
  },
  {
    path: '/progress',
    component: () => import('./pages/progress.vue'),
    meta: { group: 'Feedback' },
  },

  /* Navigation */
  {
    path: '/tabbar',
    component: () => import('./pages/tabbar.vue'),
    meta: { group: 'Navigation' },
  },
  {
    path: '/tabs',
    component: () => import('./pages/tabs.vue'),
    meta: { group: 'Navigation' },
  },
  {
    path: '/pagination',
    component: () => import('./pages/pagination.vue'),
    meta: { group: 'Navigation' },
  },

  {
    path: '*',
    redirect: '/',
  },
];

// add route's name and route's page title
routes.forEach(route => {
  route.name = upperFirst(camelCase(route.path.replace('/', '')));
  route.meta = route.meta || {};
  route.meta.title = upperFirst(route.path.replace('/', ''));
});

export default routes;
