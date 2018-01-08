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

import PlayerInfo from './components/player-info/PlayerInfo';
import Organization from './components/organization/Organization';
import Guardians from './components/guardians/Guardians';
import PlayerInformationTitle from './components/player-information-title/PlayerInformationTitle';
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
          <PlayerInformationTitle />
          <PlayerInfo props={this.props} />
          <Organization props={this.props} />
          <Guardians props={this.props} />
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

PlayerProfile.propTypes = {
  getPlayerProfile: PropTypes.func.isRequired
};

const mapStateToProps = ({ playerProfileReducer }) => {
  const currentTeam = _.find(playerProfileReducer.playerData.registrations, team => team.current === true);
  return { playerData: playerProfileReducer.playerData, currentTeam };
};
const mapDispatchToProps = dispatch => ({
  getPlayerProfile: player => dispatch({ type: GET_PLAYER_PROFILE, data: { player } })
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);
