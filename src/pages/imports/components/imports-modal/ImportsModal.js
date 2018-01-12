import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Dropzone from 'react-dropzone';

import './imports-modal.css';

const getDropzoneText = (status) => {
  if (status.toUpperCase() === 'ACCEPTING') {
    return (
      <Alert color="light" className="imports-modal__dropzone-status border border-primary">
        <div>
          <i className="fa fa-upload imports-modal__dropzone-icon" ariaHidden="true" />
        </div>
        <p>
          Drop your CSV file here, or click to select files to upload
        </p>
      </Alert>
    );
  } else if (status.toUpperCase() === 'REJECTED') {
    return 'Invalid csv file!';
  }

  return (
    <Alert color="primary" className="imports-modal__dropzone-status">
      <div>
        <i className="fa fa-spinner fa-spin imports-modal__dropzone-icon" />
      </div>
      <br />
      <br />
      <p>
        Checking....
      </p>
    </Alert>
  );
};

const importsModal = props => (
  <Modal isOpen={props.open}>
    <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
    <ModalBody className="imports-modal__body">
      <Dropzone
        onDrop={props.onDrop}
        multiple={false}
        accept="text/csv"
        disabled={props.status.toUpperCase() === 'CHECKING'}
        className="imports-modal__dropzone"
      >
        {getDropzoneText(props.status)}
      </Dropzone>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
      <Button color="secondary" onClick={props.toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
);

importsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

export default importsModal;
