import React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Dropzone from 'react-dropzone';

import './imports-modal.css';

const importsModal = props => (
  <Modal isOpen={props.open} toggle={props.toggle} >
    <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
    <ModalBody className="imports-modal__body">
      <Dropzone onDrop={props.onDrop} multiple={false}>
        <p className="text-center mt-4">
          Click here, or drag items to upload a svg file
        </p>
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
  onDrop: PropTypes.func.isRequired
};

export default importsModal;
