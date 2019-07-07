import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routes from './routes';
import UI from '../src/index.js';
import '../src/style/index.less';

Vue.use(VueRouter);
Vue.use(UI);

const { progress } = UI;
const vmProgress = new Vue(progress).$mount();

vmProgress.fixed = true;

let timerId = 0;
const startProgress = () => {
  clearInterval(timerId);
  document.body.appendChild(vmProgress.$el);
  timerId = setInterval(() => {
    if (vmProgress.percent === 99) clearInterval(timerId);
    vmProgress.percent += 1;
  }, 100);
};
const stopProgress = () => {
  clearInterval(timerId);
  vmProgress.percent = 100;
  vmProgress.$nextTick().then(() => {
    document.body.removeChild(vmProgress.$el);
  });
};

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
  startProgress();
  next();
});
router.afterEach(() => {
  stopProgress();
});

if (process.env.NODE_ENV !== 'production') {
  Vue.config.productionTip = false;
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
