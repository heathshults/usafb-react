import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import InputField from '../input-field/InputField';
import DropdownField from '../dropdown-field/DropdownField';
import roles from '../../models/roles';
import states from '../../models/states';
import './user-modal.css';

class UserModal extends Component {
  constructor() {
    super();
    this.roles = roles;
    this.states = states;
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      phone: '',
      organization: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
    };
  }

  updateFirstName = event =>
    this.setState({
      firstName: event.target.value
    });

  updateLastName = event =>
    this.setState({
      lastName: event.target.value
    });

  updateEmail = event =>
    this.setState({
      email: event.target.value
    });

  updateRole = event =>
    this.setState({
      role: event.target.value
    });

  updatePhone = event =>
    this.setState({
      phone: event.target.value
    });

  updateOrganization = event =>
    this.setState({
      organization: event.target.value
    });

  updateAddress1 = event =>
    this.setState({
      address1: event.target.value
    });

  updateAddress2 = event =>
    this.setState({
      address2: event.target.value
    });

  updateCity = event =>
    this.setState({
      city: event.target.value
    });

  updateState = event =>
    this.setState({
      state: event.target.value
    });

  updateZip = event =>
    this.setState({
      zip: event.target.value
    });

  render() {
    return (
      <Modal isOpen={this.props.open} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>
          <i className="fa fa-user" aria-hidden="true" /> {this.props.header}
        </ModalHeader>
        <ModalBody>
          <div className="form-group users__form-group">
            <div className="row">
              <div className="col-md-6 users__input-container">
                <InputField
                  icon="user-o"
                  label="First Name"
                  value={this.state.firstName}
                  onChange={this.updateFirstName}
                />
              </div>
              <div className="col-md-6 users__input-container">
                <InputField
                  icon="user-o"
                  label="Last Name"
                  value={this.state.lastName}
                  onChange={this.updateLastName}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 users__input-container">
                <InputField
                  icon="envelope-o"
                  label="Email"
                  value={this.state.email}
                  onChange={this.updateEmail}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 users__input-container">
                <DropdownField
                  icon="users"
                  label="Role"
                  value={this.state.role}
                  onChange={this.updateRole}
                  options={this.roles}
                  width={170}
                />
              </div>
              <div className="col-md-6 users__input-container">
                <InputField
                  icon="mobile-phone"
                  label="Phone"
                  value={this.state.phone}
                  onChange={this.updatePhone}
                />
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-12 users__input-container">
                <InputField
                  icon="building"
                  label="Organization"
                  value={this.organization}
                  onChange={this.updateOrganization}
                />
              </div>
            </div> */}
            <div className="row">
              <div className="col-md-12 users__input-container">
                <InputField
                  icon="home"
                  label="1234 Main St"
                  value={this.state.address1}
                  onChange={this.updateAddress1}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 users__input-container">
                <InputField
                  icon="home"
                  label="Apartment, studio, or floor"
                  value={this.state.address2}
                  onChange={this.updateAddress2}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 users__input-container">
                <InputField
                  icon="map"
                  label="City"
                  value={this.state.city}
                  onChange={this.updateCity}
                />
              </div>
              <div className="col-md-4 users__input-container">
                <DropdownField
                  icon="map"
                  label="State"
                  value={this.state.state}
                  onChange={this.updateState}
                  options={this.states}
                />
              </div>
              <div className="col-md-4 users__input-container">
                <InputField
                  icon="map-marker"
                  label="Postal Code"
                  value={this.state.zip}
                  onChange={this.updateZip}
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Close</Button>{' '}
          <Button color="primary" onClick={this.props.toggle}>Save</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

UserModal.propTypes = {
  header: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default UserModal;
