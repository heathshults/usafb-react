import React from 'react';
import PropTypes from 'prop-types';

import './container.css';

const container = props => (
  <div className="row justify-space-between p-4 nav-bar">
    {React.Children.map(props.children, child => child)}
  </div>
);

container.propTypes = {
  children: PropTypes.array.isRequired,
};

export default container;
