import React from 'react';
import PropTypes from 'prop-types';

import './content.css';

const content = props => (
  <div className="landing__content">
    {React.Children.map(props.children, child => child)}
  </div>
);

content.propTypes = {
  children: PropTypes.array.isRequired
};

export default content;
