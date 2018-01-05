import React from 'react';
import PropTypes from 'prop-types';

const CurrentSeason = props => (
  <span>
    {/* eslint-disable */}
    <div className="red-theme-title-2-container">
      <span className="red-theme-title-2">CURRENT SEASON</span>
    </div>
    {
      props.playerData.registrations && props.playerData.registrations.map((team) => {
        if (team.current) {
          return (
            <div className="card-red" key={team._id}>
              <div className="card-red-body">
                <h4 className="mb-4">{team.team_name}
                  <small className="ml-2">({team.school_name})</small>
                </h4>
                <div className="tats-wrapper">
                  <div className="row text-center mt-2">
                    <div className="col-3 current-stats">
                      <div className="stat-title divider-br">
                        {team.positions && team.positions.map(position => `${position}, `)}
                      </div>
                    </div>
                    <div className="col-3 current-stats">
                      <div className="stat-title divider-br">{team.organization_name}</div>
                    </div>
                    <div className="col-3 current-stats">
                      <div className="stat-title divider-br">
                        <div className="badge-grade ar-1by1"> {props.playerData.grade}th
                          <br />
                          <span className="font-50">GRADE</span>
                        </div> {team.level}</div>
                    </div>
                    <div className="col-3 current-stats">
                      <div className="stat-title divider-br">{team.organization_name}</div>
                    </div>
                    <div className="col-3 current-stats">
                      <div className="stat-title ">{team.season} {team.season_year}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })
    }
  </span>
);

CurrentSeason.propTypes = {
  playerData: PropTypes.shape({
    grade: PropTypes.string
  }),
  currentTeam: PropTypes.shape({
    team_name: PropTypes.string,
    league_name: PropTypes.string,
    school_name: PropTypes.string,
    school_state: PropTypes.string,
    school_district: PropTypes.string,
    id_external: PropTypes.any
  })
};

CurrentSeason.defaultProps = {
  playerData: {
    grade: ''
  },
  currentTeam: {
    team_name: '',
    league_name: '',
    school_name: '',
    school_state: '',
    school_district: '',
    id_external: null
  }
};

export default CurrentSeason;
