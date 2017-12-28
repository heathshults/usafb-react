import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const headerMessage = props => (
  <div className="col-4">
    <Alert
      isOpen={props.isOpen}
      toggle={props.toggle}
      color={props.color}
    >
      {props.message}
    </Alert>
  </div>
);

headerMessage.propTypes = {
  color: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default headerMessage;
