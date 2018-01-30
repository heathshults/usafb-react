import React from 'react';
import PropTypes from 'prop-types';
import states from 'services/data/states';

const OrganizationStateFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <select className="form-control filtersContainer-select filtersContainer-select-value" onChange={props.updateActiveFilterValue}>
        {
          states.map(state =>
            <option key={`OrganizationStateFilter${state.label}${state.value}`}>{state.label}</option>
          )
        }
      </select>
    </div>
  </div>
);

OrganizationStateFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default OrganizationStateFilter;
