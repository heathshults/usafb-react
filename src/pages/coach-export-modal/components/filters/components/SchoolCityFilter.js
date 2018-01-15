import React from 'react';
import PropTypes from 'prop-types';

const SchoolCityFilter = props => (
  <div className="form-group">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Value</label>
      <input type="text" className="form-control" onChange={props.updateActiveFilterValue} placeholder="School City" />
    </div>
  </div>
);

SchoolCityFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default SchoolCityFilter;
