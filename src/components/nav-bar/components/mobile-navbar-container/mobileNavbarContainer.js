import React from 'react';
import PropTypes from 'prop-types';
import './mobileNavbarContainer.css';

const mobileNavbarContainer = props => (
  <div className={`nav-bar__logo-container column mobileNavbarContainer ${!props.navbarCollapsed && 'mobileNavbarContainer-expanded'}`}>
    <p>hi</p>
  </div>
);

mobileNavbarContainer.propTypes = {
  navbarCollapsed: PropTypes.bool.isRequired
};

export default mobileNavbarContainer;
