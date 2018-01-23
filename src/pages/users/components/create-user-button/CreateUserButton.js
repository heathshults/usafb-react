import React from 'react';
import PropTypes from 'prop-types';

const createUserButton = props => (
  <div className="col-4">
    <div className="d-flex h-100">
      <button
        className="btn btn-primary-02 ml-auto"
        onClick={props.toggle}
        disabled={props.creatingUser}
      >
        <i className="fa fa-user" aria-hidden="true" />&nbsp;
        Create New
      </button>
    </div>
  </div>
);

createUserButton.propTypes = {
  toggle: PropTypes.func.isRequired,
  creatingUser: PropTypes.bool.isRequired
};

export default createUserButton;
