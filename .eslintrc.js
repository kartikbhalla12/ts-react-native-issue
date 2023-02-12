module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'jest', 'react-native'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    '@react-native-community',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': ['error', { skip: ['Section', 'Text'] }],
    'react-native/no-single-element-style-arrays': 2,
    'react-native/sort-styles': [
      'error',
      'asc',
      { ignoreClassNames: false, ignoreStyleProperties: false },
    ],
    'func-style': ['error', 'expression'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/__tests__/*'],
      rules: {
        'react-native/split-platform-components': 0,
        'react-native/no-inline-styles': 0,
        'react-native/no-color-literals': 0,
        'react-native/no-raw-text': 0,
        'react-native/no-single-element-style-arrays': 0,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
