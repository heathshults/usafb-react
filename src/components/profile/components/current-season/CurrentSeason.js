import React from 'react';
import PropTypes from 'prop-types';

const CurrentSeason = props => (
  <span>
    <div className="red-theme-title-2-container">
      <span className="red-theme-title-2">CURRENT SEASON</span>
    </div>
    <div className="card-red">
      <div className="card-red-body">
        <h4 className="mb-4">{props.currentTeam.team_name}
          <small className="ml-2">{props.currentTeam.organization_name}</small>
        </h4>
        <div className="tats-wrapper">
          <div className="row text-center mt-2">
            <div className="col-3 current-stats">
              <div className="stat-title divider-br">{props.currentTeam.positions && props.currentTeam.positions.map(position => `${position}, `)}</div>
            </div>
            <div className="col-3 current-stats">
              <div className="stat-title divider-br">{props.currentTeam.level_type}</div>
            </div>
            <div className="col-3 current-stats">
              <div className="stat-title divider-br">{props.currentTeam.organization_name}</div>
            </div>
            <div className="col-3 current-stats">
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
    season_year: PropTypes.string,
    season: PropTypes.string,
    organization_name: PropTypes.string
  })
};

CurrentSeason.defaultProps = {
  currentTeam: {
    team_name: '',
    position: PropTypes.array,
    organization_name: '',
    season_year: '',
    season: '',
    level_type: ''
  }
};

export default CurrentSeason;
