import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

import './dropzone-status.css';

const dropzoneStatus = props => (
  <Alert color={props.color} className={`${props.className} dropzone-status`}>
    <div>
      <i className={`dropzone-status__icon fa fa-${props.icon}`} aria-hidden="true" />
    </div>
    <br />
    <p className="text-center">
      {props.message}
    </p>
  </Alert>
);

dropzoneStatus.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

dropzoneStatus.defaultProps = {
  className: ' '
};

export default dropzoneStatus;
