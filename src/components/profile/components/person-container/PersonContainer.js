import React from 'react';
import PropTypes from 'prop-types';

const PersonContainer = props => (
  <div className="col-3 mr-3 h-100 bg-clear-white player-info">
    {React.Children.map(props.children, child => child)}
  </div>
);

PersonContainer.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PersonContainer;
