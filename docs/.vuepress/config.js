const packageJson = require('../../package.json');

module.exports = {
  title: packageJson.name,
  description: packageJson.description,
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: packageJson.name,
      description: packageJson.description,
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
  },
};
