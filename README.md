# eslint-config-pytkin

Based on [eslint-config-i-am-meticulous](https://github.com/MoOx/eslint-config-i-am-meticulous) (v6.0.1) and [eslint-config-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/eslint-config-react-app/README.md) (v2.0.0)

## Install

```console
$ npm i -D eslint eslint-config-pytkin
```

Note that the default config require [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)

## Usage

### Notes

- This config extends `eslint:recommended`.
- You will need to adjust configuration syntax depending on your configuration
  location (`package.json` or `.eslintrc`). Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.
- You might need to use ``babel-eslint`` if you use babel with fresh ES stages.

### React

```console
$ npm i -D eslint eslint-plugin-react eslint-config-pytkin
```

```json
{
  "eslintConfig": {
    "extends": "eslint-config-pytkin/react"
  }
}
```

### Flow

_This rule set require babel-eslint._

```console
$ npm i -D eslint babel-eslint eslint-plugin-flowtype eslint-config-pytkin
```

```json
{
  "eslintConfig": {
    "parser": "babel-eslint",
    "extends": "eslint-config-pytkin/flow"
  }
}
```

### React + Flow

_This rule set require babel-eslint._

```console
$ npm i -D eslint babel-eslint eslint-plugin-flowtype eslint-config-pytkin
```

```json
{
  "eslintConfig": {
    "parser": "babel-eslint",
    "extends": "eslint-config-pytkin/react-flow"
  }
}
```

_This rule set is a combination of react and flow rule sets but add a tiny
change to support props and state property initializers to be added at the top
of classes (react/sort-comp default configuration does not allow that)._
