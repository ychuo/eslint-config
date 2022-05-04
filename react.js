module.exports = {
  extends: ['./typescript.js', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
