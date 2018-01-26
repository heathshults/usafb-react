import React from 'react';
import PropTypes from 'prop-types';

import './blue-container.css';

const blueContainer = props => (
  <section className={`usafb__blue-container ${props.className}`}>
    <div className="usafb__blue-container-top-margin" />
    {React.Children.map(props.children, child => child)}
  </section>
);

blueContainer.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

blueContainer.defaultProps = {
  className: ''
};

export default blueContainer;
