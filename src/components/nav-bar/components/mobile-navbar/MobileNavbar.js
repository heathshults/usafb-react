import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import './mobileNavbar.css';

const mobileNavbar = props => (
  <div className="nav-bar__logo-container">
    <NavbarToggler onClick={props.toggleNavbar} className="mr-2 mobileNavbar" />
    <Collapse isOpen={!props.navbarCollapsed} navbar className="mobileNavbar">
      <Nav navbar>
        <NavItem>
          <NavLink to="/" label="comps">Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" label="github">Github</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </div>
);

mobileNavbar.propTypes = {
  navbarCollapsed: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired
};

export default mobileNavbar;
