module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "classes": true,
    "jsx": true,
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "global-require": 0,
    "function-paren-newline": 0,
    "class-methods-use-this": 0,
    "no-plusplus": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/anchor-is-valid": 0,
    "import/no-named-as-default": 0,
  },
  "globals": {
    "document": true,
    "fetch": true,
    "window": true,
  },
};
