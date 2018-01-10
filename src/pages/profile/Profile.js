import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
import { GET_USER_INFORMATION } from './dux/actions';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      editing: false
    };
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.getUserInformation(this.props.match.params.id);
    }
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
                  value={this.props.name_first}
                  editing={this.state.editing}
                  onChange={this.changeFirstName}
                />
                <InputField
                  label="Last Name"
                  value={this.props.name_last}
                  editing={this.state.editing}
                  onChange={this.changeLastName}
                />
                <InputField
                  label="Phone"
                  value={this.props.phone}
                  editing={this.state.editing}
                  onChange={this.changePhone}
                />
              </div>
            </Content>

            <Content editing={this.state.editing} className="flex-column">
              <InputField
                label="Email"
                value={this.props.email}
                editing={this.state.editing}
                onChange={this.changeEmail}
              />
              <Password />
              <InputField
                label="Role"
                value={this.props.role_name}
                editing={this.state.editing}
                onChange={this.changeRole}
              />
              <Status />
            </Content>
          </Block>
        </div>
      </BlueContainer>
    );
  }
}

Profile.propTypes = {
  match: PropTypes.object.isRequired,
  getUserInformation: PropTypes.func.isRequired,
  name_first: PropTypes.string.isRequired,
  name_last: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role_name: PropTypes.string.isRequired
};

const mapStateToProps = ({ userInformation }) => userInformation;
const mapDispatchToProps = dispatch => ({
  getUserInformation: id => dispatch({ type: GET_USER_INFORMATION, id })
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
