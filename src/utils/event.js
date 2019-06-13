import Vue from 'vue';

export let passiveSupported = false;

if (!Vue.prototype.$isServer) {
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        passiveSupported = true;
        return true;
      },
    });
    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
  } catch (e) {
    passiveSupported = false;
  }
}

export const on = (target, type, listener, options = { passive: true, capture: false }) => {
  target.addEventListener(type, listener, passiveSupported ? options : options.capture);
};

export const off = (target, type, listener) => {
  target.removeEventListener(type, listener);
};

export const once = (target, type, listener) => {
  target.addEventListener(type, listener, { once: true });
};
