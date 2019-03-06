const userAgent = navigator.userAgent.toLowerCase();

export const upperFirst = (str = '') => str.charAt(0).toUpperCase() + str.slice(1);

export const ua = {
  isAndroid: userAgent && userAgent.indexOf('android') > 0,
  isIOS: userAgent && /iphone|ipad|ipod|ios/.test(userAgent),
  isMac: userAgent && userAgent.indexOf('mac') > 0,
};

export const getScrollTop = () => document.documentElement.scrollTop || document.body.scrollTop;

export const debounce = fn => {
  fn();
};

export const throttle = fn => {};
