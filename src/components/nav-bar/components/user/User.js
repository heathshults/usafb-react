import React from 'react';
// import PropTypes from 'prop-types';
import defaultImg from 'images/user/default.png';
import './user.css';

const user = () => (
  <div>
    <img
      src={defaultImg}
      alt="User Profile"
      className="nav-bar__user-avatar"
    />
    <span className="nav-bar__user-name">
      @kawaharakent
    </span>
  </div>
);

user.propTypes = {

};

export default user;
