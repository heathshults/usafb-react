import React from 'react';
import PropTypes from 'prop-types';

const UsafbIdFilter = props => (
  <div className="form-group">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Value</label>
      <input type="text" className="form-control" onChange={props.updateActiveFilterValue} placeholder="USAFB ID" />
    </div>
  </div>
);

UsafbIdFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default UsafbIdFilter;
