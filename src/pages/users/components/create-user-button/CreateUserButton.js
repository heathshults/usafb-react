import React from 'react';
// import PropTypes from 'prop-types';

const createUserButton = () => (
  <div className="col-5">
    <div className="d-flex h-100">
      <a href="users-add.html" className="btn btn-primary-02 ml-auto" data-toggle="modal" data-target="#create-u">
        <i className="fa fa-user" aria-hidden="true" /> Create New</a>
    </div>
  </div>
);

createUserButton.propTypes = {

};

export default createUserButton;
