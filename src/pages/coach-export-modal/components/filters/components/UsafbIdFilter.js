import React from 'react';
import PropTypes from 'prop-types';

const UsafbIdFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <input type="text" className="form-control" onChange={props.updateActiveFilterValue} placeholder="USAFB ID" />
    </div>
  </div>
);

UsafbIdFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default UsafbIdFilter;
