import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import store from 'services/redux/store';
import Interceptor from 'services/api/interceptor';
import authHOC from 'hoc/auth/Auth';

import NavBar from 'components/nav-bar/NavBar';
import Landing from 'pages/landing/Landing';
import Login from 'pages/login/Login';
import Players from 'pages/players/Players';
import Dashboard from 'pages/dashboard/Dashboard';
import Coaches from 'pages/coaches/Coaches';
import PlayerProfile from 'pages/player-profile/PlayerProfile';
import CoachProfile from 'pages/coach-profile/CoachProfile';
import Users from 'pages/users/Users';
import Profile from 'pages/profile/Profile';
import MyExports from 'pages/my-exports/MyExports';

import './app.css';

const history = createHistory();
const interceptor = new Interceptor(); //eslint-disable-line

const app = () => (
  <Provider store={store}>
    <Router history={history}>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={authHOC(Landing)} />
          <Route exact path="/dashboard" component={authHOC(Dashboard)} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/players" component={authHOC(Players)} />
          <Route exact path="/coaches" component={authHOC(Coaches)} />
          <Route exact path="/players/:id" component={authHOC(PlayerProfile)} />
          <Route exact path="/coaches/:id" component={authHOC(CoachProfile)} />
          <Route exact path="/users" component={authHOC(Users)} />
          <Route exact path="/me" component={authHOC(Profile)} />
          <Route exact path="/my-exports" component={authHOC(MyExports)} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default app;
