import React from 'react';

import defaultImg from 'images/user/default.png';
import './avatar.css';

const avatar = () => (
  <div className="d-flex flex-column profile__avatar-container">
    <img
      className="profile__avatar"
      src={defaultImg}
      alt=""
    />
    <button className="profile__edit-user-button">
      <i id="editAvatarIcon" className="fa fa-edit action-button-icon" aria-hidden="true" />&nbsp;
      update
    </button>
  </div>
);

export default avatar;
