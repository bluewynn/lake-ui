import * as components from './src/index.js';
import { version } from './package.json';

const install = Vue => {
  Object.keys(components).forEach(key => {
    if (components[key].name === 'plugins') {
      Vue.use(components[key]);
    } else {
      Vue.component(components[key].name, components[key]);
    }
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  version,
  ...components,
};
