import React from 'react';
import PropTypes from 'prop-types';
import humanize from 'utils/transform';

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
                    <div className="stats-wrapper past-season__stats-wrapper">
                      <div className="d-flex justify-content-between">
                        <div className="col-3 current-stats past-season__stats">
                          <div className="stat-title divider-br">{humanize(team.position)}</div>
                        </div>
                        <div className="stat-title current-season__stats text-center divider-br p-4 mt-2 mb-2">
                          <div className="badge-grade ar-1by1"> {props.playerData.grade}th
                              <br />
                            <span className="font-50">Grade</span>
                          </div> {team.level}
                        </div>
                        <div className="stat-title current-season__stats text-center divider-br p-4 mt-2 mb-2">{humanize(team.organization_name)}</div>
                        <div className="stat-title current-season__stats text-center p-4 mt-2 mb-2">{humanize(team.season)} {team.season_year}</div>
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
