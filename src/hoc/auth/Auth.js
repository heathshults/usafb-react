import React, { Component } from 'react';

const authenticated = WrappedComponent =>
  class extends Component {
    componentWillMount() {
      if (!window.localStorage.getItem('access_token')) {
        window.location.href = '/login';
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default authenticated;
