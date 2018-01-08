import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
          <DropdownItem href="/me" className="nav-bar__dropdown-button-item">
            My Profile
          </DropdownItem>
          <DropdownItem href="/users" className="nav-bar__dropdown-button-item">
            Manage Users
          </DropdownItem>
          <DropdownItem href="/help" className="nav-bar__dropdown-button-item">
            Help / FAQ
          </DropdownItem>
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
  logout: PropTypes.func.isRequired
};

export default NavDropdown;
