module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  rules: {
    // Best Practices
    'array-callback-return': 'error',
    'default-case': 'error',
    'no-console': 'error',
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-eval': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-void': 'error',
    'no-with': 'error',
    radix: 'error',
    'wrap-iife': 'error',
    yoda: 'error',

    // Variables
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
      },
    ],

    // Node.js and CommonJS
    'no-new-require': 'error',

    // Stylistic Issues
    'max-params': ['error', 7],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
    'no-class-assign': 'error',
    'prefer-object-spread': 'error',
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    'no-multi-assign': 'error',
    'no-unneeded-ternary': 'error',
    semi: 'error',
    'semi-style': ['error', 'last'],
    'max-nested-callbacks': ['error', 3],
    'comma-style': ['error', 'last'],

    // ECMAScript 6
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'new-parens': 'error',
  },
};
