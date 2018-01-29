import React from 'react';
// import PropTypes from 'prop-types';

const rememberMe = () => (
  <div className="row form-group d-inline-flex mt-0 pt-0">
    <div className="col-md-12 input-group justify-content-center mt-0 pt-0">
      <label htmlFor="rememberMe" className="form-check-label mt-0 pt-0">
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
      <a className="text-white ml-5"><small>Forgot Password?</small></a></div>
  </div>
);

rememberMe.propTypes = {

};

export default rememberMe;
