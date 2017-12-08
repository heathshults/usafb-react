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

## Run Linter

```bash
yarn lint
```

# Architecture

## dist

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

## Structure

All modules may contain any combination of the following files:

### index.js - Action Creators

The index.js file will only contain action creators and export each action creator individually. This is the primary
exposed area of a module which will be used by React components and other modules.

### constants.js - Constants

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
