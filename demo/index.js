import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routes from './routes';
import UI from '../index.js';
import '../src/style/index.less';

Vue.use(VueRouter);
Vue.use(UI);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || document.title;
  next();
});

router.afterEach(() => {});

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
