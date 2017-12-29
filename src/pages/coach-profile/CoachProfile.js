import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { GET_COACH_PROFILE } from './dux/actions';

class CoachProfile extends Component {
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
    this.getCoachProfile({ id });
  }

  getCoachProfile = (data) => {
    this.props.getCoachProfile(data);
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
                      <i id="editIcon" className="fa fa-edit float-right mt-1" aria-hidden="true" />
                      COACH <strong>INFORMATION</strong>
                    </div>

                    <div className="card-red player-info card-red-mspacing-top">
                      <div className="card-red-body">
                        {/* <p>
                          <img src="../assets/profile/user-01.jpg" alt={`${this.props.coachData.name_first} ${this.props.coachData.name_last}`} className="user-avatar-red-md" />
                        </p> */}
                        <p className="theme-red-title">{this.props.coachData.name_first} {this.props.coachData.name_middle} {this.props.coachData.name_last}</p>
                        <p>{this.props.coachData.gender} - {this.props.coachData.years_experience} years
                          <div className="theme-red-padded-line">
                            <div className="theme-red-badge">
                              <strong>Coach ID: {this.props.coachData.id_external}</strong>
                            </div>
                          </div>
                          Certifications: {this.props.currentTeam.certifications}</p>
                      </div>
                    </div>

                    <div className="card-red card-red-mspacing-top">
                      <div className="card-red-header">
                        <i id="editIcon" className="fa fa-edit float-right mt-1" aria-hidden="true" /> TEAM/
                        <strong>ORGANIZATION</strong>
                      </div>
                      <div className="card-red-body">
                        <div className="theme-red-padded-line">
                          <div className="theme-red-badge">LEAGUE: {this.props.currentTeam.id_external}</div>
                        </div>

                        <p className="pl-3">
                          {this.props.currentTeam.name}
                          <br /> {this.props.currentTeam.league_name}
                        </p>
                        <p className="pl-3 font-85">
                          {this.props.currentTeam.organization_state}, USA
                          <br />
                          <span>School:</span> {this.props.currentTeam.school_name}
                          <br />
                          <span>District:</span> {this.props.currentTeam.school_district}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col h-100 bg-clear-white player-info red-theme whiteTools-wrapper">
                    <div className="card-red-header-special">
                      <i id="editIcon" className="fa fa-edit float-right mt-1" aria-hidden="true" /> COACHING
                      <strong>EXPERIENCE</strong>
                    </div>

                    <div className="card-red player-info card-red-mspacing-top">
                      <div className="red-theme-title-2-container">
                        <span className="red-theme-title-2">CURRENT SEASON</span>
                      </div>
                      <div className="card-red">
                        <div className="card-red-body">
                          <h4 className="mb-4">{this.props.currentTeam.team_name}
                            <small className="ml-2">{this.props.currentTeam.organization_name}</small>
                          </h4>
                          <div className="tats-wrapper">
                            <div className="row text-center mt-2">
                              <div className="col-3 current-stats">
                                <div className="stat-title divider-br">{this.props.currentTeam.positions && this.props.currentTeam.positions.map(position => `${position}, `)}</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title divider-br">{this.props.currentTeam.level_type}</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title divider-br">{this.props.currentTeam.organization_name}</div>
                              </div>
                              <div className="col-3 current-stats">
                                <div className="stat-title ">{this.props.currentTeam.season} {this.props.currentTeam.season_year}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="red-theme-title-2-container">
                        <span className="red-theme-title-2 ">PAST SEASONS</span>
                      </div>
                      {
                        /* eslint-disable */
                      }
                      <div className="card-red">
                        <div className="card-red-body">
                          {
                            this.props.coachData.registrations && this.props.coachData.registrations.map((team) => {
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

CoachProfile.propTypes = {
  getCoachProfile: PropTypes.func.isRequired,
  coachData: PropTypes.shape({
    years_experience: PropTypes.number,
    name_first: PropTypes.string,
    name_middle: PropTypes.string,
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

CoachProfile.defaultProps = {
  coachData: {
    sports: [],
    guardians: [],
    registrations: [],
    years_experience: 0,
    name_first: '',
    name_middle: '',
    name_last: '',
    gender: 'Male',
    graduation_year: 2025,
    grade: 0,
    school_name: '',
    id_external: 0
  },
  currentTeam: {}
};

const mapStateToProps = ({ coachProfileReducer }) => {
  const currentTeam = _.find(coachProfileReducer.coachData.registrations, team => team.current === true);
  return { coachData: coachProfileReducer.coachDate, currentTeam };
};
const mapDispatchToProps = dispatch => ({
  getCoachProfile: coach => dispatch({ type: GET_COACH_PROFILE, data: { coach } })
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachProfile);
