import React, { Component } from 'react';

import BlueContainer from 'components/containers/blue-container/BlueContainer';
import Block from './components/block/Block';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Avatar from './components/avatar/Avatar';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BlueContainer>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Block>
            <Header />
            <Content>
              <Avatar />
              <div> Content goes here </div> <div />
            </Content>
          </Block>
        </div>
      </BlueContainer>
    );
  }
}

export default Profile;
