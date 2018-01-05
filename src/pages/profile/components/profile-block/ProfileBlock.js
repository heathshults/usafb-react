import React from 'react';
import PropTypes from 'prop-types';

import './profile-block.css';

const profileBlock = props => (
  <div className="profile__block">
    {React.Children.map(props.children, child => child)}
  </div>
);

profileBlock.propTypes = {
  children: PropTypes.array.isRequired
};

export default profileBlock;
