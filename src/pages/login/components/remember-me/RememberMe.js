import React from 'react';
import PropTypes from 'prop-types';

import './remember-me.css';

const rememberMe = props => (
  <div className="row form-group d-inline-flex mt-0 pt-0">
    <div className="col-md-12 input-group justify-content-center mt-0 pt-0">
      <a
        className="text-white remember-me__forgot-button"
        role="button"
        onClick={props.forgotPassword}
        tabIndex={0}
      >
        <small>
          Forgot Password?
        </small>
      </a>
    </div>
  </div >
);

rememberMe.propTypes = {
  forgotPassword: PropTypes.func.isRequired
};

export default rememberMe;
