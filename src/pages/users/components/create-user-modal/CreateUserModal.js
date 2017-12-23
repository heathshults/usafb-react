import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import InputField from '../input-field/InputField';
import './create-user-modal.css';

const createUserModal = props => (
  <Modal isOpen={props.open} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>
      <i className="fa fa-user" aria-hidden="true" /> Create New User
    </ModalHeader>
    <ModalBody>
      <div className="form-group users__form-group">
        <div className="row">
          <div className="col-md-6 users__input-container">
            <InputField
              icon="user-o"
              label="First Name"
              value={props.firstName}
              onChange={props.updateFirstName}
            />
          </div>
          <div className="col-md-6 users__input-container">
            <InputField
              icon="user-o"
              label="Last Name"
              value={props.lastName}
              onChange={props.updateLastName}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 users__input-container">
            <InputField
              icon="envelope-o"
              label="Email"
              value={props.email}
              onChange={props.updateEmail}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 users__input-container">
            <InputField
              icon="users"
              label="Role"
              value={props.role}
              onChange={props.updateRole}
            />
          </div>
          <div className="col-md-6 users__input-container">
            <InputField
              icon="mobile-phone"
              label="Phone"
              value={props.phone}
              onChange={props.updatePhone}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 users__input-container">
            <InputField
              icon="building"
              label="Organization"
              value={props.organization}
              onChange={props.updateOrganization}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 users__input-container">
            <InputField
              icon="home"
              label="1234 Main St"
              value={props.address1}
              onChange={props.updateAddress1}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 users__input-container">
            <InputField
              icon="home"
              label="Apartment, studio, or floor"
              value={props.address2}
              onChange={props.updateAddress2}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 users__input-container">
            <InputField
              icon="map"
              label="City"
              value={props.city}
              onChange={props.updateCity}
            />
          </div>
          <div className="col-md-4 users__input-container">
            <InputField
              icon="map"
              label="State"
              value={props.state}
              onChange={props.updateState}
            />
          </div>
          <div className="col-md-4 users__input-container">
            <InputField
              icon="map-marker"
              label="Postal Code"
              value={props.zip}
              onChange={props.updateZip}
            />
          </div>
        </div>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={props.toggle}>Close</Button>{' '}
      <Button color="primary" onClick={props.toggle}>Save</Button>
    </ModalFooter>
  </Modal>
);

createUserModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  updateFirstName: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  updateLastName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  updateRole: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  updatePhone: PropTypes.func.isRequired,
  organization: PropTypes.string.isRequired,
  updateOrganization: PropTypes.func.isRequired,
  address1: PropTypes.string.isRequired,
  updateAddress1: PropTypes.func.isRequired,
  address2: PropTypes.string.isRequired,
  updateAddress2: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  updateCity: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  zip: PropTypes.string.isRequired,
  updateZip: PropTypes.func.isRequired,
};

export default createUserModal;
