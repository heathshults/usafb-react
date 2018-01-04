import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SearchModal extends Component {
  constructor() {
    super();
    this.CANCELED = 'canceled';
    this.SAVED = 'saved';

    this.state = {
      usafb_id: '',
      name_last: '',
      name_first: '',
      dob: '',
      city: '',
      state: ''
    };
  }

  componentWillReceiveProps() {
    this.setState({
      usafb_id: '',
      name_last: '',
      name_first: '',
      dob: '',
      city: '',
      state: ''
    });
  }

  dismissModal = (value) => {
    this.setState({
      dismissStatus: value
    }, this.toggleModal);
  }

  toggleModal = () => this.props.toggle(false);

  // get input fields in place
  // if at least one input field is valid, then allow search
  // otherwise keep save button disabled
  // when toggling, transform data so it is valid for API search
  render() {
    return (
      <Modal
        isOpen={this.props.open}
        onClosed={this.modalClosedCallback}
      >
        <ModalHeader>
          {this.props.header}
        </ModalHeader>
        <ModalBody>
          Search Coaches / Players
        </ModalBody>
        <ModalFooter>
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
