import React from 'react';
import PropTypes from 'prop-types';

import './block.css';

const profileBlock = props => (
  <div className={`${props.editing ? 'profile__block-editing' : 'profile__block'}`}>
    {React.Children.map(props.children, child => child)}
  </div>
);

profileBlock.propTypes = {
  children: PropTypes.array.isRequired,
  editing: PropTypes.bool.isRequired
};

export default profileBlock;
