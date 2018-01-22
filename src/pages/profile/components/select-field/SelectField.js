import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'reactstrap';
import uuidv4 from 'uuid/v4';

const mapValueToLabel = (value, options) => {
  if (options.length > 0) {
    const mappedValue = options.find(option => option.value === value);
    return mappedValue ? mappedValue.label : '';
  }

  return '';
};

const renderValue = (editing, label, value, onChange, options) => {
  if (editing) {
    return (
      <Input
        type="select"
        name={`profile-${label}`}
        id={`profile-${label}`}
        value={value}
        onChange={onChange}
        className="profile__input-field-editing"
      >
        {options.map(option => (
          <option
            value={option.value}
            key={uuidv4()}
          >
            {option.label}
          </option>
        ))}
      </Input>
    );
  }

  return (
    <p className="m-0 profile__input-field">
      {mapValueToLabel(value, options)}
    </p>
  );
};

const selectField = props => (
  <div className="d-flex align-items-center mt-1 mb-1">
    <p className="m-0 profile__input-label">
      <Label htmlFor={`profile-${props.label}`}>
        {props.label}
      </Label>
    </p>
    {renderValue(props.editing, props.label, props.value, props.onChange, props.options)}
  </div>
);

selectField.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired
};

export default selectField;
