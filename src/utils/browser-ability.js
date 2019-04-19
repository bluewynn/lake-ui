import Vue from 'vue';

let _isSupportPositionStickyCheck = false;
let _isSupportPositionSticky = false;

const positionSticky = () => {
  // 检测浏览器是否支持 position: sticky 属性
  const prefixTestList = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
  let stickyText = '';
  for (let i = 0; i < prefixTestList.length; i++) {
    stickyText += 'position:' + prefixTestList[i] + 'sticky;';
  }
  // 创建一个dom来检查
  let div = document.createElement('div');
  const body = document.body;
  div.style.cssText = 'display:none;' + stickyText;
  body.appendChild(div);
  const isSupport = /sticky/i.test(window.getComputedStyle(div).position);
  body.removeChild(div);
  div = null;

  return isSupport;
};

export const isSupportPositionSticky = () => {
  if (_isSupportPositionStickyCheck) return _isSupportPositionSticky;
  if (Vue.prototype.$isServer) return false;

  _isSupportPositionSticky = positionSticky();
  _isSupportPositionStickyCheck = true;

  return _isSupportPositionSticky;
};
