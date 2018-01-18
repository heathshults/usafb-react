import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Auth from 'hoc/auth/Auth';

import User from '../user/User';
import './user-dropdown.css';

class NavDropdown extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  toggle = () => this.setState({
    open: !this.state.open
  });

  render() {
    return (
      <ButtonDropdown
        isOpen={this.state.open}
        toggle={this.toggle}
        className="nav-bar__dropdown"
      >
        <DropdownToggle
          caret
          className="nav-bar__dropdown-button"
        >
          <User />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className="nav-bar__dropdown-button-item">
            <Link to="/me" className="link">
              My Profile
            </Link>
          </DropdownItem>
          <Auth role_permissions={this.props.role_permissions} permissionRequested={'manage_users'}>
            <DropdownItem className="nav-bar__dropdown-button-item">
              <Link to="/users" className="link">
                Manage Users
              </Link>
            </DropdownItem>
          </Auth>
          <Auth role_permissions={this.props.role_permissions} permissionRequested={['export_coaches', 'export_palyers']}>
            <DropdownItem className="nav-bar__dropdown-button-item">
              <Link to="/my-exports" className="link">
                My Exports
              </Link>
            </DropdownItem>
          </Auth>
          <DropdownItem divider />
          <DropdownItem className="nav-bar__dropdown-button-item" onClick={this.props.logout} >
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

NavDropdown.propTypes = {
  logout: PropTypes.func.isRequired,
  role_permissions: PropTypes.array.isRequired
};

export default NavDropdown;
