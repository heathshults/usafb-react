import React from 'react';
import PropTypes from 'prop-types';

const YearsOfExperienceFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <input type="number" className="form-control" onChange={props.updateActiveFilterValue} placeholder="Years of Experience" />
    </div>
  </div>
);

YearsOfExperienceFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default YearsOfExperienceFilter;
