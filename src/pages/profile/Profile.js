import React, { Component } from 'react';

import BlueContainer from 'components/containers/blue-container/BlueContainer';
import Block from './components/block/Block';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Avatar from './components/avatar/Avatar';
import ContactInformationHeader from './components/contact-information-header/ContactInformationHeader';
import InputField from './components/input-field/InputField';

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

  toggleEdit = () =>
    this.setState({
      editing: !this.state.editing
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
                />
                <InputField
                  label="Last Name"
                  value={this.state.lastName}
                  editing={this.state.editing}
                />
                <InputField
                  label="Phone"
                  value={this.state.phone}
                  editing={this.state.editing}
                />
              </div>
            </Content>

            <Content className="flex-column">
              <InputField
                label="Email"
                value={this.state.email}
                editing={this.state.editing}
              />
              <InputField
                label="Password"
                value={this.state.password}
                editing={this.state.editing}
              />
              <InputField
                label="Role"
                value={this.state.role}
                editing={this.state.editing}
              />
              <InputField
                label="Organization"
                value={this.state.organization}
                editing={this.state.editing}
              />
              <InputField
                label="Status"
                value={this.state.status}
                editing={this.state.editing}
              />
            </Content>
          </Block>
        </div>
      </BlueContainer>
    );
  }
}

export default Profile;
