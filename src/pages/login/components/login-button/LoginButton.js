import React from 'react';
import PropTypes from 'prop-types';

import './login-button.css';

const getButtonLabel = (loggingIn) => {
  if (loggingIn) {
    return (
      <div>
        <i className="fa fa-spinner fa-spin" /> Logging in...
      </div>
    );
  }

  return (
    <div>
      Login
    </div>
  );
};

const loginButton = props => (
  <div className="row pt-0 pb-0">
    <div className="col-md-12 pt-0 pb- text-center">
      <button
        type="submit"
        className="btn btn-primary login__btn w-75 mr-auto ml-auto"
        disabled={props.loggingIn}
      >
        {getButtonLabel(props.loggingIn)}
      </button>
    </div>
  </div>
);

loginButton.propTypes = {
  loggingIn: PropTypes.bool.isRequired
};

export default loginButton;
