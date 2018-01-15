import React from 'react';
import PropTypes from 'prop-types';

const CityFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <input type="text" className="form-control" onChange={props.updateActiveFilterValue} placeholder="City" />
    </div>
  </div>
);

CityFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default CityFilter;
