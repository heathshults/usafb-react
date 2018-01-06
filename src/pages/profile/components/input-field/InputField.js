import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

import './input-field.css';

const renderValue = (editing, value) => {
  if (editing) {
    return (
      <Input placeholder={value} className="profile__input-field-editing" />
    );
  }

  return (
    <p className="m-0 profile__input-field">
      {value}
    </p>
  );
};

const inputField = props => (
  <div className="d-flex mt-2 mb-2 align-items-center">
    <p className="m-0 profile__input-label">
      {props.label}
    </p>
    {renderValue(props.editing, props.value)}
  </div>
);

inputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired
};

export default inputField;
