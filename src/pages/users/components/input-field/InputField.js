import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './input-field.css';

const getInputId = label => `user-input-${label.replace(/[, ]+/g, '').trim()}`;

const inputField = props => (
  <div className="input-group">
    <label htmlFor={getInputId(props.label)} className="sr-only">
      {props.label}
    </label>
    <span className="input-group-addon user-management__input-group-icon">
      <FontAwesome name={props.icon} />
    </span>
    <input
      type="text"
      className="form-control user-management__input-field"
      id={getInputId(props.label)}
      placeholder={props.label}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  </div>
);

inputField.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

inputField.defaultProps = {
  disabled: false
};

export default inputField;
