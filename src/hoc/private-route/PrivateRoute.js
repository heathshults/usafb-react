import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

import {
  GET_MY_INFORMATION
} from 'pages/profile/dux/actions';

// Role(5a4e9d6f10807c001c67e152) Superuser: test
// Role(5a4e9d6f10807c001c67e153) Administrator: export_players, import_players, import_coaches, export_coaches, manage_users, view_dashboard, view_players, view_coaches
// Role(5a4e9d6f10807c001c67e154) Stakeholder: export_players, import_players, import_coaches, export_coaches, view_dashboard, view_players, view_coaches

class PrivateRoute extends Component {
  static get defaultProps() {
    return {
      rest: undefined,
      user: null
    };
  }

  static get propTypes() {
    return {
      component: PropTypes.func.isRequired,
      user: PropTypes.number
    };
  }

  componentWillMount() {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      this.authenticated = jwtDecode(accessToken);
      this.props.getMyInformation(); // eslint-disable-line
    } else {
      this.authenticated = false;
    }
  }

  render() {
    const ChildComponent = this.props.component;

    /* eslint-disable */
    return (
      <Route
        {...this.props.rest}
        render={props => (
          this.authenticated ? (
            <ChildComponent {...props} />
          ) : (
              <Redirect // eslint-disable-line
                to={{
                  pathname: '/login',
                  state: { from: props.location } // eslint-disable-line react/prop-types
                }}
              />
            )
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  ...state.userInformation,
});

const mapDispatchToProps = dispatch => ({
  getMyInformation: () => dispatch({ type: GET_MY_INFORMATION })
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
