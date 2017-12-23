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
      lastName: '',
      email: '',
      role: '',
      phone: '',
      organization: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    };
  }

  toggleCreateUserModal = () => {
    this.setState({
      createUserModalOpen: !this.state.createUserModalOpen
    });
  }

  updateFirstName = event =>
    this.setState({
      firstName: event.target.value
    });

  updateLastName = event =>
    this.setState({
      lastName: event.target.value
    });

  updateEmail = event =>
    this.setState({
      email: event.target.value
    });

  updateRole = event =>
    this.setState({
      role: event.target.value
    });

  updatePhone = event =>
    this.setState({
      phone: event.target.value
    });

  updateOrganization = event =>
    this.setState({
      organization: event.target.value
    });

  updateAddress1 = event =>
    this.setState({
      address1: event.target.value
    });

  updateAddress2 = event =>
    this.setState({
      address2: event.target.value
    });

  updateCity = event =>
    this.setState({
      city: event.target.value
    });

  updateState = event =>
    this.setState({
      state: event.target.value
    });

  updateZip = event =>
    this.setState({
      zip: event.target.value
    });

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
          email={this.state.email}
          updateEmail={this.updateEmail}
          role={this.state.role}
          updateRole={this.updateRole}
          phone={this.state.phone}
          updatePhone={this.updatePhone}
          organization={this.state.organization}
          updateOrganization={this.updateOrganization}
          address1={this.state.address1}
          updateAddress1={this.updateAddress1}
          address2={this.state.address2}
          updateAddress2={this.updateAddress2}
          city={this.state.city}
          updateCity={this.updateCity}
          state={this.state.state}
          updateState={this.updateState}
          zip={this.state.zip}
          updateZip={this.updateZip}
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
