import React from 'react';
import PropTypes from 'prop-types';

import './mobileNavigationContainer.css';

const mobileNavigationContainer = props => (
  <ul className={`nav-bar__mobileNavigation mt-2 mt-lg-0 nav-bar__navigation-wrap ${props.mobileSize && 'nav-bar__mobileNavigation-mobileSize'}`}>
    {React.Children.map(props.children, child => child)}
  </ul>
);

mobileNavigationContainer.propTypes = {
  children: PropTypes.array.isRequired,
  mobileSize: PropTypes.bool
};

mobileNavigationContainer.defaultProps = {
  mobileSize: false
};

export default mobileNavigationContainer;
