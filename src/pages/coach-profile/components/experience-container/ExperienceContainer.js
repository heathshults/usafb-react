import React from 'react';
import PropTypes from 'prop-types';

const ExperienceContainer = props => (
  <div className="col h-100 bg-clear-white player-info red-theme whiteTools-wrapper">
    {React.Children.map(props.children, child => child)}
  </div>
);

ExperienceContainer.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ExperienceContainer;
