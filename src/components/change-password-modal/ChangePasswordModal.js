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
  FormGroup,
  Alert
} from 'reactstrap';
import passwordValidator from 'services/validations/validation';
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

  // Whatever component that uses this modal must have a callback set that will
  // take in the current and new password fields
  setPassword = () => {
    this.props.setPassword(this.state.newPassword);
  }

  // Current Password functionality
  updateCurrentPassword = (event) => {
    this.setState({
      currentPassword: event.target.value
    }, this.validateCurrentPassword);
  }

  validateCurrentPassword = () => {
    if (this.state.currentPasswordTouched) {
      const error = passwordValidator(this.state.currentPassword) ? '' : 'Invalid password!';
      this.setState({
        currentPasswordError: error
      });
    }
  }

  currentPasswordTouched = () => {
    if (this.state.currentPassword === '') {
      this.setState({
        currentPasswordError: 'This field is required!'
      });
    } else {
      this.validateCurrentPassword();
    }
    this.setState({
      currentPasswordTouched: true
    });
  }

  // New Password functionality
  updateNewPassword = (event) => {
    this.setState({
      newPassword: event.target.value
    }, this.validateNewPassword);
  }

  validateNewPassword = () => {
    if (this.state.newPasswordTouched) {
      const error = passwordValidator(this.state.newPassword) ? '' : 'Invalid password!';
      this.setState({
        newPasswordError: error
      });
    }
  }

  newPasswordTouched = () => {
    if (this.state.newPassword === '') {
      this.setState({
        newPasswordError: 'This field is required!'
      });
    } else {
      this.validateNewPassword();
    }

    this.setState({
      newPasswordTouched: true
    });
  }

  // Confirm Password functionality
  updateConfirmPassword = (event) => {
    this.setState({
      confirmPassword: event.target.value
    }, this.validateConfirmPassword);
  }

  validateConfirmPassword = () => {
    if (this.state.confirmPasswordTouched) {
      const error = passwordValidator(this.state.confirmPassword) ? '' : 'Invalid password!';
      this.setState({
        confirmPasswordError: error
      });
    }
  }

  confirmPasswordTouched = () => {
    if (this.state.confirmPassword === '') {
      this.setState({
        confirmPasswordError: 'This field is required!'
      });
    } else {
      this.validateConfirmPassword();
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
          {this.props.passwordError !== '' &&
            <Alert color="danger text-white text-center">
              {this.props.passwordError}
            </Alert>
          }
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
            onClick={this.setPassword}
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
  hideCancelButton: PropTypes.bool,
  passwordError: PropTypes.string.isRequired
};

ChangePasswordModal.defaultProps = {
  currentPassword: '',
  currentPasswordRequired: true,
  cancel: () => { },
  hideCancelButton: false
};

export default ChangePasswordModal;
