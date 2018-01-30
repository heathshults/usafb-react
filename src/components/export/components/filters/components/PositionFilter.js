import React from 'react';
import PropTypes from 'prop-types';

const PositionFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <select className="form-control filtersContainer-select filtersContainer-select-value" onChange={props.updateActiveFilterValue}>
        {
          props.positions.map(position =>
            <option key={`PositionFilter${position}`}>{position}</option>
          )
        }
      </select>
    </div>
  </div>
);

PositionFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired,
  positions: PropTypes.array.isRequired
};

export default PositionFilter;
