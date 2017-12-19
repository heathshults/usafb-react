import React from 'react';
import PropTypes from 'prop-types';

import './error.css';

const error = props => (
  <p className="login__error-message">
    {props.message}
  </p>
);

error.propTypes = {
  message: PropTypes.string.isRequired
};

export default error;
