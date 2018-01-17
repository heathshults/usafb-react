import React from 'react';
import PropTypes from 'prop-types';

import './password.css';

const password = props => (
  <div className="d-flex align-items-center mt-1 mb-1">
    <p className="m-0 profile__input-label">
      Password
    </p>
    <div className="d-flex align-items-center justify-content-between profile__input-field">
      <p className="m-0">
        **********
      </p>
      <a
        role="button"
        className="profile__change-password-btn"
        onClick={props.openChangePasswordModal}
        tabIndex={0}
      >
        Change Password
      </a>
    </div>
  </div>
);

password.propTypes = {
  openChangePasswordModal: PropTypes.func.isRequired
};

export default password;
