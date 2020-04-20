module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "prettier"
  ],
  "parserOptions": {
    "version": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    'react-app'
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/display-name": 0,
    "react/prop-types": 0
  }
}
