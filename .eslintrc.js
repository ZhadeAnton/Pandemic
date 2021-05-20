module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'max-len': ["error", { "code": 90 }],
    'object-curly-spacing': 0,
    'linebreak-style': 0,
    'semi': 0,
    'require-jsdoc': 0,
    'comma-dangle': 0,
    'react/prop-types': 0,
    'operator-linebreak': 0,
  },
}
