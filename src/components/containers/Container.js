import React from 'react';
import PropTypes from 'prop-types';

const container = props => (
  <section id="main-content">
    <div className="container-fluid">
      {React.Children.map(props.children, child => child)}
    </div>
  </section>
);

container.propTypes = {
  children: PropTypes.array.isRequired
};

export default container;