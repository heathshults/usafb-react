import React from 'react';
import PropTypes from 'prop-types';

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
          <div className="row text-center align-items-center mt-2">
            <div className="col-3 current-stats current-season__stats">
              <div className="stat-title divider-br">
                {props.currentTeam.positions && props.currentTeam.positions.map(position => (
                  <div className="positions-list" key={`${props.currentTeam._id}+${position}`}>
                    <p>{position}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-3 current-stats current-season__stats">
              <div className="stat-title divider-br">{props.currentTeam.level_type}</div>
            </div>
            <div className="col-3 current-stats current-season__stats">
              <div className="stat-title divider-br">{props.currentTeam.organization_name}</div>
            </div>
            <div className="col-3 current-stats current-season__stats">
              <div className="stat-title ">{props.currentTeam.season} {props.currentTeam.season_year}</div>
            </div>
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
