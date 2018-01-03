import React from 'react';
import PropTypes from 'prop-types';

const UsafbId = props => (
  <div className="input-group">
    <input type="text" className="form-control search-field" id="usafb_id" value={props.usafb_id} name="PlayerID" placeholder="USAFB ID" aria-label="PlayerID" onChange={props.updateSearchFilters} />
  </div>
);

UsafbId.propTypes = {
  updateSearchFilters: PropTypes.func.isRequired,
  usafb_id: PropTypes.any
};

UsafbId.defaultProps = {
  usafb_id: undefined
};

export default UsafbId;
