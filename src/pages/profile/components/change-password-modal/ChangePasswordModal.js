import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';

import './change-password-modal.css';

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
        />
      </div>
      <div className="d-flex flex-column mr-2 ml-2 mt-2">
        <Label for="newPassword">New Password</Label>
        <Input
          type="password"
          name="password"
          id="newPassword"
          className="change-password__input-field w-100"
        />
      </div>
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={props.cancel}>Cancel</Button>&nbsp;
      <Button color="primary" onClick={props.cancel}>Change Password</Button>
    </ModalFooter>
  </Modal>
);

changePassword.propTypes = {
  open: PropTypes.bool.isRequired,
  cancel: PropTypes.func.isRequired
};

export default changePassword;
