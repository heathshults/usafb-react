import React from 'react';
import PropTypes from 'prop-types';

const createUserButton = props => (
  <div className="col-5">
    <div className="d-flex h-100">
      <button className="btn btn-primary-02 ml-auto" onClick={props.toggle}>
        <i className="fa fa-user" aria-hidden="true" /> Create New
      </button>
    </div>
  </div>
);

createUserButton.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default createUserButton;
