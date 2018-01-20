import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

import './forgot-password-modal.css';

class ForgotPasswordModal extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      verificationSent: false
    };
  }

  updateEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  renderModalBody = () => {
    if (!this.state.verificationSent) {
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
            disabled={this.state.email === ''}
          >
            Send Verification Code
          </Button>
        </div>
      );
    }
    return (
      <div>
        Modal body
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
  toggle: PropTypes.func.isRequired
};

export default ForgotPasswordModal;
