module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", 'plugin:react/recommended'],//基础配置中的已启用的规则继承
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true, //对象扩展运算符
      "jsx": true //jsx语法
    },
    "sourceType": "module"
  },
  "globals": {
    "module": true,
    "define": true,
    "expect": true,
    "it": true,
    "describe": true,
    "exports": true
  },
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "rules": {
    "indent": [2, 4], //缩进
    "no-case-declarations": 0, //关闭禁止词法声明
    "no-unused-vars": 1,
    "no-console": 1,
    "strict": 0,  //严格模式
    "quotes": [2, "single"],//强制使用一致的反勾号、双引号或单引号
    "curly": 2, //强制所有控制语句使用一致的括号风格
    "brace-style": [2, "1tbs"], //强制在代码块中使用一致的大括号风格
    "semi": [2, "always"],
    "max-len": [2, 200, 4], //强制一行的最大长度
    "one-var": ["off"],
    "no-confusing-arrow": "off",
    "react/jsx-no-bind": ["off"],
    "react/jsx-indent": [2, 4],
    "react/jsx-indent-props": [2, 4],
    "react/jsx-boolean-value": ["off"],
    "react/prop-types": 0
  }
};


