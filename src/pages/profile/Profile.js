import React, { Component } from 'react';

import BlueContainer from 'components/containers/blue-container/BlueContainer';
import ProfileBlock from './components/profile-block/ProfileBlock';
import ProfileHeader from './components/profile-header/ProfileHeader';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BlueContainer>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <ProfileBlock>
            <ProfileHeader />
            <div />
          </ProfileBlock>
          <ProfileBlock>
            <ProfileHeader />
            <div />
          </ProfileBlock>
        </div>
      </BlueContainer>
    );
  }
}

export default Profile;
