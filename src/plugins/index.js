import modal from './modal';

export default {
  name: 'plugins',
  install(Vue) {
    Vue.use(modal);
  },
};
