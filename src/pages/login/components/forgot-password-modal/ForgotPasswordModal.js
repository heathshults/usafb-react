import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Alert, FormText, FormGroup, FormFeedback } from 'reactstrap';
import passwordValidator from 'services/validations/validation';

import './forgot-password-modal.css';

class ForgotPasswordModal extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      code: '',
      codeTouched: false,
      invalidCodeError: '',
      password: '',
      passwordTouched: '',
      invalidPasswordError: ''
    };
  }

  getVerificationCodeButtonLabel = () => {
    if (this.props.sendingVerificationCode) {
      return (
        <div>
          <i className="fa fa-spinner fa-spin" /> Sending...
        </div>
      );
    }

    return (
      <div>
        Send Verification Code
      </div>
    );
  }

  getSetPasswordButtonLabel = () => {
    if (this.props.confirmingVerification) {
      return (
        <div>
          <i className="fa fa-spinner fa-spin" /> Setting...
        </div>
      );
    }

    return (
      <div>
        Set Your New Password
      </div>
    );
  }

  updateEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    }, this.validatePassword);
  }

  validatePassword = () => {
    if (this.state.passwordTouched) {
      const error = passwordValidator(this.state.password) ? '' : 'Invalid password!';
      this.setState({
        invalidPasswordError: error
      });
    }
  }

  passwordOnBlur = () => {
    this.setState({
      passwordTouched: true
    }, this.passwordOnBlurValidation);
  }

  passwordOnBlurValidation = () => {
    if (this.state.password === '') {
      this.setState({
        invalidPasswordError: 'This field is required!'
      });
    } else {
      this.validatePassword();
    }
  }

  updateVerificationCode = (event) => {
    this.setState({
      code: event.target.value
    });
  }

  codeOnBlur = () => {
    if (this.state.code === '') {
      this.setState({
        invalidCodeError: 'This field is required!'
      });
    } else {
      this.setState({
        invalidCodeError: ''
      });
    }
  }

  sendVerficationCode = () => {
    this.props.sendVerficationCode(this.state.email);
  }

  confirmVerification = () => {
    this.props.verifyConfirmation(this.state);
  }

  renderModalBody = () => {
    if (!this.props.verificationCodeSent) {
      return (
        <div className="text-center forgot-password__form">
          Please enter your email and click the button below to send receive a verification code
          <Input
            type="email"
            name="forgot-password-email"
            placeholder="Enter your email"
            className="forgot-password-input w-100 mt-2 mb-2"
            value={this.state.email}
            onChange={this.updateEmail}
          />
          <Button
            color="primary mt-2"
            disabled={this.state.email === '' || this.props.sendingVerificationCode}
            onClick={this.sendVerficationCode}
          >
            {this.getVerificationCodeButtonLabel()}
          </Button>
        </div>
      );
    }

    if (this.props.verificationCodeSent) {
      return (
        <div className="forgot-password__form">
          <Alert color="info text-white text-center">
            Your verification code has been sent! Please check your email for your code, fill out the information below and set your new password.
          </Alert>
          <FormGroup>
            <Input
              type="text"
              name="forgot-email-code"
              placeholder="Enter your verification code"
              className={`${this.state.invalidCodeError ? 'change-password__input-field-error' : 'forgot-password-input'} w-100 mt-2 mb-2"`}
              value={this.state.code}
              onChange={this.updateVerificationCode}
              onBlur={this.codeOnBlur}
              valid={this.state.invalidCodeError === ''}
            />
            <FormFeedback>
              {this.state.invalidCodeError}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="forgot-password-password"
              placeholder="Enter your password"
              className={`${this.state.invalidPasswordError ? 'change-password__input-field-error' : 'forgot-password-input'} w-100 mt-2 mb-2"`}
              value={this.state.password}
              onChange={this.updatePassword}
              onBlur={this.passwordOnBlur}
              valid={this.state.invalidPasswordError === ''}
            />
            <FormFeedback>
              {this.state.invalidPasswordError}
            </FormFeedback>
          </FormGroup>

          <FormText className="mt-2 text-center">Passwords must include a capital letter, a special character(@#$%*!) and a number</FormText>
          <Button
            color="primary mt-2"
            disabled={this.state.code === '' || this.state.password === '' || this.props.confirmingVerification || this.state.invalidCodeError !== '' || this.state.invalidPasswordError !== ''}
            onClick={this.confirmVerification}
          >
            {this.getSetPasswordButtonLabel()}
          </Button>
        </div>
      );
    }
    return (
      <div>
        Sent
      </div>
    );
  }

  render() {
    return (
      <Modal
        isOpen={this.props.open}
      >
        <ModalHeader toggle={this.props.toggle} >Forgot your password?</ModalHeader>
        <ModalBody>
          {(this.props.verificationCodeError || this.props.confirmationError) &&
            <Alert color="danger text-center text-white">
              {this.props.verificationCodeError || this.props.confirmationError}
            </Alert>
          }
          {this.renderModalBody()}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

ForgotPasswordModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  sendVerficationCode: PropTypes.func.isRequired,
  sendingVerificationCode: PropTypes.bool.isRequired,
  verificationCodeError: PropTypes.string.isRequired,
  verificationCodeSent: PropTypes.bool.isRequired,
  confirmingVerification: PropTypes.bool.isRequired,
  confirmationError: PropTypes.string.isRequired,
  verifyConfirmation: PropTypes.func.isRequired
};

export default ForgotPasswordModal;
