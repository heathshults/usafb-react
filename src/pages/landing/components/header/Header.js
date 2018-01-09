import React from 'react';
import PropTypes from 'prop-types';

import './header.css';

const header = props => (
  <div className="landing__header">
    <h1>
      {props.count}
    </h1>
    <p>
      {props.header}
    </p>
  </div>
);

header.propTypes = {
  count: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired
};

export default header;
