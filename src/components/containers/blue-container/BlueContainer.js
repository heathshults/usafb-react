import React from 'react';
import PropTypes from 'prop-types';

const blueContainer = props => (
  <section>
    {React.Children.map(props.children, child => child)}
  </section>
);

blueContainer.propTypes = {
  children: PropTypes.array.isRequired
};

export default blueContainer;
