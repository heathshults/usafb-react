import React from 'react';
import PropTypes from 'prop-types';
// import { FormGroup, Label, Input } from 'reactstrap';
// import uuidv4 from 'uuid/v4';

const selectField = props => (
  <select
    name={props.label}
  // value={props.value}
  // onChange={props.onChange}
  >
    {props.options.map(option => (
      <option
        value={option.name}
        key={option.name}
      >
        {option.name}
      </option>
    ))}
  </select>
);

selectField.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default selectField;
