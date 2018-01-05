import React from 'react';

import sampleImage from 'images/sample/profile.jpg';
import './avatar.css';

const avatar = () => (
  <div className="d-flex flex-column">
    <img
      className="profile__avatar"
      src={sampleImage}
      alt=""
    />
    <button className="profile__edit-user-button">
      <i id="editAvatarIcon" className="fa fa-edit action-button-icon" aria-hidden="true" />&nbsp;
      edit
    </button>
  </div>
);

export default avatar;
