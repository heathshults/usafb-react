import React from 'react';
import PropTypes from 'prop-types';

const SchoolNameFilter = props => (
  <div className="form-group">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Value</label>
      <input type="text" className="form-control" onChange={props.updateActiveFilterValue} placeholder="School Name" />
    </div>
  </div>
);

SchoolNameFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default SchoolNameFilter;
