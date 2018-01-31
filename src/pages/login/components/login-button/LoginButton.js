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
    <div className="col-md-12 pt-1 pb- text-center bss">
      <button
        type="submit"
        className="btn-blue-grad-pill login__btn w-75 w-50 mt-2 mx-auto"
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
