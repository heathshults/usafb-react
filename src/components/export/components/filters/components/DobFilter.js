import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const DobFilter = props => (
  <div className="form-group col-6">
    <div className="column">
      <label><strong>Value</strong></label>
      <div className="row">
        <select className="form-control filtersContainer-select filtersContainer-select-small" onChange={props.updateDateOfBirthDirection} >
          <option>&gt;</option>
          <option>&lt;</option>
        </select>
        <FormGroup className="filtersContainer-select-date-container">
          <Input type="date" className="filtersContainer-select-date-input" placeholder="Date" onChange={props.updateActiveFilterValue} />
        </FormGroup>
      </div>
    </div>
  </div>
);

DobFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired,
  updateDateOfBirthDirection: PropTypes.func.isRequired
};

export default DobFilter;
