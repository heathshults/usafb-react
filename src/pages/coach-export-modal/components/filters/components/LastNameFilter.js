import React from 'react';
import PropTypes from 'prop-types';

const LastNameFilter = props => (
  <div className="form-group">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Value</label>
      <input type="text" className="form-control" onChange={props.updateActiveFilterValue} placeholder="Last Name" />
    </div>
  </div>
);

LastNameFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default LastNameFilter;
