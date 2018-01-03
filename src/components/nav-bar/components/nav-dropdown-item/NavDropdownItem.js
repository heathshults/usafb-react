import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from 'reactstrap';

import './nav-dropdown-item.css';

const navDropdownItem = props => (
  <DropdownItem className="nav-bar__dropdown-button-item" onClick={props.onClick}>
    {props.label}
  </DropdownItem>
);

navDropdownItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default navDropdownItem;
