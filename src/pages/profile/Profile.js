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

import './profile.css';
import { GET_USER_INFORMATION, SAVE_USER_INFORMATION, GET_MY_INFORMATION, SAVE_MY_INFORMATION } from './dux/actions';

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
      active: false
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
    active: this.state.active
  });

  cancelEdit = () => {
    this.setState({
      editing: false,
      ...this.props
    });
  }

  render() {
    return (
      <BlueContainer>
        <HeaderContentDivider />
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
              <Password />
              <SelectField
                label="Role"
                options={this.props.roles}
                value={this.state.role_name}
                editing={this.state.editing}
                onChange={this.changeRole}
              />
              {this.props.match.params.id &&
                <Status active={this.state.active} />
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
  roles: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  ...state.userInformation,
  ...state.appReducer
});

const mapDispatchToProps = dispatch => ({
  getUserInformation: id => dispatch({ type: GET_USER_INFORMATION, id }),
  saveUserInformation: data => dispatch({ type: SAVE_USER_INFORMATION, data }),
  getMyInformation: () => dispatch({ type: GET_MY_INFORMATION }),
  saveMyInformation: data => dispatch({ type: SAVE_MY_INFORMATION, data })
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
