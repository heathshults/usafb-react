import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';

import ChangePasswordModal from 'components/change-password-modal/ChangePasswordModal';

import selector from './dux/selectors';
import { LOGIN, SET_NEW_PASSWORD, TOGGLE_FORGOT_PASSWORD_MODAL, SEND_VERIFICATION_CODE, CONFIRM_VERIFICATION } from './dux/actions';

import Container from './components/container/Container';
import Form from './components/form/Form';
import ErrorMessage from './components/error/Error';
import InputGroup from './components/input-group/InputGroup';
import Input from './components/input/Input';
import RememberMe from './components/remember-me/RememberMe';
import LoginButton from './components/login-button/LoginButton';
import PlayerImage from './components/player-image/PlayerImage';
import ForgotPasswordModal from './components/forgot-password-modal/ForgotPasswordModal';

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      displayForgotPasswordModal: false
    };
  }

  componentDidMount() {
    $('#fadeInH1').fadeIn(500);
    setTimeout(this.nextline, 100);
  }

  // This function is going to get the password that the user
  // sets in the 'Change Your Password' modal after they click the
  // 'Change Password' button
  setNewPassword = (password) => {
    this.props.setNewPassword(password);
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

  login = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.login(this.state.email, this.state.password);
  }

  forgotPassword = () => {
    this.setState({
      displayForgotPasswordModal: true
    });
  }

  sendVerficationCode = (email) => {
    const data = {
      email
    };

    this.props.sendVerficationCode(data);
  }

  verifyConfirmation = (data) => {
    this.props.verifyConfirmation(data);
  }

  render() {
    return (
      <Container>
        <ChangePasswordModal
          open={this.props.loginReducer.changePasswordModalOpen}
          currentPasswordRequired={false}
          setPassword={this.setNewPassword}
          changingPassword={this.props.loginReducer.settingPassword}
          passwordError={this.props.loginReducer.passwordError}
          hideCancelButton
        />
        <ForgotPasswordModal
          open={this.props.loginReducer.displayForgotPasswordModal}
          toggle={this.props.toggleDisplayForgotPasswordModal}
          sendVerficationCode={this.sendVerficationCode}
          sendingVerificationCode={this.props.loginReducer.sendingVerificationCode}
          verificationCodeError={this.props.loginReducer.verificationCodeError}
          verificationCodeSent={this.props.loginReducer.verificationCodeSent}
          confirmingVerification={this.props.loginReducer.confirmingVerification}
          confirmationError={this.props.loginReducer.confirmationError}
          verifyConfirmation={this.verifyConfirmation}
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
            <RememberMe
              forgotPassword={this.props.toggleDisplayForgotPasswordModal}
            />
            <LoginButton
              onClick={this.login}
              loggingIn={this.props.loginReducer.loggingIn}
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
  setNewPassword: PropTypes.func.isRequired,
  toggleDisplayForgotPasswordModal: PropTypes.func.isRequired,
  sendVerficationCode: PropTypes.func.isRequired,
  verifyConfirmation: PropTypes.func.isRequired
};

const mapStateToProps = selector;
const mapDispatchToProps = dispatch => (
  {
    login: (email, password) => dispatch({ type: LOGIN, data: { email, password } }),
    setNewPassword: password => dispatch({ type: SET_NEW_PASSWORD, password }),
    toggleDisplayForgotPasswordModal: () => dispatch({ type: TOGGLE_FORGOT_PASSWORD_MODAL }),
    sendVerficationCode: data => dispatch({ type: SEND_VERIFICATION_CODE, data }),
    verifyConfirmation: data => dispatch({ type: CONFIRM_VERIFICATION, data })
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
