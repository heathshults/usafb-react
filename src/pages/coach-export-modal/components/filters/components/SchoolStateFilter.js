import React from 'react';
import PropTypes from 'prop-types';
import states from 'services/data/states';

const SchoolStateFilter = props => (
  <div className="form-group">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Filters</label>
      <select className="form-control filtersContainer-select filtersContainer-select-value" id="sel1" onChange={props.updateActiveFilterValue}>
        {
          states.map(state =>
            <option key={`schoolStateFilter${state.label}`}>{state.label}</option>
          )
        }
      </select>
    </div>
  </div>
);

SchoolStateFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default SchoolStateFilter;
