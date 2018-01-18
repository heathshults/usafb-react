import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';

import ChangePasswordModal from 'components/change-password-modal/ChangePasswordModal';

import { LOGIN, SET_NEW_PASSWORD } from './dux/actions';

import Container from './components/container/Container';
import Form from './components/form/Form';
import ErrorMessage from './components/error/Error';
import InputGroup from './components/input-group/InputGroup';
import Input from './components/input/Input';
import RememberMe from './components/remember-me/RememberMe';
import LoginButton from './components/login-button/LoginButton';
import PlayerImage from './components/player-image/PlayerImage';

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      newPassword: '',
      confirmPassword: ''
    };
  }

  componentDidMount() {
    $('#fadeInH1').fadeIn(500);
    setTimeout(this.nextline, 100);
  }

  setNewPassword = () => {
    this.props.setNewPassword(this.state.newPassword);
  }

  nextline = () => {
    $('#si-form').fadeIn(500);
  }

  updateEmail = event => this.setState({
    email: event.target.value
  });

  updatePassword = event => this.setState({
    password: event.target.value
  });

  updateNewPassword = event => this.setState({
    newPassword: event.target.value
  });

  updateConfirmPassword = event => this.setState({
    confirmPassword: event.target.value
  });

  login = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <Container>
        <ChangePasswordModal
          open={this.props.loginReducer.changePasswordModalOpen}
          currentPasswordRequired={false}
          setPassword={this.setNewPassword}
          changingPassword={this.props.loginReducer.settingPassword}
        />
        <Form>
          <ErrorMessage
            message={this.props.loginReducer.loginError}
          />
          <InputGroup
            login={this.login}
          >
            <Input
              icon="envelope"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateEmail}
              inputId="userEmail"
            />
            <Input
              icon="lock"
              placeholder="Password"
              inputType="password"
              value={this.state.password}
              onChange={this.updatePassword}
              inputId="userPassword"
            />
            <RememberMe />
            <LoginButton
              onClick={this.login}
            />
          </InputGroup>
        </Form>
        <PlayerImage />
      </Container>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loginReducer: PropTypes.object.isRequired,
  setNewPassword: PropTypes.func.isRequired
};

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });
const mapDispatchToProps = dispatch => (
  {
    login: (email, password) => dispatch({ type: LOGIN, data: { email, password } }),
    setNewPassword: password => dispatch({ type: SET_NEW_PASSWORD, password })
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
