import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import { OPEN_PLAYER_EXPORT_MODAL } from 'pages/app/dux/actions';

import StepperContainer from './components/stepper-container/StepperContainer';


const PlayerExportModal = props => (
  <Modal isOpen={props.appReducer.player_export_modal_open} toggle={() => { }}>
    <ModalHeader>Player Export</ModalHeader>
    <ModalBody>
      <StepperContainer />
    </ModalBody>
  </Modal>
);

PlayerExportModal.propTypes = {
  appReducer: PropTypes.shape({
    player_export_modal_open: PropTypes.bool
  })
};

PlayerExportModal.defaultProps = {
  appReducer: {
    player_export_modal_open: false
  }
};

const mapStateToProps = ({ appReducer }) => appReducer;
const mapDispatchToProps = dispatch => ({
  togglePlayerExportModalOn: () => dispatch({ type: OPEN_PLAYER_EXPORT_MODAL })
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerExportModal);
