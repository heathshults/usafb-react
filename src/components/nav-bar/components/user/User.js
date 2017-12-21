import React from 'react';
// import PropTypes from 'prop-types';
import testImg from 'images/sample/profile.jpg';
import './user.css';

const user = () => (
  <div>
    <img
      src={testImg}
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
