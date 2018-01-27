import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import states from 'services/data/states';

import InputField from '../input-field/InputField';
import DropdownField from '../dropdown-field/DropdownField';
import './user-modal.css';

class UserModal extends Component {
  constructor() {
    super();
    this.states = states;
    this.CREATE_USER_STATUS = 'create';
    this.EDIT_USER_STATUS = 'edit';

    this.state = {
      modalStatus: this.CREATE_USER_STATUS,
      dismissStatus: this.CANCELED,
      name_first: '',
      name_last: '',
      email: '',
      role_id: '',
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
    if (!nextProps.saving) {
      if (Object.keys(nextProps.user).length !== 0) {
        this.setState({
          modalStatus: this.EDIT_USER_STATUS,
          dismissStatus: this.CANCELED,
          name_first: nextProps.user.name_first,
          name_last: nextProps.user.name_last,
          email: nextProps.user.email,
          role_id: nextProps.user.role_id,
          phone: nextProps.user.phone,
          organization_name: '',
          address1: nextProps.user.address.street_1,
          address2: nextProps.user.address.street_2,
          city: nextProps.user.address.city,
          state: nextProps.user.address.state,
          zip: nextProps.user.address.postal_code,
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
          role_id: '',
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

  getButtonLabel = () => {
    if (this.props.saving) {
      return (
        <div>
          <i className="fa fa-spinner fa-spin mr-2" />
          {this.props.header.toUpperCase() === 'CREATE NEW USER' ? 'Creating...' : 'Saving...'}
        </div>
      );
    }

    return this.props.header.toUpperCase() === 'CREATE NEW USER' ? 'Create' : 'Save';
  }

  updateFirstName = event =>
    this.setState({
      name_first: event.target.value
    });

  updateLastName = event =>
    this.setState({
      name_last: event.target.value
    });

  updateEmail = event =>
    this.setState({
      email: event.target.value
    });

  updateRole = event =>
    this.setState({
      role_id: event.target.value
    });

  updatePhone = event =>
    this.setState({
      phone: event.target.value
    });

  updateOrganization = event =>
    this.setState({
      organization_name: event.target.value
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

  // we need to format the state data in a way that will be accepted by the API
  transformData = () => {
    const data = {
      modalStatus: this.state.modalStatus,
      dismissStatus: this.state.dismissStatus,
      name_first: this.state.name_first,
      name_last: this.state.name_last,
      email: this.state.email,
      role_id: this.state.role_id,
      phone: this.state.phone,
      // organization_name: this.state.organization_name,
      address: {
        city: this.state.city,
        postal_code: this.state.zip,
        state: this.state.state,
        street_1: this.state.address1,
        street_2: this.state.address2
      }
    };

    if (this.state.modalStatus === this.EDIT_USER_STATUS) {
      data._id = this.state._id; //eslint-disable-line
      data.id_external = this.state.id_external;
    }

    return data;
  }

  dismissModal = (value) => {
    this.setState({
      name_first: '',
      name_last: '',
      email: '',
      role_id: '',
      phone: '',
      organization_name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      dismissStatus: value
    }, this.props.toggle);
  }

  resetState = () =>
    this.setState({
      name_first: '',
      name_last: '',
      email: '',
      role_id: '',
      phone: '',
      organization_name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    });

  canSaveOrEdit = () =>
    this.state.name_first === '' || this.state.name_last === '' ||
    this.state.email === '' || this.state.role_id === '' ||
    this.state.phone === '' || this.state.address1 === '' ||
    this.state.city === '' || this.state.state === '' ||
    this.state.zip === '';

  modalAction = () => {
    const data = this.transformData();
    this.props.action(data);
  }

  render() {
    return (
      <Modal
        isOpen={this.props.open}
        onClosed={this.resetState}
        size="lg"
      >
        <ModalHeader toggle={this.dismissModal}>
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
                  disabled={this.props.header.toUpperCase() === 'EDIT USER'}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 users__input-container">
                <DropdownField
                  icon="users"
                  label="Role"
                  value={this.state.role_id}
                  onChange={this.updateRole}
                  options={this.props.roles}
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
                  value={this.state.organization_name}
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
                  id=""
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
          <Button
            color="secondary mr-2"
            onClick={this.dismissModal}
            disabled={this.props.saving}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={this.modalAction}
            disabled={this.canSaveOrEdit() || this.props.saving}
          >
            {this.getButtonLabel()}
          </Button>
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
  roles: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired
};

export default UserModal;
