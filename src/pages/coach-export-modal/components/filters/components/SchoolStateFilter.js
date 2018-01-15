import React from 'react';
import PropTypes from 'prop-types';
import states from 'services/data/states';

const SchoolStateFilter = props => (
  <div className="form-group">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Value</label>
      <select className="form-control filtersContainer-select filtersContainer-select-value" onChange={props.updateActiveFilterValue}>
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
