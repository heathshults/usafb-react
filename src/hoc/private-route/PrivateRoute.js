import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

class PrivateRoute extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const ChildComponent = this.props.component;
    return (
      <Route
        {...this.props.rest}
        render={props => (
          window.localStorage.getItem('access_token') ? (
            <ChildComponent {...props} />
          ) :
            (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.location }
                }}
              />
            )
        )}
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  rest: PropTypes.object.isRequired
};

PrivateRoute.defaultProps = {
  rest: {},
};

const mapStateToProps = ({ appReducer }) => appReducer;

export default connect(mapStateToProps)(PrivateRoute);
