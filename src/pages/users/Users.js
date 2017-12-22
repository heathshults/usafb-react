import React, { Component } from 'react';

// models
import Columns from 'components/data-table/models/user-columns';

import MainContainer from 'components/containers/Container';
import DataTable from 'components/data-table/DataTable';

import HeaderContainer from './components/header-container/HeaderContainer';
import Header from './components/header/Header';
import HeaderMessage from './components/header-message/HeaderMessage';
import CreateUserButton from './components/create-user-button/CreateUserButton';
import CreateUserModal from './components/create-user-modal/CreateUserModal';

class Users extends Component {
  constructor() {
    super();
    this.columns = new Columns();
    this.state = {
      users: [],
      createUserModalOpen: false,
      firstName: '',
      lastName: ''
    };
  }

  toggleCreateUserModal = () => {
    this.setState({
      createUserModalOpen: !this.state.createUserModalOpen
    });
  }

  updateFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    });
  }

  updateLastName = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }

  render() {
    return (
      <MainContainer>
        <CreateUserModal
          open={this.state.createUserModalOpen}
          toggle={this.toggleCreateUserModal}
          firstName={this.state.firstName}
          updateFirstName={this.updateFirstName}
          lastName={this.state.lastName}
          updateLastName={this.updateLastName}
        />
        <HeaderContainer>
          <Header />
          <HeaderMessage />
          <CreateUserButton toggle={this.toggleCreateUserModal} />
        </HeaderContainer>
        <DataTable
          columns={this.columns.getUserColumns()}
          data={this.state.users}
        />
      </MainContainer>
    );
  }
}

export default Users;
