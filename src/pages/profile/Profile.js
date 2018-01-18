import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BlueContainer from 'components/containers/blue-container/BlueContainer';
import HeaderContentDivider from 'components/header-content-divider/HeaderContentDivider';
import Block from './components/block/Block';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Avatar from './components/avatar/Avatar';
import ContactInformationHeader from './components/contact-information-header/ContactInformationHeader';
import InputField from './components/input-field/InputField';
import Password from './components/password/Password';
import Status from './components/status/Status';
import SelectField from './components/select-field/SelectField';
import ChangePasswordModal from './components/change-password-modal/ChangePasswordModal';

import './profile.css';
import {
  GET_USER_INFORMATION,
  SAVE_USER_INFORMATION,
  GET_MY_INFORMATION,
  SAVE_MY_INFORMATION,
  ACTIVATE_USER,
  DISABLE_USER,
  CHANGE_PASSWORD,
  TOGGLE_CHANGE_PASSWORD_MODAL
} from './dux/actions';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      email: '',
      name_first: '',
      name_last: '',
      phone: '',
      role_name: '',
      active: false,
      displayChangePasswordModal: false,
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    };
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.getUserInformation(this.props.match.params.id);
    } else {
      this.props.getMyInformation();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.saving) {
      this.setState({ ...nextProps });
    }
  }

  toggleEdit = () =>
    this.setState({
      editing: !this.state.editing
    });

  changeFirstName = event =>
    this.setState({
      name_first: event.target.value
    });

  changeLastName = event =>
    this.setState({
      name_last: event.target.value
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
      role_name: event.target.value
    });

  changeOrganization = event =>
    this.setState({
      organization: event.target.value
    });

  changeStatus = () => {
    if (this.state.active) {
      this.props.disableUser(this.props.match.params.id);
    } else {
      this.props.activateUser(this.props.match.params.id);
    }
  }

  saveChanges = () => {
    this.setState({
      editing: false
    });

    const data = this.transformDataForAPI();

    if (this.props.match.params.id) {
      this.props.saveUserInformation(data);
    } else {
      this.props.saveMyInformation(data);
    }
  }

  transformDataForAPI = () => ({
    id: this.state._id, //eslint-disable-line
    name_first: this.state.name_first,
    name_last: this.state.name_last,
    phone: this.state.phone || '',
    email: this.state.email,
    role_name: this.state.role_name,
    address: this.state.address
  });

  cancelEdit = () => {
    this.setState({
      editing: false,
      ...this.props
    });
  }

  cancelChangePasswordModal = () => {
    this.props.toggleChangePasswordModal();
    this.setState({
      displayChangePasswordModal: false,
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    });
  }

  updateCurrentPassword = (event) => {
    this.setState({
      currentPassword: event.target.value
    });
  }

  updateNewPassword = (event) => {
    this.setState({
      newPassword: event.target.value
    });
  }

  updateConfirmNewPassword = (event) => {
    this.setState({
      confirmNewPassword: event.target.value
    });
  }

  changePassword = () => {
    const data = {
      password_current: this.state.currentPassword,
      password_new: this.state.newPassword
    };

    this.props.changePassword(data);
  }

  render() {
    return (
      <BlueContainer>
        <HeaderContentDivider />
        <ChangePasswordModal
          open={this.props.changePasswordModalOpen}
          cancel={this.cancelChangePasswordModal}
          currentPassword={this.state.currentPassword}
          newPassword={this.state.newPassword}
          updateCurrentPassword={this.updateCurrentPassword}
          updateNewPassword={this.updateNewPassword}
          confirmNewPassword={this.state.confirmNewPassword}
          updateConfirmNewPassword={this.updateConfirmNewPassword}
          changingPassword={this.props.changingPassword}
          changePassword={this.changePassword}
        />
        <div className="d-flex flex-column align-items-center">
          <Block editing={this.state.editing}>
            <Header />
            <Content editing={this.state.editing}>
              <Avatar />
              <div className="d-flex flex-column profile__contact-information">
                <ContactInformationHeader
                  editing={this.state.editing}
                  toggleEdit={this.toggleEdit}
                  saveChanges={this.saveChanges}
                  cancelEdit={this.cancelEdit}
                  saving={this.props.saving}
                />
                <InputField
                  label="First Name"
                  value={this.state.name_first}
                  editing={this.state.editing}
                  onChange={this.changeFirstName}
                />
                <InputField
                  label="Last Name"
                  value={this.state.name_last}
                  editing={this.state.editing}
                  onChange={this.changeLastName}
                />
                <InputField
                  label="Phone"
                  value={this.state.phone || ''}
                  editing={this.state.editing}
                  onChange={this.changePhone}
                />
              </div>
            </Content>

            <Content editing={this.state.editing} className="flex-column">
              <InputField
                label="Email"
                value={this.state.email}
                editing={false}
                onChange={this.changeEmail}
              />
              {!this.props.match.params.id &&
                <Password openChangePasswordModal={this.props.toggleChangePasswordModal} />
              }
              <SelectField
                label="Role"
                options={this.props.roles}
                value={this.state.role_name}
                editing={this.state.editing}
                onChange={this.changeRole}
              />
              {this.props.match.params.id &&
                <Status
                  active={this.props.active}
                  onChange={this.changeStatus}
                  disabled={this.props.togglingUserStatus}
                />
              }
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
  saveUserInformation: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  getMyInformation: PropTypes.func.isRequired,
  saveMyInformation: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
  activateUser: PropTypes.func.isRequired,
  disableUser: PropTypes.func.isRequired,
  togglingUserStatus: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  changingPassword: PropTypes.bool.isRequired,
  changePassword: PropTypes.func.isRequired,
  changePasswordModalOpen: PropTypes.bool.isRequired,
  toggleChangePasswordModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ...state.userInformation,
  ...state.appReducer
});

const mapDispatchToProps = dispatch => ({
  getUserInformation: id => dispatch({ type: GET_USER_INFORMATION, id }),
  saveUserInformation: data => dispatch({ type: SAVE_USER_INFORMATION, data }),
  getMyInformation: () => dispatch({ type: GET_MY_INFORMATION }),
  saveMyInformation: data => dispatch({ type: SAVE_MY_INFORMATION, data }),
  activateUser: id => dispatch({ type: ACTIVATE_USER, id }),
  disableUser: id => dispatch({ type: DISABLE_USER, id }),
  changePassword: data => dispatch({ type: CHANGE_PASSWORD, data }),
  toggleChangePasswordModal: () => dispatch({ type: TOGGLE_CHANGE_PASSWORD_MODAL })
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
