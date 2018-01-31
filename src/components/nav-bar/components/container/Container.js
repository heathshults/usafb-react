import React from 'react';
import PropTypes from 'prop-types';

import './container.css';

const container = props => (
  <header className="row justify-space-between pt-3 pb-3 pr-5 pl-5 nav-bar" style={props.showRedNavbar ? { background: 'linear-gradient(to bottom,#280306 0%,#49060A 100%)' } : {}}>
    {React.Children.map(props.children, child => child)}
  </header>
);

container.propTypes = {
  children: PropTypes.array.isRequired,
  showRedNavbar: PropTypes.bool.isRequired,
};

export default container;
