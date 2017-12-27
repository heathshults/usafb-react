import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import store from 'services/redux/store';
import NavBar from 'components/nav-bar/NavBar';
import Login from 'pages/login/Login';
import Players from 'pages/players/Players';
import Dashboard from 'pages/dashboard/Dashboard';
import Coaches from 'pages/coaches/Coaches';
import Users from 'pages/users/Users';
import Player from 'pages/player/Player';

import './app.css';

const history = createHistory();

const app = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/player" component={Player} />
          <Route exact path="/coaches" component={Coaches} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default app;
