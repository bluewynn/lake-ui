import toast from '../components/toast';
import { assert } from '../utils/helper';

export default {
  install(Vue) {
    let instance = null;
    let timer = null;
    const ToastConstructor = Vue.extend(toast);
    const defaultOptions = {
      show: false,
      msg: '',
      type: 'text',
      position: 'middle',
      duration: 2000,
    };

    const formatOptions = options => {
      if (typeof options !== 'string' && typeof options !== 'object') {
        assert(false, "options should be 'string' or 'object'");
      }

      return typeof options === 'string' ? { ...defaultOptions, msg: options } : { ...defaultOptions, ...options };
    };

    const getInstance = () => new ToastConstructor({ el: document.createElement('div') });

    const createToast = (options = defaultOptions, successCb) => {
      if (instance) {
        clearTimeout(timer);
      }

      let payload = {};

      payload = formatOptions(options);
      instance = getInstance();
      Object.assign(instance, payload);

      document.body.appendChild(instance.$el);
      instance.show = true;

      return new Promise(resolve => {
        timer = setTimeout(() => {
          instance.show = false;
          instance.$nextTick().then(() => {
            document.body.removeChild(instance.$el);
            instance = null;
            resolve();
            successCb && successCb();
          });
        }, payload.duration);
      });
    };

    Vue.prototype.$toast = createToast;
  },
};
