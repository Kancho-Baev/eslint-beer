module.exports = {
  parser: "babel-eslint",
  extends: ["xo", "xo-react", "react-app", "prettier", "prettier/react"],
  plugins: ["react", "prettier", "jsx-a11y", "import"],
  globals: {
    expect: true,
    describe: true,
    it: true,
    fixture: true,
    test: true,
    jest: true,
    document: true,
    window: true,
    fetch: true,
    navigator: true,
  },
  rules: {
    "space-before-function-paren": 0,
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "no-loss-of-precision": 0,
    "no-promise-executor-return": 0,
    "no-unreachable-loop": 0,
    "camelcase": "off",
    "react/function-component-definition": 0,
    quotes: 0,
    "operator-linebreak": 0,
    "react/jsx-tag-spacing": [
      "error",
      {
        beforeSelfClosing: "always",
      },
    ],
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/no-array-index-key": 0,
    "indent": ["error", 2, { "SwitchCase": 1 }]
  },
};
