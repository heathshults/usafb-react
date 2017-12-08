import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Profile extends Component {
  static get contextTypes() {
    return {
      history: PropTypes.object,
      location: PropTypes.object,
      router: PropTypes.object
    };
  }

  static get defaultProps() {
    return {
      location: {},
    };
  }

  static get propTypes() {
    return {
      location: PropTypes.object.isRequired
    };
  }

  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }

  componentWillMount() {

  }

  render() {
    return ()
  }
}

const mapUser = (user) => {
  if (user.profile) {
    return user.profile.userId;
  }

  return null;
};

function mapStateToProps({ auth }) {
  if (user) {
    return {
      user: mapUser(user),
      loginError
    };
  }

  return { user: null };
}

export default connect(mapStateToProps)(Profile);
