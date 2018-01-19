import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from 'services/redux/store';

import Interceptor from 'services/api/interceptor';
import PrivateRoute from 'hoc/private-route/PrivateRoute';

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
import PlayerExportModal from 'pages/player-export-modal/PlayerExportModal';
import CoachExportModal from 'pages/coach-export-modal/CoachExportModal';
import ImportsPage from 'pages/imports/Imports';

import './app.css';
import { GET_ROLES } from './dux/actions';

const history = createHistory();
const interceptor = new Interceptor(); //eslint-disable-line

if (history.location.pathname !== '/login') {
  store.dispatch({ type: GET_ROLES });
}

// temp comment
const app = () => (
  <Provider store={store}>
    <Router history={history}>
      <Fragment>
        <ToastContainer />
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/" component={Landing} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/players" component={Players} />
          <PrivateRoute exact path="/coaches" component={Coaches} />
          <PrivateRoute exact path="/players/:id" component={PlayerProfile} />
          <PrivateRoute exact path="/coaches/:id" component={CoachProfile} />
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute exact path="/users/:id" component={Profile} />
          <PrivateRoute exact path="/me" component={Profile} />
          <PrivateRoute exact path="/my-exports" component={MyExports} />
          <PrivateRoute exact path="/imports/:type" component={ImportsPage} />
        </Switch>
        <PlayerExportModal />
        <CoachExportModal />
      </Fragment>
    </Router>
  </Provider>
);

export default app;
