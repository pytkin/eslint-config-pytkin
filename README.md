# eslint-config-pytkin

Based on [eslint-config-i-am-meticulous](https://github.com/MoOx/eslint-config-i-am-meticulous) (v6.0.1) and [eslint-fonfig-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/eslint-config-react-app/README.md) (v2.0.0)

## Usage

If you want to use this ESLint configuration in a project, you can install it with following steps.

First, install this package, ESLint and the necessary plugins.

  ```sh
  npm i --D pytkin/eslint-config-pytkin
  ```

Then create a file named `.eslintrc` with following contents in the root folder of your project:

  ```js
  {
    "extends": "pytkin"
  }
  ```

  That's it! You can override the settings from `eslint-config-pytkin` by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.
