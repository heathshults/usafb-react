import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const getDropdownId = label => `user-input-${label.replace(/ /g, '')}`;

const dropdownField = props => (
  <div className="input-group">
    <label htmlFor={getInputId(props.label)} className="sr-only">
      {props.label}
    </label>
    <span className="input-group-addon user-management__input-group-icon">
      <FontAwesome name={props.icon} />
    </span>
    <select name={getDropdownId(props.label)} id={getDropdownId(props.label)}>
      {props.options.map(option => (
        <option value={option.value} selected={props.selected === option.value}>
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
  selected: PropTypes.string.isRequired
};

export default dropdownField;
