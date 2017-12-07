import React from 'react';
import PropTypes from 'prop-types';

import './inputGroup.css';

const inputGroup = props => (
  <div className="container">
    <form action={props.action} className="input-group__form-container">
      {React.Children.map(props.children, child => child)}
    </form>
  </div>
);

inputGroup.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default inputGroup;
