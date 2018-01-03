import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './nav-link.css';

const navLink = props => (
  <div className="d-flex">
    <li>
      <Link className="nav-bar__link" to={props.to}>{props.label}</Link>
    </li>
    <span className="nav-bar__separator" />
  </div>
);

navLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default navLink;
