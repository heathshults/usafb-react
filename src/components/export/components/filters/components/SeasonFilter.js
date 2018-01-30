import React from 'react';
import PropTypes from 'prop-types';

const SeasonFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <select className="form-control filtersContainer-select filtersContainer-select-value" onChange={props.updateActiveFilterValue}>
        <option value="fall">Fall</option>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="winter">Winter</option>
      </select>
    </div>
  </div>
);

SeasonFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default SeasonFilter;
