import React from 'react';
import PropTypes from 'prop-types';

const DateOfBirth = props => (
  <div className="input-group">
    <input type="text" value={props.date_of_birth} className="form-control search-field" id="date_of_birth" name="BirthDate" placeholder="Date of Birth" aria-label="BirthDate" onChange={props.updateSearchFilters} />
  </div>
);

DateOfBirth.propTypes = {
  updateSearchFilters: PropTypes.func.isRequired,
  date_of_birth: PropTypes.string.isRequired
};

export default DateOfBirth;
