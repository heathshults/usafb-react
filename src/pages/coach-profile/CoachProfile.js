import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from 'components/profile/components/container/Container';
import ExperienceContainer from 'components/profile/components/experience-container/ExperienceContainer';
import PersonContainer from 'components/profile/components/person-container/PersonContainer';
import SeasonsContainer from 'components/profile/components/seasons-container/SeasonsContainer';

import CurrentSeason from 'components/profile/components/current-season/CurrentSeason';
import ExperienceTitle from 'components/profile/components/experience-title/ExperienceTitle';
import Organization from 'components/profile/components/organization/Organization';
import InformationTitle from 'components/profile/components/information-title/InformationTitle';

import CoachInfo from './components/coach-info/CoachInfo';
import PastSeason from './components/past-season/PastSeason';

import { GET_COACH_PROFILE } from './dux/actions';

class CoachProfile extends Component {
  componentWillMount() {
    const id = this.props.location.pathname.slice(9);
    this.getCoachProfile({ id });
  }

  getCoachProfile = (data) => {
    this.props.getCoachProfile(data);
  }

  render() {
    return (
      <Container>
        <PersonContainer>
          <InformationTitle title={'Coach'} />
          <CoachInfo coachData={this.props.coachData} currentTeam={this.props.currentTeam} />
          <Organization coachData={this.props.coachData} currentTeam={this.props.currentTeam} />
        </PersonContainer>
        <ExperienceContainer>
          <ExperienceTitle title={'COACHING'} />
          <SeasonsContainer>
            <CurrentSeason coachData={this.props.coachData} currentTeam={this.props.currentTeam} />
            <PastSeason coachData={this.props.coachData} />
          </SeasonsContainer>
        </ExperienceContainer>
      </Container>
    );
  }
}

CoachProfile.propTypes = {
  location: PropTypes.object.isRequired,
  getCoachProfile: PropTypes.func.isRequired,
  coachData: PropTypes.object.isRequired,
  currentTeam: PropTypes.object.isRequired
};

CoachProfile.defaultProps = {
  coachData: {},
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
