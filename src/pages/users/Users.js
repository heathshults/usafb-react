import React, { Component } from 'react';

import MainContainer from 'components/containers/Container';
import HeaderContainer from './components/header-container/HeaderContainer';
import Header from './components/header/Header';
import HeaderMessage from './components/header-message/HeaderMessage';
import CreateUserButton from './components/create-user-button/CreateUserButton';

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
          <CreateUserButton />
        </HeaderContainer>
        <div />
      </MainContainer>
    );
  }
}

export default Users;
