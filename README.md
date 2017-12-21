# Getting Started

## Install dependencies

```bash
yarn
```

## Start Development Server

```bash
yarn start
```

## Run Tests

```bash
yarn test
```

## Linter

For this project, we are using eslint that will automatically display errors on your text-editor/IDE. If you are
having trouble installing eslint, follow the instructions [here](https://www.npmjs.com/package/eslint)

# Architecture

## build

compiled files

## assets

includes images, fonts

## services

### Redux

Contains the store and reducers

## utils

Services and config parameters

## Pages

All **Pages** are those *Containers* that are directly mounted into a `<Route>` handler. They are stored in a
directory/name structure that mimics the urls they are mounted to.

### These *Containers* will be structured as the following:

- FileName.js
- fileName.scss
- fileName.reducer.js
- fileName.duck.js

# Redux Modules

## Summary

Our Redux modules are based heavily on [Ducks](https://github.com/erikras/ducks-modular-redux) but vary slightly. Modules
will follow a certain set of rules:

1. Modules will only contain code directly related to Redux
2. Modules may only import constants from other modules in their reducer
3. Modules may only import action creators from other modules in their sagas
4. Modules may not import reducers and sagas from other modules

## Naming Scheme

### Folders

lisp-case

### React Components

PascalCase

### Other Files

camelCase

## Rational & Paradigms

All main views will be **pages**. Within each page will live a **components** folder where all singly used components will be. If a component is used throughout the app, it should live within the **shared-components** folder.

All other page related files will similary live in the page's folder under the appropriate folder.

## Structure

All modules may contain any combination of the following files:

### actions.js - Constants

All module related constants will export each constant individually. Ideally no other module imports constants directly.

### reducer.js - Reducer

The reducer.js file export defaults a function named `reducer`. This reducer will be directly injected into the
`combineReducers`.

Individual methods may be exported individually for testing only.

### sagas.js - Sagas

The sagas.js file export defaults an array of saga functions to be concatenated directly together into the
`createSagaMiddleware` method.

Saga methods may be exported individually for testing only.

### selectors.js - Selectors

The selectors file will export individual functions to select relevant pieces of the module store for use in pages and
connected components. No page or connected component should be reading from a store directly, but should
instead use selectors to read what it needs from the store.

## Utility Methods

All utility methods should be placed in the toplevel utils folder and not inside a module. If it is not wholly and
completely utilized for Redux it does not belong in the module.

An example of a "wholly and completely utilized" method would be like a formatting method for a reducer. This method
should be in the reducer.js file.

An example of a "utility" method that is NOT wholly tied to Redux would be a date formatting function. This method
should simply be placed in a common date-time.js file in the toplevel utils folder, even if it is currently only being
used by a single module.


## Testing

For this project, we will be using Jest to make sure each component renders and behaves correctly. It comes preinstealled with create-react-app,
so you shouldn't have to do anything to configure jest. If you are getting the error "Error: Error watching file for changes: EMFILE", make sure you
do a "brew install watchman".

Tests should lie in their respected components folder, inside a directory named "tests". For the sake of consistency and clarity, we will name each 
test as {component}.test.js. 

Our tests are using [Jest](https://facebook.github.io/jest/docs/en/getting-started.html#content), [Enzyme](https://github.com/airbnb/enzyme/blob/master/docs/guides/jest.md), and [redux-saga-testing](https://github.com/antoinejaussoin/redux-saga-testing).

For acceptance test, we are using [Nightmare](https://github.com/segmentio/nightmare). If you want to read the article that influenced this project to use nightmare, [click here](https://www.viget.com/articles/acceptance-testing-react-apps-with-jest-and-nightmare).