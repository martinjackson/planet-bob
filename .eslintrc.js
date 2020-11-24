
/*
  https://github.com/testing-library/eslint-plugin-testing-library
  rules: {
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debug": "warn",
  }

*/
module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      "plugin:testing-library/recommended",
      "plugin:testing-library/react",
    ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": 'module',
    "ecmaFeatures": {
      'jsx': true,
    },
  },
  'plugins': [ 'react', 'react-hooks', "testing-library" ],
  rules: {
    'strict': 0,
    'semi': 'off',
    'no-console': 'off',
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  "settings": {
    "react": {
      "version": "detect",
    }
  }
};
