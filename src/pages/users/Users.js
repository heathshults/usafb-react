import React, { Component } from 'react';

// models
import Columns from 'components/data-table/models/user-columns';

import MainContainer from 'components/containers/Container';
import DataTable from 'components/data-table/DataTable';

import HeaderContainer from './components/header-container/HeaderContainer';
import Header from './components/header/Header';
import HeaderMessage from './components/header-message/HeaderMessage';
import CreateUserButton from './components/create-user-button/CreateUserButton';

class Users extends Component {
  constructor() {
    super();
    this.columns = new Columns();
    this.state = {

    };
  }

  componentWillMount() {
    console.log(this.columns.getUserColumns()); //eslint-disable-line
  }

  render() {
    return (
      <MainContainer>
        <HeaderContainer>
          <Header />
          <HeaderMessage />
          <CreateUserButton />
        </HeaderContainer>
        <DataTable columns={this.columns.getUserColumns()} />
      </MainContainer>
    );
  }
}

export default Users;
