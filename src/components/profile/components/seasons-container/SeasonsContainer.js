import React from 'react';
import PropTypes from 'prop-types';

const SeasonsContainer = props => (
  <div className="card-red player-info card-red-mspacing-top">
    {React.Children.map(props.children, child => child)}
  </div>
);

SeasonsContainer.propTypes = {
  children: PropTypes.array.isRequired,
};

export default SeasonsContainer;
