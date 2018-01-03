import React from 'react';
import PropTypes from 'prop-types';

const LastName = props => (
  <div className="input-group">
    <input type="text" value={props.last_name} className="form-control search-field" id="last_name" name="lName" placeholder="Last Name" aria-label="lName" onChange={props.updateSearchFilters} />
  </div>
);

LastName.propTypes = {
  updateSearchFilters: PropTypes.func.isRequired,
  last_name: PropTypes.string.isRequired
};

export default LastName;
