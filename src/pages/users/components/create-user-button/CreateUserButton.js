import React from 'react';
import PropTypes from 'prop-types';

const getButtonLabel = (creating) => {
  if (creating) {
    return (
      <div>
        <i className="fa fa-spinner fa-spin" /> Creating...
      </div>
    );
  }

  return (
    <div>
      <i className="fa fa-user" aria-hidden="true" /> Create New
    </div>
  );
};

const createUserButton = props => (
  <div className="col-5">
    <div className="d-flex h-100">
      <button
        className="btn btn-primary-02 ml-auto"
        onClick={props.toggle}
        disabled={props.creatingUser}
      >
        {getButtonLabel(props.creatingUser)}
      </button>
    </div>
  </div>
);

createUserButton.propTypes = {
  toggle: PropTypes.func.isRequired,
  creatingUser: PropTypes.bool.isRequired
};

export default createUserButton;
