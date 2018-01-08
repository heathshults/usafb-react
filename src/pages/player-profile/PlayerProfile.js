import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Container from 'components/profile/components/container/Container';
import ExperienceContainer from 'components/profile/components/experience-container/ExperienceContainer';
import PersonContainer from 'components/profile/components/person-container/PersonContainer';
import SeasonsContainer from 'components/profile/components/seasons-container/SeasonsContainer';

import CurrentSeason from 'components/profile/components/current-season/CurrentSeason';
import ExperienceTitle from 'components/profile/components/experience-title/ExperienceTitle';
import Organization from 'components/profile/components/organization/Organization';
import InformationTitle from 'components/profile/components/information-title/InformationTitle';

import PlayerInfo from './components/player-info/PlayerInfo';
import Guardians from './components/guardians/Guardians';
import PastSeason from './components/past-season/PastSeason';

import { GET_PLAYER_PROFILE } from './dux/actions';

class PlayerProfile extends Component {
  componentWillMount() {
    const id = this.props.match.params.id; //eslint-disable-line
    this.getPlayerProfile({ id });
  }

  getPlayerProfile = (data) => {
    this.props.getPlayerProfile(data);
  }

  render() {
    return (
      <Container>
        <PersonContainer>
          <InformationTitle title={'Player'} />
          <PlayerInfo playerData={this.props.playerData} currentTeam={this.props.currentTeam} />
          <Organization playerData={this.props.playerData} currentTeam={this.props.currentTeam} />
          <Guardians playerData={this.props.playerData} />
        </PersonContainer>
        <ExperienceContainer>
          <ExperienceTitle title={'PLAYING'} />
          <SeasonsContainer>
            <CurrentSeason playerData={this.props.playerData} currentTeam={this.props.currentTeam} />
            <PastSeason playerData={this.props.playerData} />
          </SeasonsContainer>
        </ExperienceContainer>
      </Container>
    );
  }
}

PlayerProfile.propTypes = {
  getPlayerProfile: PropTypes.func.isRequired,
  playerData: PropTypes.object,
  currentTeam: PropTypes.object
};

PlayerProfile.defaultProps = {
  playerData: {},
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
