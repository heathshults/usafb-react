import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import StateFilter from './components/StateFilter';
import DobFilter from './components/DobFilter';
import FirstNameFilter from './components/FirstNameFilter';
import SchoolStateFilter from './components/SchoolStateFilter';
import './filters.css';

const Filters = props => (
  <div className="filtersContainer">
    <div className="row">
      <div className="form-group">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Filters</label>
          <select className="form-control filtersContainer-select" id="sel1" onChange={props.updateActiveFilter}>
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
        props.activeFilter === 'State' &&
        <StateFilter updateActiveFilterValue={props.updateActiveFilterValue} />
      }
      {
        props.activeFilter === 'Date of Birth' &&
        <DobFilter updateActiveFilterValue={props.updateActiveFilterValue} />
      }
      {
        props.activeFilter === 'School State' &&
        <SchoolStateFilter updateActiveFilterValue={props.updateActiveFilterValue} />
      }
      <button type="button" className="bss-btn btn-primary-02 filtersContainer-addFilterButton" onClick={props.saveFilter}>Add</button>
    </div>
    <div className="filtersContainer-divider" />
    <div>
      {
        props.savedFilters.map(filter => (
          <div className="row filtersContainer-savedRow" key={`savedFilter${filter.label}`}>
            <p>{filter.label}</p>
            <p>{filter.value}</p>
            <FontAwesome name="trash-o" />
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
  updateActiveFilterValue: PropTypes.func.isRequired
};

Filters.defaultProps = {
  selectedValues: [],
  activeFilter: '',
  savedFilters: []
};

export default Filters;
