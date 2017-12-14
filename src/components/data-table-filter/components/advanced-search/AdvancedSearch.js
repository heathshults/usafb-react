import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
          <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
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
