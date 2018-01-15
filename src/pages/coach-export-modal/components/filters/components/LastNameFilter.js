import React from 'react';
import PropTypes from 'prop-types';

const LastNameFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <input type="text" className="form-control" onChange={props.updateActiveFilterValue} placeholder="Last Name" />
    </div>
  </div>
);

LastNameFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default LastNameFilter;
