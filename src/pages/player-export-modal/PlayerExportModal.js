import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { CLOSE_EXPORT_MODAL } from 'pages/app/dux/actions';

import StepperContainer from 'components/export/components/stepper-container/StepperContainer';

// TODO: hide back button on last slide, change value of second next button to 'export'

class PlayerExportModal extends Component {
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
        { label: 'Organization State', value: 'Organization State' },
        { label: 'Date of Birth', value: 'Date of Birth' },
        { label: 'Email', value: 'Email' },
        { label: 'Postal Code', value: 'Postal Code' },
        { label: 'Years of Experience', value: 'Years of Experience' },
        { label: 'Opt In Marketing', value: 'Opt In Marketing' },
        { label: 'Registration Date', value: 'Registration Date' },
        { label: 'Season', value: 'Season' },
        { label: 'Season Year', value: 'Season Year' },
        { label: 'Level', value: 'Level' },
        { label: 'Level Type', value: 'Level Type' },
        { label: 'League Name', value: 'League Name' },
        { label: 'Team Name', value: 'Team Name' },
        { label: 'Position', value: 'Position' },
      ],
      showModal: false,
      selectedValues: [],
      selectedItem: undefined,
      activeFilter: '',
      activeFilterValue: '',
      savedFilters: [],
      filterValueEmptyError: false,
      validationError: false,
      dateOfBirthDirection: '&gt;'
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
      activeFilterValue: event.target.value,
      filterValueEmptyError: false
    });
  }

  saveFilter = () => {
    if (!this.state.activeFilterValue) {
      this.setState({
        filterValueEmptyError: true
      });
      return;
    }
    const newFilter = {
      label: this.state.activeFilter,
      value: this.state.activeFilterValue
    };
    if (newFilter.label === 'Date of Birth') {
      let carotDirection;
      if (this.state.dateOfBirthDirection === '&gt;') {
        carotDirection = '>';
      } else {
        carotDirection = '<';
      }
      newFilter.value = `${carotDirection} ${newFilter.value}`;
    }
    const newFilters = this.state.savedFilters.slice(0);
    newFilters.push(newFilter);
    this.setState({
      savedFilters: newFilters,
      filterValueEmptyError: false
    });
  }

  deleteSavedFilter = (event) => {
    const splitItems = event.target.id.split(',');
    const listOfFilters = this.state.savedFilters;
    for (let i = 0; i < listOfFilters.length; i += 1) {
      if (listOfFilters[i].label === splitItems[0] && listOfFilters[i].value === splitItems[1]) {
        listOfFilters.splice(i, 1);
      }
    }
    this.setState({
      savedFilters: listOfFilters
    });
  }

  triggerValidationError = () => {
    this.setState({
      validationError: true
    });
    setTimeout(() => {
      this.setState({
        validationError: false
      });
    }, 3000);
  }

  submitExport = () => {
    // complete once Noel is done
  }

  closeExport = () => {
    this.setState({
      selectedValues: [],
      selectedItem: undefined,
      activeFilter: '',
      activeFilterValue: '',
      savedFilters: [],
      filterValueEmptyError: false,
      validationError: false
    });
    this.props.toggleExportModalOff();
  }

  render() {
    return (
      <Modal isOpen={this.props.player_export_modal_open} toggle={this.props.toggleExportModalOff} size="lg">
        <ModalHeader toggle={this.props.toggleExportModalOff}>Player Export</ModalHeader>
        <ModalBody>
          <StepperContainer
            positions={['quarterback', 'center', 'running_back', 'fullback', 'wide_receiver', 'tight_end', 'left_guard', 'right_guard', 'left_tackle', 'right_tackle', 'defensive_tackle', 'defensive_end', 'linebacker', 'safety', 'cornerback', 'punter', 'not_available']}
            updateSelectedItem={this.updateSelectedItem}
            selectedItem={this.state.selectedItem}
            selectedValues={this.state.selectedValues}
            listValues={this.state.listValues}
            savedFilters={this.state.savedFilters}
            activeFilter={this.state.activeFilter}
            updateActiveFilterValue={this.updateActiveFilterValue}
            updateActiveFilter={this.updateActiveFilter}
            saveFilter={this.saveFilter}
            filterValueEmptyError={this.state.filterValueEmptyError}
            deleteSavedFilter={this.deleteSavedFilter}
            toggleExportModalOff={this.closeExport}
            validationError={this.state.validationError}
            triggerValidationError={this.triggerValidationError}
            dateOfBirthDirection={this.state.dateOfBirthDirection}
          />
        </ModalBody>
      </Modal>
    );
  }
}

PlayerExportModal.propTypes = {
  player_export_modal_open: PropTypes.bool,
  toggleExportModalOff: PropTypes.func.isRequired
};

PlayerExportModal.defaultProps = {
  player_export_modal_open: false
};

const mapStateToProps = ({ appReducer }) => appReducer;
const mapDispatchToProps = dispatch => ({
  togglePlayerExportModalOn: () => dispatch({ type: OPEN_PLAYER_EXPORT_MODAL }),
  toggleExportModalOff: () => dispatch({ type: CLOSE_EXPORT_MODAL })
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerExportModal);
