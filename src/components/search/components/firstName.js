import React from 'react';
import PropTypes from 'prop-types';

const FirstName = props => (
  <div className="input-group">
    <input id="first_name" value={props.first_name} className="form-control search-field flexi-search-input" type="text" placeholder="First Name" aria-label="Search" onChange={props.updateSearchFilters} />
  </div>
);

FirstName.propTypes = {
  updateSearchFilters: PropTypes.func.isRequired,
  first_name: PropTypes.string.isRequired
};

export default FirstName;
