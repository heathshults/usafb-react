import React from 'react';
import PropTypes from 'prop-types';

import './mobileNavigationContainer.css';

const mobileNavigationContainer = props => (
  <ul className="nav-bar__mobileNavigation mt-2 mt-lg-0 nav-bar__navigation-wrap">
    {React.Children.map(props.children, child => child)}
  </ul>
);

mobileNavigationContainer.propTypes = {
  children: PropTypes.array.isRequired
};

export default mobileNavigationContainer;
