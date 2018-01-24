import React from 'react';
import PropTypes from 'prop-types';
import humanize from 'utils/transform';

import './current-season.css';

const CurrentSeason = props => (
  <span>
    {/* eslint-disable */}
    <div className="red-theme-title-2-container">
      <span className="red-theme-title-2">CURRENT SEASON</span>
    </div>
    <div className="card-red">
      <div className="card-red-body">
        <h4 className="mb-4">{props.currentTeam.team_name}
          <small className="ml-2">({props.currentTeam.school_name})</small>
        </h4>
        <div className="current-season__stats-wrapper">
          <div className="d-flex justify-content-between">
            <div className="stat-title current-season__stats text-center divider-br p-4 mt-2 mb-2">{humanize(props.currentTeam.position)}</div>
            <div className="stat-title current-season__stats text-center divider-br p-4 mt-2 mb-2">{humanize(props.currentTeam.level_type)}</div>
            <div className="stat-title current-season__stats text-center divider-br p-4 mt-2 mb-2">{humanize(props.currentTeam.organization_name)}</div>
            <div className="stat-title current-season__stats text-center p-4 mt-2 mb-2 ">{humanize(props.currentTeam.season)} {props.currentTeam.season_year}</div>
          </div>
        </div>
      </div>
    </div>
  </span>
);

CurrentSeason.propTypes = {
  currentTeam: PropTypes.shape({
    team_name: PropTypes.string,
    positions: PropTypes.array,
    level_type: PropTypes.string,
    season_year: PropTypes.number,
    season: PropTypes.string,
    organization_name: PropTypes.string
  })
};

CurrentSeason.defaultProps = {
  currentTeam: {
    team_name: '',
    position: PropTypes.array,
    organization_name: '',
    season_year: 1980,
    season: '',
    level_type: ''
  }
};

export default CurrentSeason;
