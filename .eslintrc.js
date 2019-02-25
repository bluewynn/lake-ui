module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:vue/essential'],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // 单行最大代码长度
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],

    // import 不检测路径
    'import/no-unresolved': 'off',

    // 不区分系统换行符
    'linebreak-style': 'off',

    // import 去掉 file type 缩写机制
    'import/extensions': 'off',

    // 换行允许多余空格
    'no-trailing-spaces': 'off',

    // 去掉禁用 i++
    'no-plusplus': 'off',

    'no-param-reassign': 'off',

    // 去掉禁用三元表达式
    'no-nested-ternary': 'off',

    'arrow-body-style': 'off',

    'no-unused-expressions': [2, { allowShortCircuit: true }],

    'arrow-parens': 'off',

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
