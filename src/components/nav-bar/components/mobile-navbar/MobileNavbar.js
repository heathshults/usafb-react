import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './mobileNavbar.css';

const mobileNavbar = props => (
  <div className="nav-bar__logo-container column">
    <button
      className="data-table-filter__button"
      onClick={this.props.toggle}
    >
      <FontAwesome name="search" />
      <span className="data-table-filter__label">
        Advanced Search
      </span>
    </button>
  </div>
);

mobileNavbar.propTypes = {
  toggleNavbar: PropTypes.func.isRequired
};

export default mobileNavbar;
