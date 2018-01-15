import React from 'react';
import PropTypes from 'prop-types';

const OrganizationNameFilter = props => (
  <div className="form-group">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Value</label>
      <input type="text" className="form-control" onChange={props.updateActiveFilterValue} placeholder="Organization Name" />
    </div>
  </div>
);

OrganizationNameFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default OrganizationNameFilter;
