import modal from './modal';
import toast from './toast';

export default {
  name: 'plugins',
  install(Vue) {
    Vue.use(modal);
    Vue.use(toast);
  },
};
