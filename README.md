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

## css
based on ITCSS architecture. For reference https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
Settings – font, colors definitions.
Tools – globally used mixins and functions.
Generic – reset and/or normalize styles, box-sizing definition.
Elements – styling for bare HTML elements.
Objects – class-based selectors which define undecorated design patterns.
Components – specific UI components.
Utilities – utilities and helper classes to override any style (using !important)

## ducks
modules separated in folders following ducks pattern from Redux

## utils
Services and config parameters

# Components

## Classification

All components can be found/grouped in one of 3 categories:

### Components

All **Components** are those that have no side effects (read: they are not connected to the redux store, all data comes
in via props and nothing global is accessed or produced).

They are found in `src/components/`.

### Containers

All **Containers** are those *Components* that are connected to the redux store and have access to dispatching actions.

They are found in `src/containers/`.

### Pages

All **Pages** are those *Containers* that are directly mounted into a `<Route>` handler. They are stored in a
directory/name structure that mimics the urls they are mounted to.


## Rationale and Paradigms

Ideally, all new components should simply be **Components** by default. *Creating Containers should be avoided at
all costs*.

If creating a **Container** is unavoidable, closely related/sibling components should be catalogued and the *lowest
common denominator* should be identified and chosen to be the container.

For example: while the components of the login form need to interact with the store (e.g. submit button needs to
dispatch), the actual `<Form>` component can be considered the lowest common denominator for the related fields. The
fields, then, should remain *Components* however the form should be promoted to **Container**. It is distinguished as
the *lowest* common denominator because the Login page, while containing the form and fields, potentially has too much
responsibility and too many composed children to justify managing the fields.

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
