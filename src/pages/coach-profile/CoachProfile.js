import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from './components/container/Container';
import SeasonsContainer from './components/seasons-container/SeasonsContainer';
import ExperienceContainer from './components/experience-container/ExperienceContainer';
import CoachContainer from './components/coach-container/CoachContainer';

import CoachInfo from './components/coach-info/CoachInfo';
import Organization from './components/organization/Organization';
import Guardians from './components/guardians/Guardians';
import ExperienceTitle from './components/experience-title/ExperienceTitle';
import CoachInformationTitle from './components/coach-information-title/CoachInformationTitle';
import CurrentSeason from './components/current-season/CurrentSeason';
import PastSeason from './components/past-season/PastSeason';

import { GET_COACH_PROFILE } from './dux/actions';

class CoachProfile extends Component {
  componentWillMount() {
    const id = this.props.match.params.id; //eslint-disable-line 
    this.getCoachProfile({ id });
  }

  getCoachProfile = (data) => {
    this.props.getCoachProfile(data);
  }

  render() {
    return (
      <Container>
        <div className="col-3 mr-3 h-100 bg-clear-white player-info">
          <CoachInformationTitle />
          <CoachInfo props={this.props} />

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
      </Container>
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
  return { coachData: coachProfileReducer.coachData, currentTeam };
};
const mapDispatchToProps = dispatch => ({
  getCoachProfile: coach => dispatch({ type: GET_COACH_PROFILE, data: { coach } })
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachProfile);
