import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import FormGroupContainer from '../form-group-container/FormGroupContainer';
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
      ageGroup: '',
      organization: '',
      teamName: ''
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

  updateSource = (event) => {
    this.setState({
      source: event.target.value
    });
  }

  updateGender = (event) => {
    this.setState({
      gender: event.target.value
    });
  }

  updateDateOfBirth = (event) => {
    this.setState({
      dateOfBirth: event.target.value
    });
  }

  updateAgeGroup = (event) => {
    this.setState({
      ageGroup: event.target.value
    });
  }

  updateOrganization = (event) => {
    this.setState({
      organization: event.target.value
    });
  }

  updateTeamName = (event) => {
    this.setState({
      teamName: event.target.value
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
            <FormGroupContainer>
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
              <FormGroup
                label="Source"
                value={this.state.source}
                onChange={this.updateSource}
              />
              <FormGroup
                label="Gender"
                value={this.state.gender}
                onChange={this.updateGender}
              />
              <FormGroup
                label="Date of Birth"
                value={this.state.dateOfBirth}
                onChange={this.updateDateOfBirth}
              />
              <FormGroup
                label="Age Group"
                value={this.state.ageGroup}
                onChange={this.updateAgeGroup}
              />
              <FormGroup
                label="Organization"
                value={this.state.organization}
                onChange={this.updateOrganization}
              />
              <FormGroup
                label="Team Name"
                value={this.state.teamName}
                onChange={this.updateTeamName}
              />
            </FormGroupContainer>
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
