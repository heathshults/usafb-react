import React from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';

import './input.css';

const input = props => (
  <div className="row bss form-group mb-4">
    <div className="col-md-12 input-group pt-0 pb-0">
      <label htmlFor={props.inputId} className="sr-only">
        {props.placeholder}
      </label>
      <div className="col-md-12 input-wrapper">
        <FontAwesome name={props.icon} className="fa-layer" />
        <input
          type={props.inputType}
          className="form-control form-control-theme"
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
