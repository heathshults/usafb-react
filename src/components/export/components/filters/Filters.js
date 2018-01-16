import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import StateFilter from './components/StateFilter';
import DobFilter from './components/DobFilter';
import FirstNameFilter from './components/FirstNameFilter';
import LastNameFilter from './components/LastNameFilter';
import SchoolStateFilter from './components/SchoolStateFilter';
import UsafbIdFilter from './components/UsafbIdFilter';
import OrganizationNameFilter from './components/OrganizationNameFilter';
import CityFilter from './components/CityFilter';
import SchoolNameFilter from './components/SchoolNameFilter';
import SchoolCityFilter from './components/SchoolCityFilter';
import './filters.css';

// This smart component is needed due to StepZillas form of validation
class Filters extends Component {
  isValidated() {
    let dataIsValid = true;
    const userInput = this.props.savedFilters;
    if (userInput.length <= 0) {
      dataIsValid = false;
      this.props.triggerValidationError();
    }
    return dataIsValid;
  }

  render() {
    return (
      <div className="filtersContainer">
        <div className="row">
          <div className="form-group col-3">
            <div className="column">
              <label><strong>Filters</strong></label>
              <select className="form-control filtersContainer-select" onChange={this.props.updateActiveFilter}>
                <option>Choose...</option>
                {
                  this.props.selectedValues.map(label =>
                    <option key={label}>{label}</option>
                  )
                }
              </select>
            </div>
          </div>
          {
            this.props.activeFilter === 'First Name' &&
            <FirstNameFilter updateActiveFilterValue={this.props.updateActiveFilterValue} />
          }
          {
            this.props.activeFilter === 'Last Name' &&
            <LastNameFilter updateActiveFilterValue={this.props.updateActiveFilterValue} />
          }
          {
            this.props.activeFilter === 'USAFB ID' &&
            <UsafbIdFilter updateActiveFilterValue={this.props.updateActiveFilterValue} />
          }
          {
            this.props.activeFilter === 'Organization Name' &&
            <OrganizationNameFilter updateActiveFilterValue={this.props.updateActiveFilterValue} />
          }
          {
            this.props.activeFilter === 'City' &&
            <CityFilter updateActiveFilterValue={this.props.updateActiveFilterValue} />
          }
          {
            this.props.activeFilter === 'State' &&
            <StateFilter updateActiveFilterValue={this.props.updateActiveFilterValue} savedFilters={this.props.savedFilters} />
          }
          {
            this.props.activeFilter === 'Date of Birth' &&
            <DobFilter updateActiveFilterValue={this.props.updateActiveFilterValue} updateDateOfBirthDirection={this.props.updateDateOfBirthDirection} />
          }
          {
            this.props.activeFilter === 'School Name' &&
            <SchoolNameFilter updateActiveFilterValue={this.props.updateActiveFilterValue} />
          }
          {
            this.props.activeFilter === 'School City' &&
            <SchoolCityFilter updateActiveFilterValue={this.props.updateActiveFilterValue} />
          }
          {
            this.props.activeFilter === 'School State' &&
            <SchoolStateFilter updateActiveFilterValue={this.props.updateActiveFilterValue} savedFilters={this.props.savedFilters} />
          }
          <button type="button" className="bss-btn btn-primary-02 filtersContainer-addFilterButton" onClick={this.props.saveFilter}>Add</button>
        </div>
        {
          this.props.filterValueEmptyError &&
          <p className="error">A value must be chosen first...</p>
        }
        {
          this.props.validationError &&
          <p className="error">At least one filter must be added</p>
        }
        <div className="filtersContainer-divider" />
        <div>
          {
            this.props.savedFilters.map(filter => (
              <div className="row filtersContainer-savedRow" key={`savedFilter${filter.label}${filter.value}${this.props.savedFilters.length}`}>
                <p className="filtersContainer-savedRow-label col-4">{filter.label}</p>
                <p className="filtersContainer-savedRow-value col-6">{filter.value}</p>
                <FontAwesome name="trash-o" className="filtersContainer-savedRow-delete col-2" id={`${filter.label},${filter.value}`} onClick={this.props.deleteSavedFilter} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  selectedValues: PropTypes.array,
  activeFilter: PropTypes.string,
  updateActiveFilter: PropTypes.func.isRequired,
  savedFilters: PropTypes.array,
  saveFilter: PropTypes.func.isRequired,
  updateActiveFilterValue: PropTypes.func.isRequired,
  filterValueEmptyError: PropTypes.bool.isRequired,
  deleteSavedFilter: PropTypes.func.isRequired,
  triggerValidationError: PropTypes.func.isRequired,
  validationError: PropTypes.bool.isRequired,
  updateDateOfBirthDirection: PropTypes.func.isRequired
};

Filters.defaultProps = {
  selectedValues: [],
  activeFilter: '',
  savedFilters: []
};

export default Filters;
