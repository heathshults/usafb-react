import React from 'react';
import PropTypes from 'prop-types';

const LevelFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <select className="form-control filtersContainer-select filtersContainer-select-value" onChange={props.updateActiveFilterValue}>
        <option value="youth">Youth</option>
        <option value="middle_school">Middle School</option>
        <option value="freshman">Freshman</option>
        <option value="jv">JV</option>
        <option value="varsity">Varsity</option>
        <option value="college">College</option>
        <option value="professional">Professional</option>
      </select>
    </div>
  </div>
);

LevelFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default LevelFilter;
