import React from 'react';
import PropTypes from 'prop-types';

import backgroundImage from './background-image.png';
import './container.css';

const container = props => (
  <div className="container-fluid login__container" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="row align-items-center w-100">
      {React.Children.map(props.children, child => child)}
    </div>
  </div>
);

container.propTypes = {
  children: PropTypes.array.isRequired,
};

export default container;
