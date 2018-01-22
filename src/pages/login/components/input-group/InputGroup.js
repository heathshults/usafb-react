import React from 'react';
import PropTypes from 'prop-types';

import './inputGroup.css';

const inputGroup = props => (
  <div className="container">
    <form className="m-0 p-0" onSubmit={props.login}>
      {React.Children.map(props.children, child => child)}
    </form>
  </div>
);

inputGroup.propTypes = {
  login: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default inputGroup;
