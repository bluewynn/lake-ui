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
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
