import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import FormGroup from '../form-group/FormGroup';

class AdvancedSearch extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      source: '',
      gender: '',
      dateOfBirth: '',
      ageGroup: ''
    };
  }

  updateLastName = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }

  updateFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    });
  }

  render() {
    return (
      <div>
        <button
          className="data-table-filter__button"
          onClick={this.props.toggle}
        >
          <FontAwesome name="search" />
          <span className="data-table-filter__label">
            Advanced Search
          </span>
        </button>
        <Modal isOpen={this.props.display} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>
            Advanced Search
          </ModalHeader>
          <ModalBody>
            <FormGroup
              label="Last Name"
              value={this.state.lastName}
              onChange={this.updateLastName}
            />
            <FormGroup
              label="First Name"
              value={this.state.firstName}
              onChange={this.updateFirstName}
            />
          </ModalBody>
          <ModalFooter>
            <Button id="btn-cancel" className="btn btn-red mr-2">
              close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

AdvancedSearch.propTypes = {
  toggle: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired
};

export default AdvancedSearch;
