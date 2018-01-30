import React from 'react';
import PropTypes from 'prop-types';

const PostalCodeFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <input type="number" className="form-control" onChange={props.updateActiveFilterValue} placeholder="Postal Code" />
    </div>
  </div>
);

PostalCodeFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default PostalCodeFilter;
