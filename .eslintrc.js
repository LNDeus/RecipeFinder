module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': ['eslint:recommended', 'node'],
  'plugins': ['jsdoc', 'node', 'jest'],
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'rules': {
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'import/no-commonjs': 'off'
  },
};
