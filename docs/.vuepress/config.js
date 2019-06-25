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
      head: [
        ['meta', { name: 'theme-color', content: '#269bec' }],
        ['meta', { name: 'keywords', content: packageJson.keywords.join(',') }],
        ['meta', { name: 'description', content: packageJson.description }],
        ['meta', { name: 'huaban', content: 'nopin' }],
      ],
    },
    // '/en/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: 'VuePress',
    //   description: 'Vue-powered Static Site Generator',
    // },
  },
  themeConfig: {
    rootPath: '/api/',
    defaultPath: '/api/',
    logo: '/logo.png',
    searchMaxSuggestions: 10,
    locales: {
      '/': {
        // nav: [
        //     { text: '接口文档', link: '/api/' },
        //     { text: '回调文档', link: '/callback/'},
        // ],
        sidebar: {
          '/api/': [
            {
              title: '开始前必读',
              collapsable: false,
              children: ['', '10002', '10003', '10004', '10005'],
            },
            {
              title: '应用接口',
              collapsable: false,
              children: [
                '11001',
                '11002',
                '11012',
                '11003',
                '11004',
                '11005',
                '11006',
                '11007',
                '11011',
                '11014',
                '11008',
                '11013',
                '11010',
                '11009',
              ],
            },
            {
              title: '其它接口',
              collapsable: false,
              children: ['12001', '12004', '13001'],
            },
            {
              title: '附录',
              collapsable: false,
              children: ['99001'],
            },
          ],
          '/callback/': [
            {
              title: '开始前必读',
              collapsable: false,
              children: [''],
            },
            {
              title: '事件回调',
              collapsable: false,
              children: ['20001', '20002', '20003'],
            },
          ],
        },
      },
    },
  },
};
