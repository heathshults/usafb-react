import React from 'react';
import PropTypes from 'prop-types';

import './content.css';

const profileContent = props => (
  <div className={`${props.editing ? 'profile__content-editing' : 'profile__content'}  d-flex`}>
    {React.Children.map(props.children, child => child)}
  </div>
);

profileContent.propTypes = {
  children: PropTypes.array.isRequired,
  editing: PropTypes.bool.isRequired
};

export default profileContent;
