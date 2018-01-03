import React from 'react';
import PropTypes from 'prop-types';

const City = props => (
  <div className="input-group">
    <input type="text" value={props.city} className="form-control search-field" id="city" name="City" placeholder="City" aria-label="City" onChange={props.updateSearchFilters} />
  </div>
);

City.propTypes = {
  updateSearchFilters: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

export default City;
