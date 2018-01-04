import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup } from 'reactstrap';

import './search-modal.css';

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

  updateSearchFilters = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
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
          <InputGroup className="usafb-search-modal__input-group">
            <Input
              id="usafb_id"
              value={this.state.usafb_id}
              type="text"
              placeholder="USAFB ID"
              onChange={this.updateSearchFilters}
            />
            <Input
              id="dob"
              value={this.state.dob}
              type="text"
              placeholder="Date of Birth"
              onChange={this.updateSearchFilters}
            />
          </InputGroup>
          <InputGroup className="usafb-search-modal__input-group">
            <Input
              id="name_first"
              value={this.state.name_first}
              type="text"
              placeholder="First Name"
              onChange={this.updateSearchFilters}
            />
            <Input
              id="name_last"
              value={this.state.name_last}
              type="text"
              placeholder="Last Name"
              onChange={this.updateSearchFilters}
            />
          </InputGroup>
          <InputGroup className="usafb-search-modal__input-group">
            <Input
              id="city"
              value={this.state.city}
              type="text"
              placeholder="City"
              onChange={this.updateSearchFilters}
            />
            <Input
              id="state"
              value={this.state.state}
              type="text"
              placeholder="State"
              onChange={this.updateSearchFilters}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.dismissModal(this.SAVED)}>Search</Button>
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
