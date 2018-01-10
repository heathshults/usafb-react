import React, { Component } from 'react';

import BlueContainer from 'components/containers/blue-container/BlueContainer';
import Block from './components/block/Block';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Avatar from './components/avatar/Avatar';
import ContactInformationHeader from './components/contact-information-header/ContactInformationHeader';
import InputField from './components/input-field/InputField';
import Password from './components/password/Password';
import Status from './components/status/Status';

import './profile.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      firstName: 'Kent',
      lastName: 'Kawahara',
      phone: '808-389-7264',
      email: 'kent.kawahara@verys.com',
      password: '************',
      role: 'Super User',
      organization: 'Verys',
      status: true
    };
  }

  componentWillMount() {
    console.dir(this.props); //eslint-disable-line
  }

  toggleEdit = () =>
    this.setState({
      editing: !this.state.editing
    });

  changeFirstName = event =>
    this.setState({
      firstName: event.target.value
    });

  changeLastName = event =>
    this.setState({
      lastName: event.target.value
    });

  changePhone = event =>
    this.setState({
      phone: event.target.value
    });

  changeEmail = event =>
    this.setState({
      email: event.target.value
    });

  changePassword = event =>
    this.setState({
      password: event.target.value
    });

  changeRole = event =>
    this.setState({
      role: event.target.value
    });

  changeOrganization = event =>
    this.setState({
      organization: event.target.value
    });

  changeStatus = event =>
    this.setState({
      status: event.target.value
    });

  render() {
    return (
      <BlueContainer>
        <div className="d-flex flex-column align-items-center">
          <Block editing={this.state.editing}>
            <Header />
            <Content editing={this.state.editing}>
              <Avatar />
              <div className="d-flex flex-column profile__contact-information">
                <ContactInformationHeader
                  editing={this.state.editing}
                  toggleEdit={this.toggleEdit}
                />
                <InputField
                  label="First Name"
                  value={this.state.firstName}
                  editing={this.state.editing}
                  onChange={this.changeFirstName}
                />
                <InputField
                  label="Last Name"
                  value={this.state.lastName}
                  editing={this.state.editing}
                  onChange={this.changeLastName}
                />
                <InputField
                  label="Phone"
                  value={this.state.phone}
                  editing={this.state.editing}
                  onChange={this.changePhone}
                />
              </div>
            </Content>

            <Content editing={this.state.editing} className="flex-column">
              <InputField
                label="Email"
                value={this.state.email}
                editing={this.state.editing}
                onChange={this.changeEmail}
              />
              <Password />
              <InputField
                label="Role"
                value={this.state.role}
                editing={this.state.editing}
                onChange={this.changeRole}
              />
              <InputField
                label="Organization"
                value={this.state.organization}
                editing={this.state.editing}
                onChange={this.changeOrganization}
              />
              <Status />
            </Content>
          </Block>
        </div>
      </BlueContainer>
    );
  }
}

export default Profile;
