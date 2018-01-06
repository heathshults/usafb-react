import React from 'react';
import PropTypes from 'prop-types';

import './content.css';

const profileContent = props => (
  <div className={`${props.editing ? 'profile__content-editing' : 'profile__content'} d-flex ${props.className}`}>
    {React.Children.map(props.children, child => child)}
  </div>
);

profileContent.propTypes = {
  children: PropTypes.any.isRequired,
  editing: PropTypes.bool.isRequired,
  className: PropTypes.string
};

profileContent.defaultProps = {
  className: ''
};

export default profileContent;
