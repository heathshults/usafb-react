import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SearchModal extends Component {
  constructor() {
    super();

    this.state = {
      usafb_id: '',
      name_last: '',
      name_first: '',
      dob: '',
      city: '',
      state: ''
    };
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
          Search Coaches / Players
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => this.dismissModal(this.CANCELED)}>Close</Button>{' '}
          <Button color="primary" onClick={() => this.dismissModal(this.SAVED)}>Save</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

SearchModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired
};

export default SearchModal;
