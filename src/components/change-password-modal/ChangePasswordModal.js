import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormText } from 'reactstrap';

import './change-password-modal.css';

class ChangePasswordModal extends Component {
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
      return (!this.props.currentPassword || !this.props.newPassword || !this.props.confirmNewPassword) || (this.props.confirmNewPassword !== this.props.newPassword) || this.props.changingPassword;
    }

    return (!this.props.newPassword || !this.props.confirmNewPassword) || (this.props.confirmNewPassword !== this.props.newPassword) || this.props.changingPassword;
  };

  render() {
    return (
      <Modal isOpen={this.props.open} >
        <ModalHeader toggle={this.props.cancel}>Change your password</ModalHeader>
        <ModalBody>
          {this.props.currentPasswordRequired &&
            <div className="d-flex flex-column mr-2 ml-2">
              <Label for="currentPassword">Current Password</Label>
              <Input
                type="password"
                name="password"
                id="currentPassword"
                className="change-password__input-field w-100"
                value={this.props.currentPassword}
                onChange={this.props.updateCurrentPassword}
              />
            </div>
          }
          <div className="d-flex flex-column mr-2 ml-2 mt-2">
            <Label for="newPassword">New Password</Label>
            <Input
              type="password"
              name="password"
              id="newPassword"
              className="change-password__input-field w-100"
              value={this.props.newPassword}
              onChange={this.props.updateNewPassword}
            />
          </div>
          <div className="d-flex flex-column mr-2 ml-2 mt-2">
            <Label for="confirmNewPassword">Confirm New Password</Label>
            <Input
              type="password"
              name="password"
              id="confirmNewPassword"
              className="change-password__input-field w-100"
              value={this.props.confirmNewPassword}
              onChange={this.props.updateConfirmNewPassword}
            />
          </div>
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
  currentPassword: PropTypes.string,
  newPassword: PropTypes.string.isRequired,
  confirmNewPassword: PropTypes.string.isRequired,
  updateCurrentPassword: PropTypes.func,
  updateNewPassword: PropTypes.func.isRequired,
  updateConfirmNewPassword: PropTypes.func.isRequired,
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
