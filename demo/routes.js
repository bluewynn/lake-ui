import { upperFirst, camelCase } from './common/util';

const routes = [
  {
    path: '',
    component: () => import(/* webpackChunkName: "pages/home" */ './pages/home.vue'),
  },

  /* Basic */
  {
    path: '/flex',
    component: () => import(/* webpackChunkName: "pages/flex" */ './pages/flex.vue'),
    meta: { group: 'Basic' },
  },
  {
    path: '/button',
    component: () => import(/* webpackChunkName: "pages/button" */ './pages/button.vue'),
    meta: { group: 'Basic' },
  },
  {
    path: '/popup',
    component: () => import(/* webpackChunkName: "pages/popup" */ './pages/popup.vue'),
    meta: { group: 'Basic' },
  },
  {
    path: '/cell',
    component: () => import(/* webpackChunkName: "pages/cell" */ './pages/cell.vue'),
    meta: { group: 'Basic' },
  },

  /* Form */
  {
    path: '/field',
    component: () => import(/* webpackChunkName: "pages/field" */ './pages/field.vue'),
    meta: { group: 'Form' },
  },
  {
    path: '/image-upload',
    component: () => import(/* webpackChunkName: "pages/image-upload" */ './pages/image-upload.vue'),
    meta: { group: 'Form' },
  },
  {
    path: '/checkbox',
    component: () => import(/* webpackChunkName: "pages/checkbox" */ './pages/checkbox.vue'),
    meta: { group: 'Form' },
  },

  /* Display */
  {
    path: '/carousel',
    component: () => import(/* webpackChunkName: "pages/carousel" */ './pages/carousel.vue'),
    meta: { group: 'Display' },
  },
  {
    path: '/list',
    component: () => import(/* webpackChunkName: "pages/list" */ './pages/list.vue'),
    meta: { group: 'Display' },
  },
  {
    path: '/notice-bar',
    component: () => import(/* webpackChunkName: "pages/notice-bar" */ './pages/notice-bar.vue'),
    meta: { group: 'Display' },
  },
  {
    path: '/badge',
    component: () => import(/* webpackChunkName: "pages/badge" */ './pages/badge.vue'),
    meta: { group: 'Display' },
  },
  {
    path: '/search-bar',
    component: () => import(/* webpackChunkName: "pages/search-bar" */ './pages/search-bar.vue'),
    meta: { group: 'Display' },
  },

  /* Feedback */
  {
    path: '/toast',
    component: () => import(/* webpackChunkName: "pages/toast" */ './pages/toast.vue'),
    meta: { group: 'Feedback' },
  },
  {
    path: '/modal',
    component: () => import(/* webpackChunkName: "pages/modal" */ './pages/modal.vue'),
    meta: { group: 'Feedback' },
  },
  {
    path: '/actionsheet',
    component: () => import(/* webpackChunkName: "pages/actionsheet" */ './pages/actionsheet.vue'),
    meta: { group: 'Feedback' },
  },
  {
    path: '/progress',
    component: () => import(/* webpackChunkName: "pages/progress" */ './pages/progress.vue'),
    meta: { group: 'Feedback' },
  },

  /* Navigation */
  {
    path: '/tabbar',
    component: () => import(/* webpackChunkName: "pages/tabbar" */ './pages/tabbar.vue'),
    meta: { group: 'Navigation' },
  },
  {
    path: '/tabs',
    component: () => import(/* webpackChunkName: "pages/tabs" */ './pages/tabs.vue'),
    meta: { group: 'Navigation' },
  },
  {
    path: '/pagination',
    component: () => import(/* webpackChunkName: "pages/pagination" */ './pages/pagination.vue'),
    meta: { group: 'Navigation' },
  },

  /* Bussiness */
  {
    path: '/result',
    component: () => import(/* webpackChunkName: "pages/result" */ './pages/result.vue'),
    meta: { group: 'Bussiness' },
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
