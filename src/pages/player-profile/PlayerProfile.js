import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { GET_PLAYER_PROFILE } from './dux/actions';

class PlayerProfile extends Component {
  static get contextTypes() {
    return {
      history: PropTypes.object,
      location: PropTypes.object,
      router: PropTypes.object
    };
  }

  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }

  componentWillMount() {
    const id = this.props.match.params.id; //eslint-disable-line
    this.getPlayerProfile({ id });
  }

  getPlayerProfile = (data) => {
    this.props.getPlayerProfile(data);
  }

  render() {
    return (
      <div className="red-theme full-screen-bg-profiles-red">
        <section id="main-content" className="container-fluid container-flexi-fluid section-main-content">
          <div className="row align-items-stretch">
            <div className="col-12">
              <div className="container container-flexi h-100">
                <div className="row card-theme-red align-items-stretch h-100">
                  <div className="col-3 mr-3 h-100 bg-clear-white player-info">
                    <div className="card-red-header-special">
                      <i id="editIcon" className="fa fa-edit float-right mt-1" ariaHidden="true" />
                      PLAYER <strong>INFORMATION</strong>
                    </div>

                    <div className="card-red player-info card-red-mspacing-top">
                      <div className="card-red-body">
                        <p>
                          <img src="assets/profile/user-01.jpg" alt={`${this.props.playerData.name_first} ${this.props.playerData.name_last}`} className="user-avatar-red-md" />
                        </p>
                        <p className="theme-red-title">{this.props.playerData.name_first} {this.props.playerData.name_last}</p>
                        <p>{this.props.playerData.gender} - {this.props.playerData.years_experience} years - {this.props.playerData.graduation_year} - {this.props.playerData.grade}th Grade
                          <br /> {this.props.currentTeam.school_name} - {this.props.currentTeam.school_state} {this.props.playerData.graduation_year}
                          <br /> Other Sports: {
                            this.props.playerData.sports && this.props.playerData.sports.map(sport => `${sport} `)
                          }
                          <div className="theme-red-padded-line">
                            <div className="theme-red-badge">
                              <strong>Player ID: {this.props.playerData.id_external}</strong>
                            </div>
                          </div>
                          Position: {this.props.currentTeam.position}</p>
                      </div>
                    </div>

                    <div className="card-red card-red-mspacing-top">
                      <div className="card-red-header">
                        <i id="editIcon" className="fa fa-edit float-right mt-1" ariaHidden="true" /> Team/
                        <strong>Organization</strong>
                      </div>
                      <div className="card-red-body">
                        <div className="theme-red-padded-line">
                          <div className="theme-red-badge">LEAGUE: {this.props.currentTeam.id_external}</div>
                        </div>

                        <p className="pl-3">
                          {this.props.currentTeam.team_name}
                          <br /> Panthers Flag Football
                        </p>
                        <p className="pl-3 font-85">
                          {this.props.currentTeam.school_state}, USA
                          <br />
                          <span>School:</span> {this.props.currentTeam.school_name}
                          <br />
                          <span>District:</span> {this.props.currentTeam.school_district}
                        </p>
                      </div>
                    </div>

                    {
                      /* eslint-disable */
                    }
                    <div className="card-red card-red-mspacing-top">
                      {this.props.playerData.guardians && this.props.playerData.guardians.map(guardian => (
                        <span key={guardian._id}>
                          <div className="card-red-header">
                            <i id="editIcon" className="fa fa-edit float-right mt-1" ariaHidden="true" /> Parent/
                            <strong>Guardian</strong>
                          </div>
                          <div className="card-red-body">
                            <p>
                              <a className="card-red-link-inverted" data-toggle="collapse" href="#collapseInfo1" aria-expanded="false" aria-controls="collapseExample">Parent: {guardian.name_first} {guardian.name_last}
                                <i className="fa fa-chevron-down font-75 mt-2 float-right" />
                              </a>
                            </p>
                            <div className="collapse indent" id="collapseInfo1">
                              <p>
                                <span>Mobile:</span> {guardian.phone_mobile}
                                <br />
                                <span>Home:</span> {guardian.phone_home}
                                <br />
                                <span>Work:</span> {guardian.phone_work}
                                <br />
                                <span>Email:</span>
                                <a href="tel:333-333-3333" className="card-red-link">{guardian.email || 'N/A'}</a>
                              </p>
                            </div>
                          </div>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="col h-100 bg-clear-white player-info red-theme whiteTools-wrapper">
                    <div className="card-red-header-special">
                      <i id="editIcon" className="fa fa-edit float-right mt-1" ariaHidden="true" /> PLAYING
                      <strong> EXPERIENCE</strong>
                    </div>

                    <div className="card-red player-info card-red-mspacing-top">

                      <div className="red-theme-title-2-container">
                        <span className="red-theme-title-2">CURRENT SEASON</span>
                      </div>
                      {
                        this.props.playerData.registrations && this.props.playerData.registrations.map((team) => {
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
                                        <div className="stat-title divider-br">{team.position}</div>
                                      </div>
                                      <div className="col-3 current-stats">
                                        <div className="stat-title divider-br">
                                          <div className="badge-grade ar-1by1"> {this.props.playerData.grade}th
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
                      <div className="red-theme-title-2-container">
                        <span className="red-theme-title-2 ">PAST SEASONS</span>
                      </div>

                      <div className="card-red">
                        <div className="card-red-body">
                          {
                            this.props.playerData.registrations && this.props.playerData.registrations.map((team) => {
                              if (!team.current) {
                                return (
                                  <div className="card-red" key={team._id}>
                                    <div className="card-red-body">
                                      <h4 className="mb-4">{team.team_name}
                                        <small className="ml-2">({team.school_name})</small>
                                      </h4>
                                      <div className="tats-wrapper">
                                        <div className="row text-center mt-2">
                                          <div className="col-3 current-stats">
                                            <div className="stat-title divider-br">{team.position}</div>
                                          </div>
                                          <div className="col-3 current-stats">
                                            <div className="stat-title divider-br">
                                              <div className="badge-grade ar-1by1"> {this.props.playerData.grade}th
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

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </div >
    );
  }
}

PlayerProfile.propTypes = {
  getPlayerProfile: PropTypes.func.isRequired,
  playerData: PropTypes.shape({
    years_experience: PropTypes.number,
    name_first: PropTypes.string,
    name_last: PropTypes.string,
    gender: PropTypes.string,
    graduation_year: PropTypes.number,
    grade: PropTypes.number,
    sports: PropTypes.array,
    guardians: PropTypes.array,
    school_name: PropTypes.string,
    id_external: PropTypes.number,
    registrations: PropTypes.array
  }).isRequired,
  currentTeam: PropTypes.object
};

PlayerProfile.defaultProps = {
  playerData: {
    sports: [],
    guardians: [],
    registrations: [],
    years_experience: 0,
    name_first: '',
    name_last: '',
    gender: '',
    graduation_year: 2025,
    grade: 0,
    school_name: '',
    id_external: 0
  },
  currentTeam: {}
};

const mapStateToProps = ({ playerProfileReducer }) => {
  const currentTeam = _.find(playerProfileReducer.playerData.registrations, team => team.current === true);
  return { playerData: playerProfileReducer.playerData, currentTeam };
};
const mapDispatchToProps = dispatch => ({
  getPlayerProfile: player => dispatch({ type: GET_PLAYER_PROFILE, data: { player } })
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);
