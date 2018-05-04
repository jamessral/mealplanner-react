module.exports = {
  'extends': 'airbnb',
  'plugins': ['react'],
  'rules': {
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx'] }],
    'jsx-a11y/anchor-is-valid': 0,
  },
  'globals': {
    'document': true,
  },
  'env': {
    'browser': true,
    'node': true,
  }
};
