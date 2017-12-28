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
    this.EDIT_USER_STATUS = 'edit user';
    this.CREATE_USER_STATUS = 'create user';
    this.CANCELED = 'canceled';
    this.SAVED = 'saved';
    this.state = {
      // this variable will indicate whether or not
      // the modal should update state on componentWillReceiveProps
      modalActive: false,
      modalStatus: this.CREATE_USER_STATUS,
      dismissStatus: this.CANCELED,
      name_first: '',
      name_last: '',
      email: '',
      role: '',
      phone: '',
      organization_name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.modalActive) {
      // only set the state if the user object is not empty
      if (Object.keys(nextProps.user).length !== 0) {
        this.setState({
          modalStatus: this.EDIT_USER_STATUS,
          dismissStatus: this.CANCELED,
          name_first: nextProps.user.name_first,
          name_last: nextProps.user.name_last,
          email: nextProps.user.email,
          role: nextProps.user.role_id,
          phone: nextProps.user.phone,
          organization_name: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: '',
          id_external: nextProps.user.id_external,
          _id: nextProps.user._id //eslint-disable-line
        });
      } else {
        this.setState({
          modalStatus: this.CREATE_USER_STATUS,
          dismissStatus: this.CANCELED,
          name_first: '',
          name_last: '',
          email: '',
          role: '',
          phone: '',
          organization_name: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          zip: '',
        });
      }
    }
  }
  // TODO data is not getting saved when editing users beacuse
  // the updated state isn't getting passed through correctly
  updateFirstName = event =>
    this.setState({
      name_first: event.target.value,
      modalActive: true
    }); //eslint-disable-line

  updateLastName = event =>
    this.setState({
      name_last: event.target.value,
      modalActive: true
    });

  updateEmail = event =>
    this.setState({
      email: event.target.value,
      modalActive: true
    });

  updateRole = event =>
    this.setState({
      role: event.target.value,
      modalActive: true
    });

  updatePhone = event =>
    this.setState({
      phone: event.target.value,
      modalActive: true
    });

  updateOrganization = event =>
    this.setState({
      organization_name: event.target.value,
      modalActive: true
    });

  updateAddress1 = event =>
    this.setState({
      address1: event.target.value,
      modalActive: true
    });

  updateAddress2 = event =>
    this.setState({
      address2: event.target.value,
      modalActive: true
    });

  updateCity = event =>
    this.setState({
      city: event.target.value,
      modalActive: true
    });

  updateState = event =>
    this.setState({
      state: event.target.value,
      modalActive: true
    });

  updateZip = event =>
    this.setState({
      zip: event.target.value,
      modalActive: true
    });

  modalClosedCallback = () => {
    this.setState({
      modalActive: false
    }, this.props.onClosed(this.state));
  }

  dismissModal = (value) => {
    if (value === this.CANCELED) {
      this.setState({
        name_first: '',
        name_last: '',
        email: '',
        role: '',
        phone: '',
        organization_name: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        dismissStatus: value
      }, this.props.toggle);
    } else {
      this.setState({
        dismissStatus: value
      }, this.props.toggle);
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.open}
        toggle={this.props.toggle}
        onClosed={this.modalClosedCallback}
      >
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
                  value={this.state.name_first}
                  onChange={this.updateFirstName}
                />
              </div>
              <div className="col-md-6 users__input-container">
                <InputField
                  icon="user-o"
                  label="Last Name"
                  value={this.state.name_last}
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
            <div className="row">
              <div className="col-md-12 users__input-container">
                <InputField
                  icon="building"
                  label="Organization"
                  value={this.state.organization_name}
                  onChange={this.updateOrganization}
                />
              </div>
            </div>
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
          <Button color="secondary" onClick={() => this.dismissModal(this.CANCELED)}>Close</Button>{' '}
          <Button color="primary" onClick={() => this.dismissModal(this.SAVED)}>Save</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

UserModal.propTypes = {
  header: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  onClosed: PropTypes.func.isRequired
};

export default UserModal;
