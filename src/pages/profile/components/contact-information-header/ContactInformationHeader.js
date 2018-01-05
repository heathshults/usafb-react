import React from 'react';

import './contact-information-header.css';

const contactInformationHeader = () => (
  <div className="d-flex justify-content-between align-items-center">
    <h4 className="m-0">
      Contact Information
    </h4>
    <button className="profile__contact-information-header-edit">
      <i id="editAvatarIcon" className="fa fa-edit action-button-icon" aria-hidden="true" />&nbsp;
      edit
    </button>
  </div>
);

export default contactInformationHeader;
