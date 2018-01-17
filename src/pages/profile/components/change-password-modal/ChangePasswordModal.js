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

const changePassword = props => (
  <Modal isOpen={props.open} >
    <ModalHeader toggle={props.cancel}>Change your password</ModalHeader>
    <ModalBody>
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
      <Button color="secondary" onClick={props.cancel}>Cancel</Button>&nbsp;
      <Button
        color="primary"
        onClick={props.changePassword}
        disabled={(!props.currentPassword || !props.newPassword || !props.confirmNewPassword) || (props.confirmNewPassword !== props.newPassword) || props.changingPassword}
      >
        {getChangePasswordLabel(props.changingPassword)}
      </Button>
    </ModalFooter>
  </Modal>
);

changePassword.propTypes = {
  open: PropTypes.bool.isRequired,
  cancel: PropTypes.func.isRequired,
  currentPassword: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  confirmNewPassword: PropTypes.string.isRequired,
  updateCurrentPassword: PropTypes.func.isRequired,
  updateNewPassword: PropTypes.func.isRequired,
  updateConfirmNewPassword: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  changingPassword: PropTypes.bool.isRequired
};

export default changePassword;
