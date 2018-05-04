module.exports = {
  'extends': 'airbnb',
  'plugins': ['react'],
  'rules': {
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx'] }],
  },
  'globals': {
    'document': true,
  },
  'env': {
    'browser': true,
    'node': true,
  }
};
