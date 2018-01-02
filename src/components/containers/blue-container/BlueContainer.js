import React from 'react';
import PropTypes from 'prop-types';

import './blue-container.css';

const blueContainer = props => (
  <section className="usafb__blue-container">
    {React.Children.map(props.children, child => child)}
  </section>
);

blueContainer.propTypes = {
  children: PropTypes.array.isRequired
};

export default blueContainer;
