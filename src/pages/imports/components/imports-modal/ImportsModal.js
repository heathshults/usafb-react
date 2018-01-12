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
          <i className="fa fa-upload imports-modal__dropzone-icon" aria-hidden="true" />
        </div>
        <br />
        <p className="text-center">
          Drop your CSV file here, or click to select files to upload
        </p>
      </Alert>
    );
  } else if (status.toUpperCase() === 'REJECTED') {
    return (
      <Alert color="danger" className="imports-modal__dropzone-status text-white">
        <div>
          <i className="fa fa-exclamation-triangle imports-modal__dropzone-icon" aria-hidden="true" />
        </div>
        <br />
        <p className="text-center">
          This file is too big! Please upload a csv file that is less than 2600 rows
        </p>
      </Alert>
    );
  } else if (status.toUpperCase() === 'ACCEPTED') {
    return (
      <Alert color="success" className="imports-modal__dropzone-status text-white">
        <div>
          <i className="fa fa-thumbs-up imports-modal__dropzone-icon" aria-hidden="true" />
        </div>
        <br />
        <p className="text-center">
          Ready to import! Please click the import button below to start
        </p>
      </Alert>
    );
  }

  return (
    <Alert color="light" className="imports-modal__dropzone-status w-100">
      <div>
        <i className="fa fa-spinner fa-spin imports-modal__dropzone-icon" aria-hidden="true" />
      </div>
      <br />
      <p className="text-center">
        Give us a moment....
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
        className="imports-modal__dropzone w-100"
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
