import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from 'components/profile/components/container/Container';
import ExperienceContainer from 'components/profile/components/experience-container/ExperienceContainer';
import PersonContainer from 'components/profile/components/person-container/PersonContainer';
import SeasonsContainer from 'components/profile/components/seasons-container/SeasonsContainer';

import CurrentSeason from 'components/profile/components/current-season/CurrentSeason';
import ExperienceTitle from 'components/profile/components/experience-title/ExperienceTitle';
import CoachInfo from './components/coach-info/CoachInfo';
import Organization from './components/organization/Organization';
import CoachInformationTitle from './components/coach-information-title/CoachInformationTitle';
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
        <PersonContainer>
          <CoachInformationTitle />
          <CoachInfo props={this.props} />
          <Organization props={this.props} />
        </PersonContainer>
        <ExperienceContainer>
          <ExperienceTitle />
          <SeasonsContainer>
            <CurrentSeason props={this.props} />
            <PastSeason props={this.props} />
          </SeasonsContainer>
        </ExperienceContainer>
      </Container>
    );
  }
}

CoachProfile.propTypes = {
  getCoachProfile: PropTypes.func.isRequired
};

const mapStateToProps = ({ coachProfileReducer }) => {
  const currentTeam = _.find(coachProfileReducer.coachData.registrations, team => team.current === true);
  return { coachData: coachProfileReducer.coachData, currentTeam };
};
const mapDispatchToProps = dispatch => ({
  getCoachProfile: coach => dispatch({ type: GET_COACH_PROFILE, data: { coach } })
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachProfile);
