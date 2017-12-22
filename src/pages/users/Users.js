import React, { Component } from 'react';

import MainContainer from 'components/containers/Container';
import HeaderContainer from './components/header-container/HeaderContainer';
import Header from './components/header/Header';

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
          <div />
        </HeaderContainer>
        <div />
      </MainContainer>
    );
  }
}

export default Users;
