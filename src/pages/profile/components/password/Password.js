import React from 'react';
// import PropTypes from 'prop-types';

const password = () => (
  <div className="d-flex align-items-center mt-1 mb-1">
    <p className="m-0 profile__input-label">
      Password
    </p>
    <div className="d-flex align-items-center justify-content-between profile__input-field">
      <p className="m-0">
        **********
      </p>
      <a>
        Change Password
      </a>
    </div>
  </div>
);

password.propTypes = {

};

export default password;
