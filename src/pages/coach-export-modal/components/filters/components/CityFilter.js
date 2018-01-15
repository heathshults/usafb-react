import React from 'react';
import PropTypes from 'prop-types';

const CityFilter = props => (
  <div className="form-group">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Value</label>
      <input type="text" className="form-control" onChange={props.updateActiveFilterValue} placeholder="City" />
    </div>
  </div>
);

CityFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default CityFilter;
