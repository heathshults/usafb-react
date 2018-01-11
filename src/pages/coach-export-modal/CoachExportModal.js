import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import StepperContainer from './components/stepper-container/StepperContainer';

const CoachExportModal = props => (
  <Modal isOpen={props.appReducer.coach_export_modal_open} toggle={() => { }}>
    <ModalHeader>Coach Export</ModalHeader>
    <ModalBody>
      <StepperContainer />
    </ModalBody>
  </Modal>
);

CoachExportModal.propTypes = {
  appReducer: PropTypes.shape({
    coach_export_modal_open: PropTypes.bool
  })
};

CoachExportModal.defaultProps = {
  appReducer: {
    coach_export_modal_open: false
  }
};

const mapStateToProps = ({ appReducer }) => appReducer;
const mapDispatchToProps = dispatch => ({
  toggleCoachExportModalOn: () => dispatch({ type: OPEN_COACH_EXPORT_MODAL })
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachExportModal);
