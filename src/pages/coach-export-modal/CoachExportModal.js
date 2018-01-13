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
        { label: 'First Name', value: 1 },
        { label: 'Last Name', value: 2 },
        { label: 'City', value: 3 },
        { label: 'State', value: 4 },
        { label: 'USAFB_ID', value: 5 },
        { label: 'Organization Name', value: 6 },
        { label: 'School Name', value: 7 },
        { label: 'School City', value: 8 },
        { label: 'School State', value: 9 },
        { label: 'Date of Birth', value: 10 },
      ],
      selectedValues: [],
      selectedItem: undefined
    };
  }

  updateSelectedItem = (event) => {
    this.setState({
      selectedItem: event
    });
  }

  render() {
    return (
      <Modal isOpen={this.props.coach_export_modal_open} toggle={() => { }}>
        <ModalHeader>Coach Export</ModalHeader>
        <ModalBody>
          <StepperContainer updateSelectedItem={this.updateSelectedItem} selectedItem={this.state.selectedItem} selectedValues={this.state.selectedValues} listValues={this.state.listValues} />
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
