module.exports = {
  parser: "babel-eslint",

  plugins: ["react"],

  extends: ["./index.js"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // no styles rules (=> prettier)
    "jsx-quotes": 0,
    
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-curly-spacing": 0,
    "react/jsx-equals-spacing": "never",
    "react/jsx-indent-props": 0,
    "react/jsx-indent": [2, 2],
    "react/jsx-max-props-per-line": 0,
    "react/jsx-space-before-closing": "always",
    "react/jsx-wrap-multilines": 0,
    "react/jsx-boolean-value": [2, "never"],
    "react/jsx-filename-extension": 0,
    "react/jsx-handler-names": 2, // (?)
    "react/jsx-key": 2,
    "react/jsx-no-bind": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-pascal-case": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-sort-prop-types": 0, // deprecated
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-target-blank": 2,
    
    "react/forbid-component-props": 0,
    "react/display-name": 0,
    "react/forbid-prop-types": 0,
    "react/no-children-prop": 2,
    "react/no-danger-with-children": 2,
    "react/no-danger": 0,
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-find-dom-node": 2,
    "react/no-is-mounted": 2,
    "react/no-multi-comp": 2,
    "react/no-render-return-value": 2,
    "react/no-set-state": 0,
    "react/no-string-refs": 2,
    "react/no-unescaped-entities": 2,
    "react/no-unknown-property": 2,
    "react/no-unused-prop-types": 2,
    "react/prefer-es6-class": 2,
    "react/prefer-stateless-function": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-optimization": 0,
    "react/require-render-return": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": [
      2,
      {
        order: [
          // allow to add props/state on top of react classes
          "props",
          "state",

          // defaults
          // eslint-disable-next-line max-len
          // https://github.com/yannickcr/eslint-plugin-react/blob/master/lib/rules/sort-comp.js
          "static-methods",
          "lifecycle",
          "everything-else",
          "render",
        ],
      },
    ],
    "react/sort-prop-types": 0,
    "react/style-prop-object": 2,
  
    // deprecated
    "react/require-extension": 0,
    "react/wrap-multilines": 0,
    "react/no-comment-textnodes": 0,

    // too brutal
    "react/forbid-elements": 0,
    "react/forbid-foreign-prop-types": 0,
    "react/no-array-index-key": 0,
    "react/require-default-props": 0,
    "react/void-dom-elements-no-children": 0
  },
};
