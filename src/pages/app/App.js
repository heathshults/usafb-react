import React from 'react';
import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import createHistory from 'history/createBrowserHistory';

import store from 'services/redux/store';
import Login from 'pages/login/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const history = createHistory();

const app = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  </Provider>
);

export default app;
