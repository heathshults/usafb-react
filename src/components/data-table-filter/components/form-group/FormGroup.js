import React from 'react';
import PropTypes from 'prop-types';

const formGroup = props => (
  <div className="form-group input-row">
    <label className="control-label" htmlFor={`advancedsearch-${props.label}`}>
      {props.label}
    </label>
    <div className="">
      <input
        type="text"
        className="form-control input-md"
        name="lName"
        placeholder="Last Name"
        id={`advancedsearch-${props.label}`}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  </div>
);

formGroup.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default formGroup;
