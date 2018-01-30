import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  Label,
  FormGroup
} from 'reactstrap';

import states from 'services/data/states';
import './search-modal.css';

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

  updateSearchFilters = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  toggleModal = () => {
    if (this.valueInputted()) {
      this.props.toggle(this.state);
    }
  }

  valueInputted = () =>
    this.state.usafb_id || this.state.name_last ||
    this.state.name_first || this.state.dob ||
    this.state.city || this.state.state;

  close = () => {
    this.props.toggle(this.state, true);
  }

  render() {
    return (
      <Modal
        isOpen={this.props.open}
        onClosed={this.modalClosedCallback}
      >
        <ModalHeader toggle={this.close}>
          {this.props.header}
        </ModalHeader>
        <ModalBody>
          {/* <FormGroup>
            <InputGroup className="usafb-search-modal__input-group flex-column">
              <Label for="dob">Date of Birth</Label>
              <Input
                id="dob"
                value={this.state.dob}
                type="date"
                placeholder="Date of Birth"
                className="usafb-search-modal__dob"
                onChange={this.updateSearchFilters}
              />
            </InputGroup>
          </FormGroup> */}
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
            <select
              name="State"
              id="state"
              className="user-management__dropdown-field"
              value={this.state.state}
              onChange={this.updateSearchFilters}
            >
              {states.map(state => (
                <option
                  value={state.value}
                  key={state.value}
                >
                  {state.label}
                </option>
              ))}
            </select>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={this.close}
          >
            Close
          </Button>
          <Button
            color="primary"
            onClick={this.toggleModal}
            disabled={!this.valueInputted()}
          >
            Search
          </Button>
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
