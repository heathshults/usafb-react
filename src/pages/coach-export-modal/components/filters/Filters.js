import React from 'react';
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

const Filters = props => (
  <div className="filtersContainer">
    <div className="row">
      <div className="form-group">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Filters</label>
          <select className="form-control filtersContainer-select" onChange={props.updateActiveFilter}>
            <option>Choose...</option>
            {
              props.selectedValues.map(label =>
                <option key={label}>{label}</option>
              )
            }
          </select>
        </div>
      </div>
      {
        props.activeFilter === 'First Name' &&
        <FirstNameFilter updateActiveFilterValue={props.updateActiveFilterValue} />
      }
      {
        props.activeFilter === 'Last Name' &&
        <LastNameFilter updateActiveFilterValue={props.updateActiveFilterValue} />
      }
      {
        props.activeFilter === 'USAFB ID' &&
        <UsafbIdFilter updateActiveFilterValue={props.updateActiveFilterValue} />
      }
      {
        props.activeFilter === 'Organization Name' &&
        <OrganizationNameFilter updateActiveFilterValue={props.updateActiveFilterValue} />
      }
      {
        props.activeFilter === 'City' &&
        <CityFilter updateActiveFilterValue={props.updateActiveFilterValue} />
      }
      {
        props.activeFilter === 'State' &&
        <StateFilter updateActiveFilterValue={props.updateActiveFilterValue} savedFilters={props.savedFilters} />
      }
      {
        props.activeFilter === 'Date of Birth' &&
        <DobFilter updateActiveFilterValue={props.updateActiveFilterValue} />
      }
      {
        props.activeFilter === 'School Name' &&
        <SchoolNameFilter updateActiveFilterValue={props.updateActiveFilterValue} />
      }
      {
        props.activeFilter === 'School City' &&
        <SchoolCityFilter updateActiveFilterValue={props.updateActiveFilterValue} />
      }
      {
        props.activeFilter === 'School State' &&
        <SchoolStateFilter updateActiveFilterValue={props.updateActiveFilterValue} savedFilters={props.savedFilters} />
      }
      <button type="button" className="bss-btn btn-primary-02 filtersContainer-addFilterButton" onClick={props.saveFilter}>Add</button>
    </div>
    {
      props.filterValueEmptyError &&
      <p className="error">A value must be chosen first...</p>
    }
    <div className="filtersContainer-divider" />
    <div>
      {
        props.savedFilters.map(filter => (
          <div className="row filtersContainer-savedRow" key={`savedFilter${filter.label}${props.savedFilters.length}`}>
            <p className="filtersContainer-savedRow-label">{filter.label}</p>
            <p className="filtersContainer-savedRow-value">{filter.value}</p>
            <FontAwesome name="trash-o" className="filtersContainer-savedRow-delete" id={`${filter.label},${filter.value}`} onClick={props.deleteSavedFilter} />
          </div>
        ))
      }
    </div>
  </div>
);

Filters.propTypes = {
  selectedValues: PropTypes.array,
  activeFilter: PropTypes.string,
  updateActiveFilter: PropTypes.func.isRequired,
  savedFilters: PropTypes.array,
  saveFilter: PropTypes.func.isRequired,
  updateActiveFilterValue: PropTypes.func.isRequired,
  filterValueEmptyError: PropTypes.bool.isRequired,
  deleteSavedFilter: PropTypes.func.isRequired
};

Filters.defaultProps = {
  selectedValues: [],
  activeFilter: '',
  savedFilters: []
};

export default Filters;
