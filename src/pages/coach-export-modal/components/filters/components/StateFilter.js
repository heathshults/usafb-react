import React from 'react';
import PropTypes from 'prop-types';
import states from 'services/data/states';

const StateFilter = props => (
  <div className="form-group">
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Value</label>
      <select className="form-control filtersContainer-select filtersContainer-select-value " onChange={props.updateActiveFilterValue}>
        {
          states.map(state =>
            <option key={`StateFilter${state.label}`}>{state.label}</option>
          )
        }
      </select>
    </div>
  </div>
);

StateFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default StateFilter;
