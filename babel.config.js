module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@vue/babel-preset-jsx',
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
};
