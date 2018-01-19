import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Auth from 'hoc/auth/Auth';
import { manage_users, export_players, export_coaches } from 'utils/constants';

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
          <Link to="/me" className="link">
            <DropdownItem className="nav-bar__dropdown-button-item">
              My Profile
            </DropdownItem>
          </Link>
          <Auth role_permissions={this.props.role_permissions} permissionRequested={manage_users}>
            <Link to="/users" className="link">
              <DropdownItem className="nav-bar__dropdown-button-item">
                Manage Users
              </DropdownItem>
            </Link>
          </Auth>
          <Auth role_permissions={this.props.role_permissions} permissionRequested={[export_coaches, export_players]}>
            <Link to="/my-exports" className="link">
              <DropdownItem className="nav-bar__dropdown-button-item">
                My exports
              </DropdownItem>
            </Link>
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
