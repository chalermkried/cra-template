# Project Template - Client-side Only

The aim of this template is to be able to start on **Client-side** only website as quick as possible with great DX.

## Template Structure

- [Volta](https://docs.volta.sh/guide/) is supported and recommended for Node version management.
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). And the built app powered by [Preact](https://preactjs.com/) with help of [CRACO](https://github.com/gsoft-inc/craco).
- Linting configuration based on [Create Exposed App](https://github.com/iamturns/create-exposed-app).
- Editor - VSCode with format on save by [Prettier](https://prettier.io/) + fix all with [Eslint](https://eslint.org/).
- Suggested Node version 14.
- Git hook integrated with [Husky](https://typicode.github.io/husky).
- Pre-commit #1: Uses [Commitlint](https://commitlint.js.org/) for consistent commit messages.
- Pre-commit #2: Uses [Lint Staged](https://github.com/okonet/lint-staged) to run `npm run lint`, `npm run prettier` and `npm run test:staged` on staged files.

## Available Scripts

In the project directory, you can run:

### `npm ci`

Installs the packages.

### `npm start`

Runs the **React** app in the development mode.\
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the **Jest** test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:ci`

Launches the **Jest** test runner and collect code coverage.\
The coverage result will be in the `coverage` folder.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles **Preact** in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Probably don't need to do this since we already have **CRACO** to extend on advance configurations.
