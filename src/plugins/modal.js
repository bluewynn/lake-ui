import modal from '../components/modal';
import { assert } from '../utils/helper';

export default {
  install(Vue) {
    let instance = null;
    const ModalConstructor = Vue.extend(modal);
    const defaultOptions = {
      show: true,
      title: '',
      msg: '',
      showConfirmBtn: true,
      showCancelBtn: false,
    };

    const formatOptions = options => {
      if (typeof options !== 'string' && typeof options !== 'object') {
        assert(false, "options should be 'string' or 'object'");
      }

      return typeof options === 'string' ? { ...defaultOptions, msg: options } : { ...defaultOptions, ...options };
    };

    const getInstance = () => new ModalConstructor({ el: document.createElement('div') });

    const openModal = (options = defaultOptions, successCb, failCb) => {
      let payload = {};

      if (!instance) {
        instance = getInstance();
        document.body.appendChild(instance.$el);
      }

      payload = formatOptions(options);

      Object.assign(instance, payload);

      return new Promise(resolve => {
        instance.$on('confirm', () => {
          instance.show = false;
          successCb && successCb();
          resolve && resolve(true);
        });
        instance.$on('cancel', () => {
          instance.show = false;
          failCb && failCb();
          resolve && resolve(false);
        });
      });
    };

    Vue.prototype.$alert = openModal;
    Vue.prototype.$confirm = (options, ...args) => {
      return openModal(Object.assign(formatOptions(options), { showCancelBtn: true }), ...args);
    };
  },
};
