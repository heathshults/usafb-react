import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Dropzone from 'react-dropzone';

import DropzoneStatus from '../dropzone-status/DropzoneStatus';
import './imports-modal.css';

const getDropzoneText = (status) => {
  if (status.toUpperCase() === 'ACCEPTING') {
    return (
      <DropzoneStatus
        color="light"
        className="border border-primary"
        icon="upload"
        message="Drop your CSV file here, or click to select files to upload"
      />
    );
  } else if (status.toUpperCase() === 'REJECTED') {
    return (
      <DropzoneStatus
        color="danger"
        className="text-white"
        icon="exclamation-triangle"
        message="This file is too big! Please upload a csv file that is less than 2600 rows"
      />
    );
  } else if (status.toUpperCase() === 'ACCEPTED') {
    return (
      <DropzoneStatus
        color="success"
        className="text-white"
        icon="thumbs-up"
        message="Ready to import! Please click the import button below to start"
      />
    );
  }

  return (
    <DropzoneStatus
      color="light"
      className="w-100"
      icon="spinner fa-spin"
      message="Give us a moment...."
    />
  );
};

const importsModal = props => (
  <Modal isOpen={props.open}>
    <ModalHeader toggle={props.cancel}>Import CSV File</ModalHeader>
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
      <Button color="secondary" onClick={props.cancel}>Cancel</Button>&nbsp;
      <Button color="primary" onClick={props.upload} disabled={props.status.toUpperCase() !== 'ACCEPTED'}>Import</Button>
    </ModalFooter>
  </Modal>
);

importsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  cancel: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

export default importsModal;
