import React, { Component } from 'react';

import BlueContainer from 'components/containers/blue-container/BlueContainer';
import Block from './components/block/Block';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Avatar from './components/avatar/Avatar';
import ContactInformationHeader from './components/contact-information-header/ContactInformationHeader';

import './profile.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      editing: false
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
              </div>
            </Content>
          </Block>
        </div>
      </BlueContainer>
    );
  }
}

export default Profile;
