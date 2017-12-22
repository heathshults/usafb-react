import React, { Component } from 'react';

import MainContainer from 'components/containers/Container';
import HeaderContainer from './components/header-container/HeaderContainer';
import Header from './components/header/Header';
import HeaderMessage from './components/header-message/HeaderMessage';

class Users extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <MainContainer>
        <HeaderContainer>
          <Header />
          <HeaderMessage />
        </HeaderContainer>
        <div />
      </MainContainer>
    );
  }
}

export default Users;
