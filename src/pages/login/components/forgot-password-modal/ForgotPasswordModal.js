import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Alert, FormText } from 'reactstrap';

import './forgot-password-modal.css';

class ForgotPasswordModal extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      code: ''
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
        Send Your New Password
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
    });
  }

  updateVerificationCode = (event) => {
    this.setState({
      code: event.target.value
    });
  }

  sendVerficationCode = () => {
    this.props.sendVerficationCode(this.state.email);
  }

  confirmVerification = () => {
    console.dir(this.state); //eslint-disable-line
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
        <div className="text-center forgot-password__form">
          <Alert color="info text-white text-center">
            Your verification code has been sent! Please check your email for your code, fill out the information below and set your new password.
          </Alert>
          <Input
            type="email"
            name="forgot-password-email"
            placeholder="Enter your verification code"
            className="forgot-password-input w-100 mt-2 mb-2"
            value={this.state.code}
            onChange={this.updateVerificationCode}
          />
          <Input
            type="password"
            name="forgot-password-email"
            placeholder="Enter your password"
            className="forgot-password-input w-100 mt-2 mb-2"
            value={this.state.password}
            onChange={this.updatePassword}
          />
          <FormText className="mt-2 text-center">Passwords must include a capital letter, a special character(@#$%*!) and a number</FormText>
          <Button
            color="primary mt-2"
            disabled={this.state.code === '' || this.state.password === '' || this.props.confirmingVerification}
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
        <ModalHeader>Forgot your password?</ModalHeader>
        <ModalBody>
          {this.props.verificationCodeError &&
            <Alert color="danger text-center text-white">
              {this.props.verificationCodeError}
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
  confirmingVerification: PropTypes.bool.isRequired
};

export default ForgotPasswordModal;
