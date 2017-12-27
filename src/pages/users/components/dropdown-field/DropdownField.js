import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './dropdown-field.css';

const getDropdownId = label => `user-input-${label.replace(/ /g, '')}`;

const dropdownField = props => (
  <div className="input-group">
    <label htmlFor={getDropdownId(props.label)} className="sr-only">
      {props.label}
    </label>
    <span className="input-group-addon user-management__dropdown-icon">
      <FontAwesome name={props.icon} />
    </span>
    <select
      name={getDropdownId(props.label)}
      id={getDropdownId(props.label)}
      className="user-management__dropdown-field"
      style={{ width: props.width }}
      value={props.value}
      onChange={props.onChange}
    >
      {props.options.map(option => (
        <option
          value={option.value}
          key={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

dropdownField.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  width: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

dropdownField.defaultProps = {
  width: 80
};

export default dropdownField;
