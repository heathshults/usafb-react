import React from 'react';
import PropTypes from 'prop-types';

const PastSeason = props => (
  <span>
    <div className="red-theme-title-2-container">
      <span className="red-theme-title-2 ">PAST SEASONS</span>
    </div>
    {
      /* eslint-disable */
    }
    <div className="card-red">
      <div className="card-red-body">
        {
          props.coachData.registrations && props.coachData.registrations.map((team) => {
            if (!team.current) {
              return (
                <div className="stats-container">
                  <h5 className="title-3">{team.team_name}
                    <small className="ml-2">({team.organization_name})</small>
                  </h5>
                  <div className="stats-wrapper">
                    <div className="row text-center mt-2">
                      <div className="col-3 current-stats">
                        <div className="stat-title divider-br">{team.positions && team.positions.map(position => `${position}, `)}</div>
                      </div>
                      <div className="col-3 current-stats">
                        <div className="stat-title divider-br">{team.level_type}</div>
                      </div>
                      <div className="col-3 current-stats">
                        <div className="stat-title divider-br">{team.organization_name}</div>
                      </div>
                      <div className="col-3 current-stats">
                        <div className="stat-title">{team.season} {team.season_year}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })
        }
      </div>
    </div>
  </span>
);

PastSeason.propTypes = {
  coachData: PropTypes.shape({
    registrations: PropTypes.array
  })
};

PastSeason.defaultProps = {
  coachData: {
    registrations: []
  }
};

export default PastSeason;
