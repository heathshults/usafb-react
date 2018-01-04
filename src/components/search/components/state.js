import React from 'react';
import PropTypes from 'prop-types';
import states from 'services/data/states';

const State = props => (
  <div className="input-group">
    <select id="state" value={props.state} className="form-control radius-control search-field" name="State" aria-label="State" onChange={props.updateSearchFilters}>
      {
        states.map(state => (
          <option value={state.value} key={state.label}>{state.label}</option>
        ))
      }
    </select>
  </div>
);

State.propTypes = {
  updateSearchFilters: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired
};

export default State;
