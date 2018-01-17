import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const changePassword = props => (
  <Modal isOpen={props.open} >
    <ModalHeader toggle={props.cancel}>Change your password</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
