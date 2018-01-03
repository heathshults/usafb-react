import React from 'react';
import PropTypes from 'prop-types';
import UsafbIdInput from './components/usafbId';
import CityInput from './components/city';
import FirstNameInput from './components/firstName';
import LastNameInput from './components/lastName';
import StateInput from './components/state';
import DateOfBirthInput from './components/dateOfBirth';
import ClearButton from './components/clearButton';
import './search.css';

const Search = props => (
  <div id="s-o" className="search-overlay flexi-container align-items-stretch">
    <div id="s-f" className="flexi-container align-items-center mx-auto">
      <div className="search-form card-theme-blue m-auto">
        <div id="sForm" className="card">
          <h4 className="card-header">SEARCH</h4>
          <div className="card-body form-group">
            <div className="column">
              <UsafbIdInput
                usafb_id={props.usafb_id}
                updateSearchFilters={props.updateSearchFilters}
              />
              <FirstNameInput
                first_name={props.first_name}
                updateSearchFilters={props.updateSearchFilters}
              />
              <LastNameInput
                last_name={props.last_name}
                updateSearchFilters={props.updateSearchFilters}
              />
              <DateOfBirthInput
                date_of_birth={props.date_of_birth}
                updateSearchFilters={props.updateSearchFilters}
              />
              <CityInput
                city={props.city}
                updateSearchFilters={props.updateSearchFilters}
              />
              <StateInput
                state={props.state}
                updateSearchFilters={props.updateSearchFilters}
              />
            </div>
            <ClearButton
              clearSearchFilters={props.clearSearchFilters}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Search.propTypes = {
  updateSearchFilters: PropTypes.func.isRequired,
  clearSearchFilters: PropTypes.func.isRequired,
  usafb_id: PropTypes.any,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  date_of_birth: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

Search.defaultProps = {
  usafb_id: undefined
};

export default Search;
