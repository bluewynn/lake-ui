import * as lakeComponents from './src/index.js';

export default {
  install(Vue) {
    Object.keys(lakeComponents).forEach((key) => {
      Vue.component(lakeComponents[key].name, lakeComponents[key]);
    });
  },
};
