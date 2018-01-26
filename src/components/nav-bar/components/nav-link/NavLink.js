import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './nav-link.css';

const navLink = props => (
  <div className={`d-flex ${props.hideSlash && 'noPadding'}`}>
    <li>
      <Link className={`nav-bar__link ${props.mobileFontSize && 'mobileFontSize'}`} to={props.to}>{props.label}</Link>
    </li>
    {
      !props.hideSlash &&
      <span className="nav-bar__separator" />
    }
  </div>
);

navLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mobileFontSize: PropTypes.bool,
  hideSlash: PropTypes.bool,
};

navLink.defaultProps = {
  mobileFontSize: false,
  hideSlash: false
};

export default navLink;
