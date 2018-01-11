import React from 'react';
import PropTypes from 'prop-types';

const PastSeason = props => (
  <span>
    {/* eslint-disable */}
    <div className="red-theme-title-2-container">
      <span className="red-theme-title-2 ">PAST SEASONS</span>
    </div>
    <div className="card-red">
      <div className="card-red-body">
        {
          props.playerData.registrations && props.playerData.registrations.map((team) => {
            if (!team.current) {
              return (
                <div className="card-red" key={team._id}>
                  <div className="">
                    <h4 className="mb-4 team-name-background">{team.team_name}
                      <small className="ml-2">({team.school_name})</small>
                    </h4>
                    <div className="tats-wrapper">
                      <div className="row text-center mt-2">
                        <div className="col-3 current-stats">
                          <div className="stat-title divider-br">{team.positions && team.positions.map(position =>
                            <div className="positions-list" key={`${team._id}+${position}`}>
                              <p>{position}</p>
                            </div>
                          )}</div>
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
      </div>
    </div>
  </span>
);

PastSeason.propTypes = {
  data: PropTypes.shape({
    playerData: PropTypes.shape({
      registrations: PropTypes.array
    })
  })
};

PastSeason.defaultProps = {
  data: {
    playerData: {
      registrations: []
    }
  }
};

export default PastSeason;
