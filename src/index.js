import { version } from '../package.json';
import { upperFirst } from './utils';
import { flexBox, flexBoxItem } from './components/flex';
import { tabs, tab } from './components/tabs';
import noticeBar from './components/notice-bar';
import { carousel, carouselItem } from './components/carousel';
import pagination from './components/pagination';
import button from './components/button';
import { tabbar, tabbarItem } from './components/tabbar';
import toast from './components/toast';
import list from './components/list';
import pullRefresh from './components/pull-refresh';
import modal from './components/modal';
import actionSheet from './components/actionsheet';
import searchBar from './components/search-bar';
import { upload, imageUpload } from './components/upload';
import { field, textarea } from './components/field';
import badge from './components/badge';
import progress from './components/progress';
import popup from './components/popup';
import { cell, cellGroup } from './components/cell';
import plugins from './plugins';

const components = {
  flexBox,
  flexBoxItem,
  tabs,
  tab,
  noticeBar,
  carousel,
  carouselItem,
  pagination,
  button,
  tabbar,
  tabbarItem,
  toast,
  list,
  pullRefresh,
  modal,
  actionSheet,
  searchBar,
  upload,
  imageUpload,
  field,
  textarea,
  badge,
  progress,
  popup,
  cell,
  cellGroup,
};

// transform component name from '{component}' to 'lake-{component}'
const namedComponents = Object.keys(components).reduce((prev, crt) => {
  const componentName = `lake${upperFirst(crt)}`;
  prev[componentName] = components[crt];

  return prev;
}, {});

// install components && plugins
const install = Vue => {
  Object.keys(namedComponents).forEach(key => Vue.component(key, namedComponents[key]));
  Object.keys(plugins).forEach(key => Vue.use(plugins[key]));
};

// install by content script
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  version,
};
