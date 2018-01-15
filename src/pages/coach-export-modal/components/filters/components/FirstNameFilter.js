import React from 'react';
import PropTypes from 'prop-types';

const FirstNameFilter = props => (
  <div className="form-group">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Value</label>
      <input type="text" className="form-control" onChange={props.updateActiveFilterValue} placeholder="First Name" />
    </div>
  </div>
);

FirstNameFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default FirstNameFilter;
