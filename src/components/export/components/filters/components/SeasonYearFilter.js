import React from 'react';
import PropTypes from 'prop-types';

const SeasonYearFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <select className="form-control filtersContainer-select filtersContainer-select-value" onChange={props.updateActiveFilterValue}>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
      </select>
    </div>
  </div>
);

SeasonYearFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default SeasonYearFilter;
