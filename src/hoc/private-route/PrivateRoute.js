import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

import {
  GET_MY_INFORMATION
} from 'pages/profile/dux/actions';

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
      user: PropTypes.number,
      getMyInformation: PropTypes.func.isRequired
    };
  }

  componentWillMount() {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      this.authenticated = jwtDecode(accessToken);
      this.props.getMyInformation();
    } else {
      this.authenticated = false;
    }
  }

  componentToRender = (props) => {
    const ChildComponent = this.props.component;
    if (this.authenticated) {
      return <ChildComponent {...props} />;
    }
    return (<Redirect
      to={{
        pathname: '/login',
        state: { from: props.location }
      }}
    />);
  }

  render() {
    /* eslint-disable */
    const ChildComponent = this.props.component;
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
