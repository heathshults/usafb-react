import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo/Logo';

import './form.css';

const form = props => (
  <div className="col-md-4 text-center">
    <Logo />
    <div id="si-form" className="width-si-form">
      {React.Children.map(props.children, child => child)}
    </div>
  </div>
);

form.propTypes = {
  children: PropTypes.array.isRequired
};

export default form;
