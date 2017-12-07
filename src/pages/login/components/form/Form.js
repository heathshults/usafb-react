import React from 'react';
import PropTypes from 'prop-types';

import './form.css';

const form = props => (
  <div className="col-md-4">
    <div id="si-form" className="width-si-form" style={{ display: 'none' }}>
      {React.Children.map(props.children, child => child)}
    </div>
  </div>
);

form.propTypes = {
  children: PropTypes.array.isRequired
};

export default form;
