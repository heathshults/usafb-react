import React from 'react';
import PropTypes from 'prop-types';

const OptInMarketingFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <select className="form-control filtersContainer-select filtersContainer-select-value" onChange={props.updateActiveFilterValue}>
        <option value={true} selected>Yes</option>
        <option value={false}>No</option>
      </select>
    </div>
  </div>
);

OptInMarketingFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default OptInMarketingFilter;
