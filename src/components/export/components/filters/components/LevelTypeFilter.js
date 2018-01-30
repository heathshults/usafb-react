import React from 'react';
import PropTypes from 'prop-types';

const LevelTypeFilter = props => (
  <div className="form-group col-4">
    <div className="column">
      <label><strong>Value</strong></label>
      <select className="form-control filtersContainer-select filtersContainer-select-value" onChange={props.updateActiveFilterValue}>
        <option value="youth_flag">Youth Flag</option>
        <option value="7on7">7 on 7</option>
        <option value="rookie_tackle">Rookie Tackle</option>
        <option value="11_player_tackle">11 Player Tackle</option>
        <option value="adult_flag">Adult Flag</option>
        <option value="flex">Flex</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>
);

LevelTypeFilter.propTypes = {
  updateActiveFilterValue: PropTypes.func.isRequired
};

export default LevelTypeFilter;
