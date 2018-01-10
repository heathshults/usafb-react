import React from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';

import './input.css';

const input = props => (
  <div className="row form-group">
    <div className="col-md-12 input-group">
      <label htmlFor={props.inputId} className="login-page__input-label sr-only">
        {props.placeholder}
      </label>
      <div className="col login__input-wrapper">
        <FontAwesome name={props.icon} className="fa-layer" />
        <input
          type={props.inputType}
          className="form-control form-control-theme login__input-form pt-2 pb-2"
          id={props.inputId}
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
  inputType: PropTypes.string,
  inputId: PropTypes.string.isRequired
};

input.defaultProps = {
  inputType: 'text'
};

export default input;
