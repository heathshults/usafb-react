import React from 'react';
import PropTypes from 'prop-types';

import './navigation-container.css';

const navigation = props => (
  <ul className="nav-bar__navigation mt-2 mt-lg-0 nav-bar__navigation-wrap">
    {React.Children.map(props.children, child => child)}
  </ul>
);

navigation.propTypes = {
  children: PropTypes.array.isRequired
};

export default navigation;
