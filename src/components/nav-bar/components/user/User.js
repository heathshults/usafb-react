import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from 'images/user/default.png';
import './user.css';

const user = props => (
  <div>
    <img
      src={defaultImg}
      alt="User Profile"
      className="nav-bar__user-avatar"
    />
    <span className="nav-bar__user-name">
      {props.name}
    </span>
  </div>
);

user.propTypes = {
  name: PropTypes.string.isRequired
};

export default user;
