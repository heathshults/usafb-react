import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import InputField from '../input-field/InputField';

const createUserModal = props => (
  <Modal isOpen={props.open} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>
      <i className="fa fa-user" aria-hidden="true" /> Create New User
    </ModalHeader>
    <ModalBody>
      <div className="form-group">
        <div className="row">
          <div className="col-md-6 input-group">
            <InputField
              icon="user-o"
              label="First Name"
              value={props.firstName}
              onChange={props.updateFirstName}
            />
          </div>
          <div className="col-md-6 input-group">
            <InputField
              icon="user-o"
              label="Last Name"
              value={props.lastName}
              onChange={props.updateLastName}
            />
          </div>
        </div>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
      <Button color="secondary" onClick={props.toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
);

createUserModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  updateFirstName: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  updateLastName: PropTypes.func.isRequired
};

export default createUserModal;
