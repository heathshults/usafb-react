import React from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';

import './input.css';

const input = props => (
  <div className="row form-group">
    <div className="col-md-12 input-group">
      <label htmlFor="txtEmail" className="login-page__email-label sr-only">
        {props.placeholder}
      </label>
      <div className="col input-wrapper">
        <FontAwesome name={props.icon} className="fa-layer" />
        <input
          type={props.inputType}
          className="form-control form-control-theme"
          id="txtEmail"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  </div>
);

input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string
};

input.defaultProps = {
  inputType: 'text'
};

export default input;
