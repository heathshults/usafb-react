import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

import './input-field.css';

const renderValue = (editing, value, onChange) => {
  if (editing) {
    return (
      <Input
        placeholder={value}
        className="profile__input-field-editing"
        value={value}
        onChange={onChange}
      />
    );
  }

  return (
    <p className="m-0 profile__input-field">
      {value}
    </p>
  );
};

const inputField = props => (
  <div className="d-flex align-items-center mt-1 mb-1">
    <p className="m-0 profile__input-label">
      {props.label}
    </p>
    {renderValue(props.editing, props.value, props.onChange)}
  </div>
);

inputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default inputField;
