import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormText } from 'reactstrap';

import './change-password-modal.css';

const getChangePasswordLabel = (changing) => {
  if (changing) {
    return (
      <span>
        <i className="fa fa-spinner fa-spin" />&nbsp;
          saving...
      </span>
    );
  }

  return 'Change Password';
};

const getButtonDisabledStatus = (props) => {
  if (props.currentPasswordRequired) {
    return (!props.currentPassword || !props.newPassword || !props.confirmNewPassword) || (props.confirmNewPassword !== props.newPassword) || props.changingPassword;
  }

  return (!props.newPassword || !props.confirmNewPassword) || (props.confirmNewPassword !== props.newPassword) || props.changingPassword;
};

const changePassword = props => (
  <Modal isOpen={props.open} >
    <ModalHeader toggle={props.cancel}>Change your password</ModalHeader>
    <ModalBody>
      {props.currentPasswordRequired &&
        <div className="d-flex flex-column mr-2 ml-2">
          <Label for="currentPassword">Current Password</Label>
          <Input
            type="password"
            name="password"
            id="currentPassword"
            className="change-password__input-field w-100"
            value={props.currentPassword}
            onChange={props.updateCurrentPassword}
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
          value={props.newPassword}
          onChange={props.updateNewPassword}
        />
      </div>
      <div className="d-flex flex-column mr-2 ml-2 mt-2">
        <Label for="confirmNewPassword">Confirm New Password</Label>
        <Input
          type="password"
          name="password"
          id="confirmNewPassword"
          className="change-password__input-field w-100"
          value={props.confirmNewPassword}
          onChange={props.updateConfirmNewPassword}
        />
      </div>
      <FormText className="mt-2 text-center">Passwords must include a capital letter, a special letter and a number</FormText>
    </ModalBody>
    <ModalFooter>
      {props.hideCancelButton &&
        <Button color="secondary mr-2" onClick={props.cancel}>Cancel</Button>
      }
      <Button
        color="primary"
        onClick={props.setPassword}
        disabled={getButtonDisabledStatus(props)}
      >
        {getChangePasswordLabel(props.changingPassword)}
      </Button>
    </ModalFooter>
  </Modal>
);

changePassword.propTypes = {
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

changePassword.defaultProps = {
  currentPassword: '',
  currentPasswordRequired: true,
  updateCurrentPassword: () => { },
  cancel: () => { },
  hideCancelButton: false
};

export default changePassword;
