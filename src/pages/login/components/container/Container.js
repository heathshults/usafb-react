import React from 'react';
import PropTypes from 'prop-types';

// import backgroundImage from 'images/bg/bg-usafb-signin.jpg';
import './container.css';


const container = props => (
  // <div className="container-fluid full-screen-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
  <div className="container-fluid signin-screen-container">
    <div className="row align-items-center w-100 h-100">
      {React.Children.map(props.children, child => child)}
    </div>
  </div>
);

container.propTypes = {
  children: PropTypes.array.isRequired,
};

export default container;
