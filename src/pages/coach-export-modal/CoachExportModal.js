import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import StepperContainer from './components/stepper-container/StepperContainer';

class CoachExportModal extends Component {
  constructor() {
    super();

    this.state = {
      listValues: [
        { label: 'First Name', value: 'First Name' },
        { label: 'Last Name', value: 'Last Name' },
        { label: 'City', value: 'City' },
        { label: 'State', value: 'State' },
        { label: 'USAFB_ID', value: 'USAFB ID' },
        { label: 'Organization Name', value: 'Organization Name' },
        { label: 'School Name', value: 'School Name' },
        { label: 'School City', value: 'School City' },
        { label: 'School State', value: 'School State' },
        { label: 'Date of Birth', value: 'Date of Birth' },
      ],
      selectedValues: [],
      selectedItem: undefined,
      activeFilter: '',
      activeFilterValue: '',
      savedFilters: []
    };
  }

  updateSelectedItem = (event) => {
    const splitItems = event.split(',');
    this.setState({
      selectedItem: event,
      selectedValues: splitItems
    });
  }

  updateActiveFilter = (event) => {
    this.setState({
      activeFilter: event.target.value,
      activeFilterValue: ''
    });
  }

  updateActiveFilterValue = (event) => {
    this.setState({
      activeFilterValue: event.target.value
    });
    console.log('this.sta', this.state.savedFilters); // eslint-disable-line
  }

  saveFilter = () => {
    const newFilter = {
      label: this.state.activeFilter,
      value: this.state.activeFilterValue
    };
    const newFilters = this.state.savedFilters.slice(0);
    newFilters.push(newFilter);
    this.setState({
      savedFilters: newFilters
    });
  }

  submitExport = () => {
    // do something here
  }

  render() {
    return (
      <Modal isOpen={this.props.coach_export_modal_open} toggle={() => { }}>
        <ModalHeader>Coach Export</ModalHeader>
        <ModalBody>
          <StepperContainer
            updateSelectedItem={this.updateSelectedItem}
            selectedItem={this.state.selectedItem}
            selectedValues={this.state.selectedValues}
            listValues={this.state.listValues}
            savedFilters={this.state.savedFilters}
            activeFilter={this.state.activeFilter}
            updateActiveFilterValue={this.updateActiveFilterValue}
            updateActiveFilter={this.updateActiveFilter}
            saveFilter={this.saveFilter}
          />
        </ModalBody>
      </Modal>
    );
  }
}

CoachExportModal.propTypes = {
  coach_export_modal_open: PropTypes.bool
};

CoachExportModal.defaultProps = {
  coach_export_modal_open: false
};

const mapStateToProps = ({ appReducer }) => appReducer;
const mapDispatchToProps = dispatch => ({
  toggleCoachExportModalOn: () => dispatch({ type: OPEN_COACH_EXPORT_MODAL })
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachExportModal);
