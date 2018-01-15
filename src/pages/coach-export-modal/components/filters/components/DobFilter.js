import React from 'react';
// import PropTypes from 'prop-types';

const DobFilter = () => (
  <div className="form-group">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Value</label>
      <select className="form-control filtersContainer-select" id="sel1">
        <option>Some options</option>
      </select>
    </div>
  </div>
);

export default DobFilter;
