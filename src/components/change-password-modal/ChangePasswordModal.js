import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormText,
  FormFeedback,
  FormGroup
} from 'reactstrap';

import './change-password-modal.css';

class ChangePasswordModal extends Component {
  constructor() {
    super();

    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      currentPasswordTouched: false,
      newPasswordTouched: false,
      confirmPasswordTouched: false,
      currentPasswordError: '',
      newPasswordError: '',
      confirmPasswordError: ''
    };
  }

  getChangePasswordLabel = () => {
    if (this.props.changingPassword) {
      return (
        <span>
          <i className="fa fa-spinner fa-spin" />&nbsp;
            saving...
        </span>
      );
    }

    return 'Change Password';
  };

  getButtonDisabledStatus = () => {
    if (this.props.currentPasswordRequired) {
      return (!this.state.currentPassword || !this.state.newPassword || !this.state.confirmPassword) || (this.state.confirmPassword !== this.state.newPassword) || this.props.changingPassword;
    }

    return (!this.state.newPassword || !this.state.confirmPassword) || (this.state.confirmPassword !== this.state.newPassword) || this.props.changingPassword;
  };

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

  updateConfirmPassword = (event) => {
    this.setState({
      confirmPassword: event.target.value
    });
  }

  currentPasswordTouched = () => {
    if (this.state.currentPassword === '') {
      this.setState({
        currentPasswordError: 'This field is required!'
      });
    }
    this.setState({
      currentPasswordTouched: true
    });
  }

  newPasswordTouched = () => {
    if (this.state.currentPassword === '') {
      this.setState({
        newPasswordError: 'This field is required!'
      });
    }
    this.setState({
      newPasswordTouched: true
    });
  }

  confirmPasswordTouched = () => {
    if (this.state.currentPassword === '') {
      this.setState({
        confirmPasswordError: 'This field is required!'
      });
    }
    this.setState({
      confirmPasswordTouched: true
    });
  }

  render() {
    return (
      <Modal isOpen={this.props.open} >
        <ModalHeader>Change your password</ModalHeader>
        <ModalBody>
          {this.props.currentPasswordRequired &&
            <FormGroup>
              <Label for="currentPassword">Current Password</Label>
              <Input
                type="password"
                name="password"
                id="currentPassword"
                className={`${this.state.currentPasswordError ? 'change-password__input-field-error' : 'change-password__input-field'} w-100`}
                value={this.state.currentPassword}
                onChange={this.updateCurrentPassword}
                onBlur={this.currentPasswordTouched}
                valid={this.state.currentPasswordError === ''}
              />
              <FormFeedback>
                {this.state.currentPasswordError}
              </FormFeedback>
            </FormGroup>
          }
          <FormGroup>
            <Label for="newPassword">New Password</Label>
            <Input
              type="password"
              name="password"
              id="newPassword"
              className={`${this.state.newPasswordError ? 'change-password__input-field-error' : 'change-password__input-field'} w-100`}
              value={this.state.newPassword}
              onChange={this.updateNewPassword}
              onBlur={this.newPasswordTouched}
              valid={this.state.newPasswordError === ''}
            />
            <FormFeedback>
              {this.state.newPasswordError}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="confirmNewPassword">Confirm New Password</Label>
            <Input
              type="password"
              name="password"
              id="confirmNewPassword"
              className={`${this.state.confirmPasswordError ? 'change-password__input-field-error' : 'change-password__input-field'} w-100`}
              value={this.state.confirmPassword}
              onChange={this.updateConfirmPassword}
              onBlur={this.confirmPasswordTouched}
              valid={this.state.confirmPasswordError === ''}
            />
            <FormFeedback>
              {this.state.confirmPasswordError}
            </FormFeedback>
          </FormGroup>
          <FormText className="mt-2 text-center">Passwords must include a capital letter, a special letter and a number</FormText>
        </ModalBody>
        <ModalFooter>
          {this.props.hideCancelButton &&
            <Button color="secondary mr-2" onClick={this.props.cancel}>Cancel</Button>
          }
          <Button
            color="primary"
            onClick={this.props.setPassword}
            disabled={this.getButtonDisabledStatus()}
          >
            {this.getChangePasswordLabel()}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

ChangePasswordModal.propTypes = {
  open: PropTypes.bool.isRequired,
  cancel: PropTypes.func,
  setPassword: PropTypes.func.isRequired,
  changingPassword: PropTypes.bool.isRequired,
  currentPasswordRequired: PropTypes.bool,
  hideCancelButton: PropTypes.bool
};

ChangePasswordModal.defaultProps = {
  currentPassword: '',
  currentPasswordRequired: true,
  updateCurrentPassword: () => { },
  cancel: () => { },
  hideCancelButton: false
};

export default ChangePasswordModal;
