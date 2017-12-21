import React from 'react';
import PropTypes from 'prop-types';

const message = props => (
  <div className="col-4">
    <div className="alert alert-info alert-dismissible fade show" hidden role="alert">
      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button>
      <h5>
        {props.title}
      </h5>
      <p>
        {props.message}
      </p>
    </div>
  </div>
);

message.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default message;
