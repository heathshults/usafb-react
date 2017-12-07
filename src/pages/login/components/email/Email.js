import React from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';

import './email.css';

const emailInput = props => (
  <div className="row form-group">
    <div className="col-md-12 input-group">
      <label htmlFor="txtEmail" className="login-page__email-label sr-only">
        Email
      </label>
      <div className="col input-wrapper">
        <FontAwesome name="envelope" className="fa-layer" />
        <input
          type="text"
          className="form-control form-control-theme"
          id="txtEmail"
          placeholder="Email"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  </div>
);

emailInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default emailInput;
