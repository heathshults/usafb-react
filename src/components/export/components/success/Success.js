import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Success = props => (
  <div className="success">
    <h1>Success!</h1>
    <p>Your export has been queued. You&#39;ll receive a notification once it&#39;s available.</p>
    <Link to={{ pathname: '/my-exports' }}>
      <button className="btn btn-primary mr-2" onClick={props.toggleExportModalOff}>View exports</button>
    </Link>
  </div>
);

Success.propTypes = {
  toggleExportModalOff: PropTypes.func.isRequired
};

export default Success;
