import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import uuidv4 from 'uuid/v4';

const selectField = props => (
  <FormGroup>
    <Label htmlFor={`profile-${props.label}`}>
      {props.label}
    </Label>
    <Input
      type="select"
      name={`profile-${props.label}`}
      id={`profile-${props.label}`}
      value={props.value}
      onChange={props.onChange}
    >
      {props.options.map(option => (
        <option
          value={option.name}
          key={uuidv4()}
        >
          {option.name}
        </option>
      ))}
    </Input>
  </FormGroup>
);

selectField.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default selectField;
