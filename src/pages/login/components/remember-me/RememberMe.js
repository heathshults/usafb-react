import React from 'react';
import PropTypes from 'prop-types';

import './remember-me.css';

const rememberMe = props => (
  <div className="row form-group d-inline-flex">
    <div className="col-md-12 input-group justify-content-center">
      <label htmlFor="rememberMe" className="form-check-label">
        <span className="checkbox-theme">
          <input
            id="rememberMe"
            type="checkbox"
            className="form-check-input text-center"
          />
          <small className="text-white">
            Remember Me
          </small>
        </span>
      </label>
      <a
        className="text-white ml-5 remember-me__forgot-button"
        role="button"
        onClick={props.forgotPassword}
        tabIndex={0}
      >
        <small>
          Forgot Password?
        </small>
      </a>
    </div>
  </div>
);

rememberMe.propTypes = {
  forgotPassword: PropTypes.func.isRequired
};

export default rememberMe;
