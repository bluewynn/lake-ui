const webpackMerge = require('webpack-merge');
const commonConfig = require('./build/webpack.common.js');

module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'docs/README.md',
    },
    {
      name: 'UIComponents',
      components: 'src/components/**/*.vue',
      sectionDepth: 1,
    },
  ],
  exampleMode: 'expand',
  usageMode: 'expand',
  defaultExample: false,
  pagePerSection: true,
  webpackConfig: webpackMerge(commonConfig),
};
