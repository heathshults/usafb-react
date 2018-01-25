import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './mobileNavbar.css';

const mobileNavbar = props => (
  <div className="nav-bar column">
    <button
      className="navMenuButton"
      onClick={props.toggleNavbar}
    >
      <FontAwesome name="navicon" className="navMenuButton-icon" size="2x" />
    </button>
  </div>
);

mobileNavbar.propTypes = {
  toggleNavbar: PropTypes.func.isRequired
};

export default mobileNavbar;
