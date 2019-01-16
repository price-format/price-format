module.exports = {
  "extends": "standard", //  JavaScript Standard Style (https://standardjs.com/)
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "globals": {
    "document": false,
    "escape": false,
    "navigator": false,
    "unescape": false,
    "window": false,
    "describe": true,
    "before": true,
    "it": true,
    "expect": true,
    "sinon": true,
    "beforeEach": true
  },
  "parser": "babel-eslint",
  "plugins": [],
  "rules": {
    // ... using JavaScript Standard Style (https://standardjs.com/) rules
  }
};
